export const fetchCollection = async (apiKey) => {
  const apiUrl =
    "https://api.discogs.com/users/manhartjohn/collection/folders/0/releases?per_page=250";

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Discogs token=${apiKey}`,
      },
    });
    const data = await response.json();
    return data.releases;
  } catch (error) {
    console.error("Error fetching collection:", error);
    return [];
  }
};
