import fetch from "node-fetch";

const API_URL = "https://api.discogs.com/releases/249504"; // Replace with your test release ID
const API_TOKEN = "hTPibzYuxFrMSUaYIXOFpVgbZYgXPfDHMQgmTCvP"; // Replace with your actual token

async function fetchDiscogsImage() {
  try {
    const response = await fetch(API_URL, {
      headers: { Authorization: `Discogs token ${API_TOKEN}` },
    });

    if (!response.ok) {
      throw new Error(`Error fetching: ${response.status}`);
    }

    const data = await response.json();
    const imageUrl = data.images ? data.images[0].uri : null;

    if (imageUrl) {
      console.log("🎵 Album Title:", data.title);
      console.log("📸 Image URL:", imageUrl);
    } else {
      console.log("❌ No image found.");
    }
  } catch (error) {
    console.error("❌ Fetch error:", error.message);
  }
}

fetchDiscogsImage();

// import { processMissingImages } from "./processImages";
// import { createClient } from "@supabase/supabase-js";
// import dotenv from "dotenv";

// dotenv.config();

// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// async function updateSupabaseRecords() {
//   const updates = await processMissingImages();

//   if (updates.length === 0) {
//     console.log("✅ All images already exist. Nothing to upload.");
//     return;
//   }

//   console.log(`🔄 Updating ${updates.length} records in Supabase...`);

//   const { error } = await supabase.from("records").upsert(updates, {
//     onConflict: "id",
//   });

//   if (error) {
//     console.error("❌ Supabase update failed:", error.message);
//   } else {
//     console.log("✅ Successfully updated records in Supabase!");
//   }
// }

// // Run the script
// updateSupabaseRecords();

// hTPibzYuxFrMSUaYIXOFpVgbZYgXPfDHMQgmTCvP;

// curl -H "Authorization: hTPibzYuxFrMSUaYIXOFpVgbZYgXPfDHMQgmTCvP" \
// "https://api.discogs.com/releases/249504"
