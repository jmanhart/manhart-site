// src/utils/run.ts
import { isImageStored } from "./checkStorage.ts";
import { fetchDiscogsImage } from "./fetchDiscogs.ts";
import { uploadImageToSupabase } from "./uploadImages.ts";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const TABLE_NAME = "records";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchAllRecords() {
  console.log(`📂 Fetching all records from Supabase table: ${TABLE_NAME}...`);

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("id, discogs_id, image_url");

  if (error) {
    console.error("❌ Error fetching records:", error.message);
    return [];
  }

  console.log(`✅ Found ${data.length} records.`);
  return data;
}

async function processRecords() {
  const records = await fetchAllRecords();
  if (records.length === 0) {
    console.log("⚠️ No records found.");
    return;
  }

  for (const record of records) {
    const recordId = record.id;
    let imageUrl = record.image_url;

    console.log(`🔍 Checking image for record ${recordId}...`);

    // ✅ Step 1: Check if image already exists in Supabase Storage
    const storedImage = await isImageStored(recordId);
    if (storedImage) {
      console.log(`✅ Image already stored in Supabase: ${storedImage}`);
      continue; // ✅ Skip to the next record
    }

    // ✅ Step 2: If missing, fetch from Discogs API
    if (!imageUrl) {
      imageUrl = await fetchDiscogsImage(record.release_id);
      if (!imageUrl) {
        console.log(`⚠️ No image found for record ${recordId}, skipping...`);
        continue;
      }
    }

    // ✅ Step 3: Upload image to Supabase
    console.log(`⬆️ Attempting upload for record ${recordId}...`);
    const uploadedImageUrl = await uploadImageToSupabase(imageUrl, recordId);

    if (!uploadedImageUrl) {
      console.log(`⚠️ Upload failed for record ${recordId}, skipping...`);
      continue;
    }

    // ✅ Step 4: Update Supabase table with the correct image URL
    const { error } = await supabase
      .from(TABLE_NAME)
      .update({ image_url: uploadedImageUrl })
      .eq("id", recordId);

    if (error) {
      console.error(
        `❌ Failed to update Supabase for ${recordId}:`,
        error.message
      );
    } else {
      console.log(`📌 Updated record ${recordId} with image URL.`);
    }
  }

  console.log("🎉 All records processed successfully!");
}

// ✅ Run the full process
processRecords();
