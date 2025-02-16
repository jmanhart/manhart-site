import { createClient } from "@supabase/supabase-js";
import fetch from "node-fetch";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role key for uploads
);

/**
 * Uploads an image to Supabase Storage and returns the new URL.
 * @param {string} imageUrl - The Discogs image URL
 * @param {number} releaseId - The release ID for naming the file
 * @returns {Promise<string | null>} - The Supabase image URL or null if failed
 */
export async function uploadImageToSupabase(
  imageUrl: string,
  releaseId: number
): Promise<string | null> {
  try {
    console.log(`📡 Downloading image for release ${releaseId}...`);

    const response = await fetch(imageUrl);
    if (!response.ok)
      throw new Error(`Failed to fetch image: ${response.statusText}`);

    const imageBuffer = await response.arrayBuffer();
    const filePath = `records/${releaseId}${path.extname(imageUrl)}`; // Store in 'records/' folder

    const { data, error } = await supabase.storage
      .from("record-images")
      .upload(filePath, imageBuffer, {
        contentType: response.headers.get("content-type") || "image/jpeg",
        upsert: true, // Overwrite existing images if needed
      });

    if (error) throw error;

    // Generate a public URL for the uploaded image
    const { publicUrl } = supabase.storage
      .from("record-images")
      .getPublicUrl(filePath);
    console.log(`✅ Image uploaded: ${publicUrl}`);
    return publicUrl;
  } catch (error) {
    console.error(`❌ Image upload failed for ${releaseId}:`, error);
    return null;
  }
}
