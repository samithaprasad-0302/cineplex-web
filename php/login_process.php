<?php
session_start(); // Start the session

$username = $_POST['username'];
$password = $_POST['password'];

// Create connection
$conn = new mysqli("localhost", "root", "", "cineplex_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute SQL statement to retrieve user data
$stmt = $conn->prepare("SELECT username, password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($dbUsername, $dbPassword);
$stmt->fetch();
$stmt->close();

// Verify the password
if ($dbUsername && password_verify($password, $dbPassword)) {
    $_SESSION['username'] = $username;
    echo json_encode(['success' => true, 'message' => 'Login successful']);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
}

$conn->close();
?>
