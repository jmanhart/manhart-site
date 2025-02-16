// /*
// ==========================================
// 📂 fetchAndUpdate.ts - Main Sync Logic
// ==========================================

// 📝 Description:
// This script orchestrates the entire sync process.
// It will:
// - Fetch data from the Discogs API using `fetchDiscogsData`.
// - Process the fetched records.
// - Update Supabase using `updateSupabase`.
// - Log results and handle errors.

// 🔧 Key Considerations:
// - Ensure sequential execution to avoid inconsistencies.
// - Allow for scheduled and manual execution.
// */

// export async function syncDiscogsToSupabase() {
//   console.log("🔄 Starting Discogs to Supabase sync...");
//   const records = await fetchDiscogsData();
//   if (records.length === 0) {
//     console.log("⚠️ No records fetched from Discogs.");
//     return;
//   }
//   const result = await updateSupabase(records);
//   console.log(result ? "✅ Sync complete!" : "❌ Sync failed!");
// }
