/**
 * downloadImages.ts
 *
 * This module handles downloading album images from Discogs and uploading them to Supabase Storage.
 * - Downloads images from Discogs using the record’s `image_url`.
 * - Uploads images to Supabase Storage.
 * - Updates the Supabase table with the correct image URL.
 *
 * Expected Functions:
 * - `downloadAndUploadImage(recordId: string, imageUrl: string)`: Fetches and uploads an image.
 */

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function downloadAndUploadImage(
  recordId: string,
  imageUrl: string
) {
  // TODO: Implement logic to download and upload images to Supabase
}
