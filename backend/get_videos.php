<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// Enable error reporting in PHP
error_reporting(E_ALL);
ini_set("log_errors", 1);
ini_set("error_log", __DIR__ . "/error_log.txt"); // Error log file

// Function to write custom logs
function writeLog($message) {
    error_log("[" . date("Y-m-d H:i:s") . "] " . $message . "\n", 3, __DIR__ . "/error_log.txt");
}

// Database connection
$conn = new mysqli(
    "auth-db1826.hostgtr.io",
    "u219254479_anubhooteeuser",
    "MauliNiwas@@2025",
    "u219254479_Soulkadhi_DB"
);

// Check DB connection
if ($conn->connect_error) {
    writeLog("DB Connection Failed: " . $conn->connect_error);
    echo json_encode(["error" => "DB Connection Failed"]);
    exit();
}

// Fetch all videos (latest first)
$sql = "SELECT * FROM videos ORDER BY publishedAt DESC";
$result = $conn->query($sql);

// Check SQL error
if (!$result) {
    writeLog("SQL Error: " . $conn->error);
    echo json_encode(["error" => "SQL Query Failed"]);
    exit();
}

$videos = [];

while ($row = $result->fetch_assoc()) {
    $videos[] = $row;
}

// Send JSON to frontend
echo json_encode($videos);
?>
