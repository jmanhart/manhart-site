import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { DiscogsRecord } from "./fetchDiscogs";

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const TABLE_NAME = "records";

export async function updateSupabaseRecords(supabase, records) {
  if (!Array.isArray(records)) {
    console.error("❌ Records is not an array:", records);
    return;
  }

  console.log(
    `📦 Preparing to insert ${records.length} records into Supabase...`
  );

  if (records.length === 0) {
    console.warn("⚠️ No records to insert. Skipping Supabase update.");
    return;
  }

  const { error } = await supabase.from("records").upsert(records, {
    onConflict: ["release_id"],
  });

  if (error) {
    console.error("❌ Supabase insert error:", error);
    return;
  }

  console.log("✅ Supabase update successful!");
}

// export async function updateSupabaseRecords(records: DiscogsRecord[]) {
//   if (records.length === 0) {
//     console.log("⚠️ No records to update.");
//     return;
//   }

//   console.log("📦 Updating Supabase with Discogs records...");

//   for (const record of records) {
//     const { id, title, artist, release_id, image_url } = record;

//     // Check if record exists
//     const { data: existingRecord, error: fetchError } = await supabase
//       .from(TABLE_NAME)
//       .select("id")
//       .eq("release_id", release_id)
//       .single();

//     if (fetchError && fetchError.code !== "PGRST116") {
//       console.error(
//         `❌ Error checking record ${release_id}:`,
//         fetchError.message
//       );
//       continue;
//     }

//     if (existingRecord) {
//       // Update existing record
//       const { error: updateError } = await supabase
//         .from(TABLE_NAME)
//         .update({ title, artist, image_url })
//         .eq("release_id", release_id);

//       if (updateError) {
//         console.error(
//           `❌ Failed to update record ${release_id}:`,
//           updateError.message
//         );
//       } else {
//         console.log(`🔄 Updated record ${release_id}: ${title}`);
//       }
//     } else {
//       // Insert new record
//       const { error: insertError } = await supabase
//         .from(TABLE_NAME)
//         .insert([{ id, title, artist, release_id, image_url }]);

//       if (insertError) {
//         console.error(
//           `❌ Failed to insert record ${release_id}:`,
//           insertError.message
//         );
//       } else {
//         console.log(`✅ Inserted new record ${release_id}: ${title}`);
//       }
//     }
//   }

//   console.log("🎉 Supabase records update complete.");
// }

/**
 * updateSupabase.ts
 *
 * This module handles updating the Supabase database with new or modified Discogs data.
 * - It checks for existing records and updates them if necessary.
 * - It inserts new records if they are not found.
 * - It ensures that only changed data is updated.
 *
 * Expected Functions:
 * - `syncRecordsWithSupabase(records: any[])`: Updates the Supabase table with Discogs records.
 * - `updateRecord(record: any)`: Updates a single record in Supabase.
 */
