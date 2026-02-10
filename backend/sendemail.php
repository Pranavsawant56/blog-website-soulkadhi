<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit(0);
}

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';

if (!$name || !$email || !$message) {
  http_response_code(400);
  echo json_encode(["error" => "All fields are required"]);
  exit;
}

$to = "anubhootee.help@gmail.com";   // 👈 YOUR EMAIL
$subject = "New Contact Form Message";

$body = "
Name: $name
Email: $email

Message:
$message
";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
  echo json_encode(["success" => true]);
} else {
  http_response_code(500);
  echo json_encode(["error" => "Email failed to send"]);
}
?>
