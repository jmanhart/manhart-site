import { fetchDiscogsRecords } from "./fetchDiscogs.ts";
import { getExistingImages } from "./checkSupabaseStorage.ts";
import { uploadImageToSupabase } from "./uploadToSupabase.ts";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function processMissingImages() {
  const existingImages = await getExistingImages();
  const records = await fetchDiscogsRecords();

  let updates = [];

  for (const record of records) {
    const recordId = record.id.toString();
    if (existingImages.has(recordId)) {
      console.log(
        `✅ Image for ${record.basic_information.title} already exists. Skipping.`
      );
      continue;
    }

    let imageUrl =
      record.basic_information.cover_image ||
      record.basic_information.thumb ||
      null;

    if (!imageUrl) {
      console.warn(`⚠️ No image found for ${record.basic_information.title}`);
      continue;
    }

    const uploadedImageUrl = await uploadImageToSupabase(imageUrl, record.id);

    if (uploadedImageUrl) {
      updates.push({
        id: record.id,
        image_url: uploadedImageUrl,
      });
    }
  }

  if (updates.length > 0) {
    console.log(`🔄 Updating ${updates.length} records in Supabase...`);
    const { error } = await supabase.from("records").upsert(updates, {
      onConflict: "id",
    });

    if (error) {
      console.error("❌ Supabase update failed:", error.message);
    } else {
      console.log("✅ Successfully updated records in Supabase!");
    }
  } else {
    console.log("✅ All images already exist. Nothing to upload.");
  }
}

processMissingImages();
