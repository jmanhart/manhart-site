import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { downloadImages } from "./downloadImages"; // Import image handling
import { logInfo, logError } from "./log";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const DISCOGS_API_KEY = process.env.PUBLIC_DISCOGS_API_TOKEN;
const DISCOGS_USER = process.env.DISCOGS_USER;
const DISCOGS_COLLECTION_URL = `https://api.discogs.com/users/${DISCOGS_USER}/collection/folders/0/releases?per_page=100`;

export async function fetchDiscogsRecords() {
  try {
    logInfo("📡 Fetching records from Discogs API...");

    const response = await fetch(DISCOGS_COLLECTION_URL, {
      headers: { Authorization: `Discogs token=${DISCOGS_API_KEY}` },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Discogs data: ${response.statusText}`);
    }

    const data = await response.json();
    logInfo(`✅ Successfully fetched ${data.releases.length} records.`);

    // Download images first
    await downloadImages(data.releases);

    const records = data.releases.map((release) => {
      const releaseId = release.id;
      const title = release.basic_information?.title || "Unknown Title";
      const artist =
        release.basic_information?.artists?.[0]?.name || "Unknown Artist";

      // Construct Supabase image URL (assuming images are stored in `/covers/`)
      const supabaseImageUrl = supabase.storage
        .from("records")
        .getPublicUrl(`covers/${releaseId}.jpg`).publicURL;

      return {
        release_id: releaseId,
        title,
        artist,
        image_url:
          supabaseImageUrl || release.basic_information?.cover_image || "", // Prefer Supabase, fallback to Discogs
      };
    });

    logInfo(`✅ Processed ${records.length} records.`);

    // Insert into Supabase
    const { error } = await supabase
      .from("records")
      .upsert(records, { onConflict: ["release_id"] });

    if (error) throw error;
    logInfo("✅ Successfully updated Supabase records.");
  } catch (error) {
    logError("❌ Error in fetchDiscogsRecords", error);
  }
}
