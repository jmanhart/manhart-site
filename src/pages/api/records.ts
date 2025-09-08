import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

// Ensure environment variables are set
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("Missing Supabase environment variables!");
  throw new Error("Supabase credentials are missing!");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function GET() {
  try {
    console.log("Fetching records from Supabase...");

    const { data, error } = await supabase.from("records").select("*");

    if (error) throw error;

    // Construct the full Supabase Storage URL dynamically
    const SUPABASE_STORAGE_URL = `${SUPABASE_URL}/storage/v1/object/public/record-images/covers/`;

    const records = data.map((record) => ({
      ...record,
      supabase_image_url:
        record.supabase_image_url &&
        !record.supabase_image_url.startsWith(SUPABASE_STORAGE_URL)
          ? `${SUPABASE_STORAGE_URL}${record.supabase_image_url}`
          : record.supabase_image_url, // Use the existing value if it's already correct
    }));

    console.log(`Retrieved ${records.length} records from Supabase.`);
    return new Response(JSON.stringify(records), { status: 200 });
  } catch (err) {
    console.error("API Error fetching records:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
}
