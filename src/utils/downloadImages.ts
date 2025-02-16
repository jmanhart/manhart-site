/**
 * downloadImages.ts
 *
 * This module handles downloading album images from Discogs and uploading them to Supabase Storage.
 * - Downloads images from Discogs using the record’s `image_url`.
 * - Uploads images to Supabase Storage.
 * - Checks if an image already exists to prevent duplicate uploads.
 */

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fetch from "node-fetch";
import path from "path";
import { uploadImageToSupabase } from "./uploadImageToSupabase";
import { logInfo, logWarn, logError } from "./log";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const STORAGE_BUCKET = "records"; // Adjust this to match your bucket

export async function downloadImages(releases: any[]) {
  logInfo("📸 Checking and downloading images...");

  for (const release of releases) {
    try {
      const releaseId = release.id;
      const title = release.basic_information?.title || "Unknown Title";
      const discogsImageUrl = release.basic_information?.cover_image || "";

      if (!discogsImageUrl) {
        logWarn(`⚠️ No image found for ${title}`);
        continue;
      }

      // Extract file extension (default to .jpg if unknown)
      const extension =
        path.extname(new URL(discogsImageUrl).pathname) || ".jpg";
      const storagePath = `covers/${releaseId}${extension}`;

      // Check if the image already exists in Supabase Storage
      const { data: existingFiles, error: checkError } = await supabase.storage
        .from(STORAGE_BUCKET)
        .list("covers");

      if (checkError) {
        logError(`❌ Error checking existing file for ${title}`, checkError);
        continue;
      }

      // If image exists, skip download
      const fileExists = existingFiles.some(
        (file) => file.name === `${releaseId}${extension}`
      );
      if (fileExists) {
        logInfo(`✅ Image already exists for ${title}, skipping...`);
        continue;
      }

      logInfo(`⬇️ Downloading image for ${title}...`);

      const uploadedUrl = await uploadImageToSupabase(
        discogsImageUrl,
        releaseId
      );
      if (uploadedUrl) {
        logInfo(`✅ Successfully uploaded: ${uploadedUrl}`);
      } else {
        logWarn(`⚠️ Failed to upload image for ${title}`);
      }
    } catch (error) {
      logError("❌ Error processing image:", error);
    }
  }

  logInfo("📸 Image processing complete.");
}
