---
layout: "../../layouts/BlogPost.astro"
title: "How I Ended My Vinyl Buying Anxiety (part I)"
description: "A project to make sure I never buy the same record twice."
pubDate: "Nov 17, 2024"
location: "Seattle"
weather: "🌙"
---

One of my greatest fears is holding a record at a record store and not remembering if I already have it. Well, a few weeks ago, I set out to solve this problem and put these fears to rest for good.

I wanted something I could easily search on my phone when standing in a record store, but I also wanted something I could maintain easily. But really, I just wanted to build something because coding dumb stuff is fun.

My first attempt was creating a static list of my record collection. Yes, this “worked” but felt kind of lame and boring, and would be a nightmare to maintain.

After realizing my static list just wasn’t cutting it, I remembered something that could solve the problem and satisfy my itch to code: [Discogs](https://www.discogs.com/) has a public API.

I know what you are thinking _“…why don’t you just use the Discogs app and avoid all of this?”_ Don't get me wrong I love Discogs, but the UX in general is rather, umm difficult to use at times.

Honestly, logging all my records into Discogs took way longer than standing up V1 of this project.

**Seriously it was one simple call**

```javascript
export const fetchCollection = async (apiKey) => {
  const apiUrl = "https://api.discogs.com/.../";

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Discogs token=${apiKey}`,
      },
    });
    const data = await response.json();
    return data.releases;
  } catch (error) {
    console.error("Error fetching collection:", error);
    return [];
  }
};

// Adding a Sort for V1 as well
try {
  collection = await fetchCollection(apiKey);
  collection.sort((a, b) => {
    const artistA = a.basic_information.artists[0]?.name.toLowerCase() || "";
    const artistB = b.basic_information.artists[0]?.name.toLowerCase() || "";
    return artistA < artistB ? -1 : artistA > artistB ? 1 : 0;
  });
} catch (error) {
  console.error("Error fetching collection:", error);
  collection = [];
}
```

This was a fun, silly project that helps me stay organized for my next record purchase. I thought I'd just add this and be done, but nope I already have a few enhancements I want to work on.

Upcoming Improvements:

- Adding a search bar for quicker, easier navigation
- Enhancing the mobile layout and styles—V1 is solid but a bit rough
- Calculating the total runtime of the collection
- Creating a public Spotify playlist that updates with all my records
- Setting up a database structure to minimize Discogs API calls

Oh it's live as well! [Check out my full record collection](https://www.manhart.io/records)
