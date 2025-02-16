/**
 * fetchDiscogsRecords.ts
 *
 * ✅ Fetches the user's collection from the Discogs API.
 * ✅ Maps the response to a structured format.
 * ✅ Handles errors and logs useful debugging info.
 */

import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const DISCOGS_API_KEY = process.env.PUBLIC_DISCOGS_API_TOKEN;
const DISCOGS_USER = process.env.DISCOGS_USER;
const BASE_URL = `https://api.discogs.com/users/${DISCOGS_USER}/collection/folders/0/releases?per_page=100`;

export interface DiscogsRecord {
  id: number;
  title: string;
  artist: string;
  release_id: number;
  image_url: string;
}

export async function fetchDiscogsRecords(): Promise<DiscogsRecord[]> {
  try {
    console.log("📡 Fetching records from Discogs API...");

    let records: DiscogsRecord[] = [];
    let nextPageUrl: string | null = BASE_URL;

    while (nextPageUrl) {
      const response = await fetch(nextPageUrl, {
        headers: { Authorization: `Discogs token=${DISCOGS_API_KEY}` },
      });

      if (!response.ok) {
        throw new Error(
          `❌ Failed to fetch Discogs data: ${response.statusText}`
        );
      }

      const data = await response.json();
      if (!data.releases) {
        console.warn("⚠️ No releases found in response.");
        break;
      }

      // Process and store records
      const pageRecords: DiscogsRecord[] = data.releases.map(
        (release: any) => ({
          id: release.id,
          title: release.basic_information.title || "Unknown Title",
          artist:
            release.basic_information.artists?.[0]?.name || "Unknown Artist",
          release_id: release.id,
          image_url: release.basic_information.cover_image || "",
        })
      );

      records = [...records, ...pageRecords];

      console.log(`✅ Fetched ${pageRecords.length} records from page.`);

      // Move to next page if available
      nextPageUrl = data.pagination?.urls?.next || null;
    }

    console.log(
      `🎉 Successfully fetched a total of ${records.length} records from Discogs.`
    );
    return records;
  } catch (error) {
    console.error("❌ Error fetching from Discogs:", error);
    return [];
  }
}
