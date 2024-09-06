<?php
$host = "localhost"; // usually "localhost"
$username = "root";
$password = "";
$database = "cineplex_db"; // Your database name

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
