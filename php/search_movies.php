<?php
// search_movies.php

$searchTerm = $_GET['searchTerm'];

// Connect to your MySQL database
$conn = new mysqli("localhost", "root", "", "cineplex_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch movies based on the search term
$stmt = $conn->prepare("SELECT * FROM movies WHERE title LIKE ?");
$searchTerm = '%' . $searchTerm . '%';
$stmt->bind_param("s", $searchTerm);
$stmt->execute();
$result = $stmt->get_result();

// Fetch results into an associative array
$movies = $result->fetch_all(MYSQLI_ASSOC);

// Close the database connection
$stmt->close();
$conn->close();

// Return the JSON response
header('Content-Type: application/json');
echo json_encode($movies);
?>