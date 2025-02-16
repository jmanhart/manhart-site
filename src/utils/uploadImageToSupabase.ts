/**
 * uploadImageToSupabase.ts
 *
 * Handles downloading album images from Discogs and uploading them to Supabase Storage.
 * - Prevents duplicate uploads by checking if the image already exists.
 * - Ensures images are stored properly and returns their Supabase URLs.
 */

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fetch from "node-fetch";
import path from "path";
import { logInfo, logWarn, logError } from "./log";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const STORAGE_BUCKET = "record-images"; // Adjust this to match your Supabase storage bucket
const SUPABASE_STORAGE_URL = `${process.env.SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}`;

export async function uploadImageToSupabase(
  imageUrl: string,
  releaseId: number
): Promise<string | null> {
  try {
    if (!imageUrl) {
      logWarn(`⚠️ No image URL provided for release ID: ${releaseId}`);
      return null;
    }

    // Extract file extension, default to .jpg if unknown
    const extension = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const storagePath = `covers/${releaseId}${extension}`;

    logInfo(`🔍 Checking if image exists in Supabase storage: ${storagePath}`);

    // Check if the image already exists in Supabase Storage
    const { data: existingFiles, error: checkError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .list("covers");

    if (checkError) {
      logError(`❌ Error checking existing file for ${releaseId}`, checkError);
      return null;
    }

    // Skip download if image already exists
    const fileExists = existingFiles.some(
      (file) => file.name === `${releaseId}${extension}`
    );
    if (fileExists) {
      logInfo(`✅ Image already exists: ${storagePath}, skipping upload.`);
      return `${SUPABASE_STORAGE_URL}/${storagePath}`;
    }

    logInfo(`⬇️ Downloading image from Discogs: ${imageUrl}`);
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }

    const imageBuffer = await response.arrayBuffer();

    logInfo(`⬆️ Uploading new image to Supabase: ${storagePath}`);
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(storagePath, imageBuffer, {
        upsert: true,
        contentType: "image/jpeg",
      });

    if (error) {
      logError(`❌ Failed to upload image: ${error.message}`);
      return null;
    }

    logInfo(`✅ Successfully uploaded image: ${storagePath}`);
    return `${SUPABASE_STORAGE_URL}/${storagePath}`;
  } catch (error) {
    logError(`❌ Error in uploadImageToSupabase`, error);
    return null;
  }
}
