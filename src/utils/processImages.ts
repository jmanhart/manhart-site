import { getExistingImages, uploadImageToSupabase } from "./supabaseStorage";
import { fetchDiscogsRecords } from "./fetchDiscogs";

/**
 * ✅ Process records: Check storage, fetch missing images, upload, update DB.
 */
export async function processMissingImages() {
  const existingImages = await getExistingImages();
  const records = await fetchDiscogsRecords();

  let updates = [];

  for (const record of records) {
    const recordId = record.id.toString();
    if (existingImages.has(recordId)) {
      console.log(
        `✅ Image for ${record.basic_information.title} already exists. Skipping.`
      );
      continue;
    }

    // ✅ Extract image from the best available source.
    let imageUrl =
      record.basic_information.cover_image ||
      record.basic_information.thumb ||
      null;

    if (!imageUrl && record.basic_information.master_url) {
      console.log(
        `🔄 Fetching master release image for: ${record.basic_information.title}`
      );
      await new Promise((res) => setTimeout(res, 500));

      const masterResponse = await fetch(record.basic_information.master_url);
      if (masterResponse.ok) {
        const masterData = await masterResponse.json();
        imageUrl = masterData.images?.[0]?.uri || null;
      }
    }

    if (!imageUrl) {
      console.warn(`⚠️ No image found for ${record.basic_information.title}`);
      continue;
    }

    // ✅ Upload only if image is found.
    const uploadedImageUrl = await uploadImageToSupabase(imageUrl, record.id);

    if (uploadedImageUrl) {
      updates.push({
        id: record.id,
        image_url: uploadedImageUrl,
      });
    }
  }

  return updates;
}
