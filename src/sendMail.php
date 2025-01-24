<?php
// Set CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Handle OPTIONS preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON payload from the request body
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    // Validate payload
    if (!$params || !isset($params->email, $params->name, $params->message, $params->privacy)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid input data"]);
        exit;
    }

    // Extract data
    $email = htmlspecialchars($params->email);
    $name = htmlspecialchars($params->name);
    $message = htmlspecialchars($params->message);
    $privacy = htmlspecialchars($params->privacy);

    // Retrieve sender's IP address
    $ipAddress = $_SERVER['REMOTE_ADDR'];

    // Define recipient and email content
    $recipient = 'kontakt@david-kolosza.de';
    $subject = "Contact From <$email>";
    $messageContent = "From: " . $name . "<br>"
                    . "Message: " . $message . "<br><br>"
                    . "Sender's IP Address: " . $ipAddress;

    // Set email headers
    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = "From: noreply@mywebsite.com";

    // Send email
    if (mail($recipient, $subject, $messageContent, implode("\r\n", $headers))) {
        http_response_code(200);
        echo json_encode(["success" => "Mail sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Mail sending failed"]);
    }
    exit;
}

// Reject other methods
header("Allow: POST, OPTIONS", true, 405);
http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
exit;
