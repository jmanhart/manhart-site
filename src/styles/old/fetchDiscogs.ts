// src/utils/fetchDiscogs.ts
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const DISCOGS_API_KEY = process.env.DISCOGS_API_KEY!;
const DISCOGS_BASE_URL = "https://api.discogs.com/releases/";

export async function fetchDiscogsImage(
  releaseId: string
): Promise<string | null> {
  try {
    const url = `${DISCOGS_BASE_URL}${releaseId}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Discogs token ${DISCOGS_API_KEY}`,
        "User-Agent": "YourAppName/1.0",
      },
    });

    if (!response.ok) {
      console.error(
        `❌ Discogs API error: ${response.status} - ${response.statusText}`
      );
      return null;
    }

    const data = await response.json();
    const imageUrl =
      data.images?.find((img: any) => img.type === "primary")?.resource_url ||
      null;

    if (!imageUrl) {
      console.warn(`⚠️ No primary image found for release ID: ${releaseId}`);
      return null;
    }

    console.log(`✅ Fetched image for release ${releaseId}: ${imageUrl}`);
    return imageUrl;
  } catch (error) {
    console.error(`❌ Error fetching from Discogs:`, error);
    return null;
  }
}
