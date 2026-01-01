<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Allow requests from your frontend

// Database credentials
$host = "localhost";
$user = "u219254479_anubhooteeuser";
$pass = "MauliNiwas@@2025";
$db   = "u219254479_Soulkadhi_DB";


// Create database connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

$name    = trim($data['name'] ?? '');
$surname = trim($data['surname'] ?? '');
$email   = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

// Validate data
if (!$name || !$surname || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["error" => "All fields are required"]);
    exit;
}

// Prepare and execute insert statement
$stmt = $conn->prepare("INSERT INTO contacts (name, surname, email, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $surname, $email, $message);

if ($stmt->execute()) {
    echo json_encode(["message" => "Data saved successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to save data"]);
}

// Close connections
$stmt->close();
$conn->close();
?>
