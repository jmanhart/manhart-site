// import { fetchCollection } from "../../utils/discogsApi.js";

// export default async function handler(req, res) {
//   const apiKey = process.env.PUBLIC_DISCOGS_API_TOKEN;
//   try {
//     const collection = await fetchCollection(apiKey);
//     res.status(200).json(collection);
//   } catch (error) {
//     console.error("Error fetching collection:", error);
//     res.status(500).json({ error: "Failed to fetch collection" });
//   }
// }
