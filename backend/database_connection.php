<?php

// ===============================
// CONFIG
// ===============================
$apiKey = "YT_API_KEY";          // ← Add your YouTube API key
$playlistId = "PLAYLIST_ID";  // ← Add your playlist ID

// ===============================
// DATABASE CONNECTION
// ===============================
$conn = new mysqli(
    "localhost",
    "u219254479_anubhooteeuser",
    "MauliNiwas@@2025",
    "u219254479_Soulkadhi_DB"
);

if ($conn->connect_error) {
    die("DB Connection Failed: " . $conn->connect_error);
}

// ===============================
// FETCH PLAYLIST VIDEOS
// ===============================
$playlistUrl = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=$playlistId&maxResults=50&key=$apiKey";
$playlistResponse = json_decode(file_get_contents($playlistUrl), true);

// Loop through each playlist item
foreach ($playlistResponse['items'] as $item) {

    // Video ID
    $videoId = $item['snippet']['resourceId']['videoId'];

    // ===============================
    // FETCH FULL VIDEO DETAILS
    // ===============================
    $videoUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=$videoId&key=$apiKey";
    $videoResponse = json_decode(file_get_contents($videoUrl), true);

    // ❌ Skip missing / private / deleted videos
    if (!isset($videoResponse['items'][0])) {
        continue;
    }

    $data = $videoResponse['items'][0];

    // ❌ Skip if title is "Private video" or "Deleted video"
    $rawTitle = strtolower($data['snippet']['title']);
    if ($rawTitle === "private video" || $rawTitle === "deleted video") {
        continue;
    }

    // ❌ Skip if thumbnail is missing (usually private)
    if (!isset($data['snippet']['thumbnails']['high']['url'])) {
        continue;
    }

    // ===============================
    // CLEAN VIDEO INFO
    // ===============================
    $title = $conn->real_escape_string($data['snippet']['title']);
    $description = $conn->real_escape_string($data['snippet']['description']);
    $thumbnail = $data['snippet']['thumbnails']['high']['url'];
    $publishedAt = date("Y-m-d H:i:s", strtotime($data['snippet']['publishedAt']));

    $views = $data['statistics']['viewCount'] ?? 0;
    $likes = $data['statistics']['likeCount'] ?? 0;
    $comments = $data['statistics']['commentCount'] ?? 0;

    // ===============================
    // INSERT OR UPDATE (NO DUPLICATES)
    // ===============================
    $sql = "
        INSERT INTO videos (videoId, title, thumbnail, description, views, likes, comments, publishedAt)
        VALUES ('$videoId', '$title', '$thumbnail', '$description', '$views', '$likes', '$comments', '$publishedAt')
        ON DUPLICATE KEY UPDATE
            title='$title',
            thumbnail='$thumbnail',
            description='$description',
            views='$views',
            likes='$likes',
            comments='$comments',
            publishedAt='$publishedAt'
    ";

    $conn->query($sql);
}

echo "Playlist videos synced successfully.";

?>
