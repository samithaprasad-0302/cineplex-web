<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Fetch form data
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $userName = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password

    // Create connection
    $conn = new mysqli("localhost", "root", "", "cineplex_db");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and execute SQL statement to insert data into the database
    $stmt = $conn->prepare("INSERT INTO users (fullName, email, username, password) VALUES (?, ?, ?, ?)");

    // Bind parameters
    $stmt->bind_param("ssss", $fullName, $email, $userName, $password);

    if ($stmt->execute()) {
        $response = array('success' => true, 'message' => 'Signup successful');
    } else {
        $response = array('success' => false, 'message' => 'Failed to signup');
        error_log("Failed to execute SQL: " . $stmt->error);
    }

    $stmt->close();
    $conn->close();

    // Send a JSON response
    echo json_encode($response);
} else {
    // If the request method is not POST, return an error response
    $response = array('success' => false, 'message' => 'Invalid request method');
    echo json_encode($response);
}
?>
