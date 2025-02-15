import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const DISCOGS_API_URL =
  "https://api.discogs.com/users/manhartjohn/collection/folders/0/releases";
const DISCOGS_API_TOKEN = process.env.PUBLIC_DISCOGS_API_TOKEN;

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

async function fetchAllDiscogsRecords() {
  console.log("Fetching all records from Discogs...");

  let allRecords: any[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    console.log(`📦 Fetching page ${page}...`);

    const response = await fetch(
      `${DISCOGS_API_URL}?per_page=100&page=${page}`,
      {
        headers: { Authorization: `Discogs token ${DISCOGS_API_TOKEN}` },
      }
    );

    if (!response.ok) {
      console.error("❌ Failed to fetch from Discogs:", response.status);
      return [];
    }

    const json = await response.json();

    if (page === 1) {
      totalPages = Math.ceil(json.pagination.items / 100);
      console.log(`📦 Total Pages: ${totalPages}`);
    }

    const formattedRecords = json.releases.map((record: any) => ({
      id: record.id,
      title: record.basic_information.title,
      artist: record.basic_information.artists[0].name,
      year: record.basic_information.year,
      genre: record.basic_information.genres,
      image_url: record.basic_information.cover_image,
      discogs_url: record.basic_information.resource_url,
      last_updated: new Date().toISOString(),
    }));

    allRecords = [...allRecords, ...formattedRecords];
    page++;
  }

  console.log(`✅ Fetched ${allRecords.length} total records from Discogs.`);
  return allRecords;
}

async function cleanUpSupabaseRecords(discogsRecords: any[]) {
  console.log("🧹 Checking for records to delete...");

  const { data: supabaseRecords, error } = await supabase
    .from("records")
    .select("id");

  if (error) {
    console.error("❌ Error fetching Supabase records:", error);
    return;
  }

  const discogsRecordIds = new Set(discogsRecords.map((record) => record.id));
  const supabaseRecordIds = new Set(supabaseRecords.map((record) => record.id));

  const recordsToDelete = [...supabaseRecordIds].filter(
    (id) => !discogsRecordIds.has(id)
  );

  if (recordsToDelete.length === 0) {
    console.log("✅ No records to delete.");
    return;
  }

  console.log(`🗑️ Deleting ${recordsToDelete.length} records from Supabase...`);

  const { error: deleteError } = await supabase
    .from("records")
    .delete()
    .in("id", recordsToDelete);

  if (deleteError) {
    console.error("❌ Error deleting records from Supabase:", deleteError);
  } else {
    console.log("✅ Deleted missing records from Supabase.");
  }
}

async function updateSupabaseRecords() {
  const records = await fetchAllDiscogsRecords();

  if (records.length === 0) {
    console.log("No records found or failed to fetch.");
    return;
  }

  console.log(`🔄 Updating ${records.length} records in Supabase...`);

  const { data, error } = await supabase.from("records").upsert(records, {
    onConflict: "id",
  });

  if (error) {
    console.error("❌ Error updating records in Supabase:", error);
    return;
  }

  console.log("✅ Records updated successfully in Supabase!");

  // ✅ Call cleanup function
  await cleanUpSupabaseRecords(records);
}

// Run the script
updateSupabaseRecords();
