---
layout: "../../layouts/BlogPost.astro"
title: "How I Ended My Vinyl Buying Anxiety (part II)"
description: "Making my record purchasing experience even less stressful."
pubDate: "April 15, 2025"
location: "Seattle"
weather: "🌤️"
count: "004"
---

A few months ago, I built a simple web app to track my record collection because one of my greatest fears is holding a record in a store and not remembering if I already own it. My first attempt was a static list, but that was boring and a pain to maintain. Then I discovered Discogs has a public API, which made fetching my collection easy.

That worked… for a while. But I had an even bigger problem: my setup depended entirely on the Discogs API—every time I loaded my site, it pulled fresh data from Discogs. That meant:

Slow load times whenever I accessed my collection.
Too many API requests, making the setup fragile.
Missing images if Discogs changed a URL or removed a record.
So, it was time for V2 of my record tracker, and this update is a game changer. The new system automates everything, stores my collection locally, and makes it faster while keeping the fun of building dumb personal projects.

## What's New in Version

Instead of pulling my collection every single time from Discogs, my app now:

- Fetches my collection once per day and saves it to a database (Supabase).
- Downloads album images from Discogs and stores them in Supabase Storage.
- Ensures no duplicate images get uploaded, preventing wasted storage.
- Runs automatically via a cron job, keeping my collection up to date without manual work.
- Massively reduces API calls, making it more stable and future-proof.

The best part? It all happens in the background. I never have to think about it, and my collection is always fresh.

### Fetching & Storing My Record Collection

The core of this update is a new pipeline that pulls my collection from Discogs and updates my database.

Before, my app was making real-time API calls. Now, it works like this:

1. Fetch all records from Discogs
2. Check for updates (new records, missing records, or changes)
3. Save the updated list to my database

**The fetch function looks like this:**

```javascript
export async function fetchDiscogsRecords() {
  console.log("📡 Fetching records from Discogs API...");

  const response = await fetch(DISCOGS_COLLECTION_URL, {
    headers: { Authorization: `Discogs token=${DISCOGS_API_KEY}` },
  });

  if (!response.ok) throw new Error(`Failed to fetch Discogs data`);

  const data = await response.json();
  console.log(`✅ Processed ${data.releases.length} records.`);

  return data.releases;
}
```

Once the data is pulled in, we store it in Supabase, which acts as our local database. That means fast queries and no unnecessary API calls.

```javascript
const { error } = await supabase
  .from("records")
  .upsert(records, { onConflict: ["release_id"] });

if (error) throw error;
console.log("✅ Successfully updated Supabase records.");
```

Now, my app only loads from Supabase, making it significantly faster.

Now, my app only loads from Supabase, making it significantly faster.

### 🎨 Storing & Serving Album Images Locally

One of the biggest changes was handling album cover images.

Before, my site relied on Discogs-hosted images. But if Discogs ever removed a record or changed a URL, my images would break. To fix this, I download and store images in Supabase Storage so I always have them.

**The image pipeline works like this:**

1. Check if an album image already exists in Supabase Storage
2. If not, download the image from Discogs
3. Upload the image to my storage bucket
4. Save the new image URL in my database

Here's how it checks for duplicates before downloading:

```javascript
const { data: existingFile } = await supabase.storage
  .from(STORAGE_BUCKET)
  .list("covers");

const fileExists = existingFile.some((file) => file.name === `${releaseId}.jpg`);

if (fileExists) {
  console.log(`✅ Image already exists, skipping upload.`);
  return `${SUPABASE_STORAGE_URL}/${storagePath}`;
```

And if it's a new image, we download and upload it:

```javascript
const response = await fetch(imageUrl);
if (!response.ok) throw new Error(`Failed to download image`);

const imageBuffer = await response.arrayBuffer();

const { error } = await supabase.storage
  .from(STORAGE_BUCKET)
  .upload(storagePath, imageBuffer, { upsert: true });

if (error) throw error;
console.log(`✅ Uploaded image: ${storagePath}`);
```

Now, every record in my collection has a permanent image URL that won't break. 🎉

### Why This Update Is Awesome

This new setup solves every issue from V1 while making the experience smoother:

- Way faster
- No more waiting for Discogs, all data is loaded instantly.
- Images never break—Stored permanently, even if Discogs removes them.
- Automatic updates—I never have to think about syncing my collection.
- No unnecessary API calls—Avoiding API limits and keeping it stable.
- Easier searching—Everything is indexed and ready to go.

This small, fun project has grown into a real-world solution that makes my life easier. I can walk into any record store, quickly search my collection, and instantly know if I already own an album.
