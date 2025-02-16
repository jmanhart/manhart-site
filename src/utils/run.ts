/**
 * run.ts
 *
 * The master script that orchestrates all modules.
 * - Fetches Discogs data.
 * - Updates Supabase with the latest records.
 * - Downloads and stores images if needed.
 * - Ensures robust logging for debugging.
 */

import { fetchDiscogsRecords } from "./fetchDiscogs";
import { updateSupabaseRecords } from "./updateSupabase";

async function main() {
  console.log("🚀 Starting Discogs-to-Supabase sync...");

  const records = await fetchDiscogsRecords();
  await updateSupabaseRecords(records);

  console.log("✅ Sync complete.");
}

// Run the script
main().catch((err) => console.error("❌ Unexpected error:", err));
