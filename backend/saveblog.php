<?php
// URL to fetch data from
$sourceUrl = "https://soulkadhi.anubhootee.com/phpserver/recipe.php";

// File path to save the JSON
$destinationFile = __DIR__ . "/../frontend/src/utils/blog.json";

// Fetch data from the source URL
$data = file_get_contents($sourceUrl);

if ($data === false) {
    echo "Error: Unable to fetch data from the source URL.";
    exit;
}

// Validate JSON
$jsonData = json_decode($data, true);
if ($jsonData === null) {
    echo "Error: Fetched data is not valid JSON.";
    exit;
}

// Save data to blog.json
$result = file_put_contents($destinationFile, json_encode($jsonData, JSON_PRETTY_PRINT));

if ($result === false) {
    echo "Error: Unable to save data to blog.json.";
} else {
    echo "Success: Data saved to blog.json at " . realpath($destinationFile);
}
?>
