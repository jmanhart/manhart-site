import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const DISCOGS_API_URL =
  "https://api.discogs.com/users/manhartjohn/collection/folders/0/releases";
const DISCOGS_API_TOKEN = process.env.PUBLIC_DISCOGS_API_TOKEN;

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use Service Role Key for Storage Uploads
);

async function fetchModule() {
  const fetch = (await import("node-fetch")).default; // ✅ Fix: Dynamic Import
  return fetch;
}

async function uploadImageToSupabase(imageUrl: string, recordId: number) {
  try {
    const fetch = await fetchModule(); // ✅ Fix: Use the dynamically imported fetch
    const response = await fetch(imageUrl);
    if (!response.ok)
      throw new Error(`Failed to download image from ${imageUrl}`);

    const buffer = await response.buffer();
    const filePath = `record-images/${recordId}.jpg`;

    const { data, error } = await supabase.storage
      .from("record-images")
      .upload(filePath, buffer, {
        contentType: "image/jpeg",
        upsert: true,
      });

    if (error) {
      console.error("❌ Failed to upload image to Supabase:", error);
      return null;
    }

    return `${process.env.SUPABASE_URL}/storage/v1/object/public/${filePath}`;
  } catch (err) {
    console.error("❌ Image Upload Error:", err);
    return null;
  }
}

async function fetchAllDiscogsRecords() {
  console.log("Fetching all records from Discogs...");
  const fetch = await fetchModule(); // ✅ Fix: Use the dynamically imported fetch

  let allRecords: any[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    console.log(`📦 Fetching page ${page}...`);

    const response = await fetch(
      `${DISCOGS_API_URL}?per_page=100&page=${page}`,
      {
        headers: { Authorization: `Discogs token ${DISCOGS_API_TOKEN}` },
      }
    );

    if (!response.ok) {
      console.error("❌ Failed to fetch from Discogs:", response.status);
      return [];
    }

    const json = (await response.json()) as {
      releases: any[];
      pagination: { items: number };
    };

    if (page === 1) {
      totalPages = Math.ceil(json.pagination.items / 100);
      console.log(`📦 Total Pages: ${totalPages}`);
    }

    for (const record of json.releases) {
      const supabaseImageUrl = await uploadImageToSupabase(
        record.basic_information.cover_image,
        record.id
      );

      allRecords.push({
        id: record.id,
        title: record.basic_information.title,
        artist: record.basic_information.artists[0].name,
        year: record.basic_information.year,
        genre: record.basic_information.genres,
        image_url: supabaseImageUrl || record.basic_information.cover_image, // ✅ Fallback to Discogs if upload fails
        discogs_url: record.basic_information.resource_url,
        last_updated: new Date().toISOString(),
      });
    }

    page++;
  }

  console.log(`✅ Fetched ${allRecords.length} total records from Discogs.`);
  return allRecords;
}

async function updateSupabaseRecords() {
  const records = await fetchAllDiscogsRecords();

  if (records.length === 0) {
    console.log("No records found or failed to fetch.");
    return;
  }

  console.log(`🔄 Updating ${records.length} records in Supabase...`);

  const { data, error } = await supabase.from("records").upsert(records, {
    onConflict: "id",
  });

  if (error) {
    console.error("❌ Error updating records in Supabase:", error);
  } else {
    console.log("✅ Records updated successfully in Supabase!");
  }
}

// Run the script
updateSupabaseRecords();
