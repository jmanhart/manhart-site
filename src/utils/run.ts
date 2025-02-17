import { fetchDiscogsRecords } from "./fetchDiscogs";
import { updateSupabaseRecords } from "./updateSupabase";
import { logInfo, logError } from "./log";

async function main() {
  try {
    logInfo("🚀 Starting Discogs-to-Supabase sync...");

    // ✅ Fetch records from Discogs
    const records = await fetchDiscogsRecords();

    // ✅ Ensure `records` is an array
    if (!Array.isArray(records)) {
      logError("❌ Records input is not an array", records);
      return;
    }

    // ✅ Update Supabase if new records exist
    if (records.length > 0) {
      await updateSupabaseRecords(records);
    } else {
      logInfo("✅ No new records to add. Everything is already up-to-date.");
    }

    logInfo("✅ Sync complete.");
  } catch (error) {
    logError("❌ Unexpected error in sync process", error);
  }
}

main();
