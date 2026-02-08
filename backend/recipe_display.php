<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");


$conn = new mysqli(
    "localhost",
    "u219254479_anubhooteeuser",
    "MauliNiwas@@2025",
    "u219254479_Soulkadhi_DB"
);

if ($conn->connect_error) {
    die(json_encode(["error" => "DB connection failed"]));
}

$sql = "SELECT slug, heading, thumbnail_image FROM recipes ORDER BY publish_date DESC";
$result = $conn->query($sql);

$recipes = [];

while ($row = $result->fetch_assoc()) {
    $recipes[] = $row;
}

echo json_encode($recipes);
$conn->close();
?>
