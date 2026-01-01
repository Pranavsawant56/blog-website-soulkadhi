

export async function fetchVideos() {
  try {
    const res = await fetch("https://soulkadhi.anubhootee.com/phpserver/get_videos.php");
    if (!res.ok) {
      throw new Error("Failed to fetch videos");
    }

    const data = await res.json();
  
    return data; // Returns array of all videos
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
