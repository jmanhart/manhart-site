// src/utils/uploadImages.ts
import { createClient } from "@supabase/supabase-js";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const STORAGE_BUCKET = "record-images";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function uploadImageToSupabase(
  imageUrl: string,
  recordId: string
): Promise<string | null> {
  try {
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      console.error(`❌ Failed to download image from Discogs: ${imageUrl}`);
      return null;
    }

    const imageBuffer = await imageResponse.buffer();
    const filePath = `${recordId}.jpg`;

    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(filePath, imageBuffer, {
        contentType: "image/jpeg",
        upsert: true,
      });

    if (error) {
      console.error(`❌ Supabase upload error:`, error.message);
      return null;
    }

    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${filePath}`;
    console.log(`✅ Uploaded image to Supabase: ${publicUrl}`);
    return publicUrl;
  } catch (error) {
    console.error(`❌ Error uploading to Supabase:`, error);
    return null;
  }
}
