// src/utils/checkStorage.ts
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const STORAGE_BUCKET = "record-images";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function isImageStored(recordId: string): Promise<string | null> {
  const filePath = `${recordId}.jpg`;
  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${filePath}`;

  const { data, error } = await supabase.storage.from(STORAGE_BUCKET).list();

  if (error) {
    console.error(`❌ Error checking storage for ${recordId}:`, error.message);
    return null;
  }

  const fileExists = data.some((file) => file.name === filePath);
  return fileExists ? publicUrl : null;
}
