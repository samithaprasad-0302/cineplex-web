<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Create connection
    $conn = new mysqli("localhost", "root", "", "cineplex_db");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and execute SQL statement to insert data into the database
    $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
    
    // Bind parameters
    $stmt->bind_param("sss", $name, $email, $message);
    
    $response = array();

    if ($stmt->execute()) {
        $response['success'] = true;
        $response['message'] = 'Message sent successfully!';
        
        // Redirect to home.html
        header('Location: home.html');
        exit(); // Ensure that no other code is executed after the redirect
    } else {
        $response['success'] = false;
        $response['message'] = 'Failed to send message. Please try again later.';
    }

    $stmt->close();
    $conn->close();

    // Send JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Handle non-POST requests
    echo "Invalid request method.";
}
?>
