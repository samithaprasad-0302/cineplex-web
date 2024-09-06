<?php
session_start();

// Check if the user is logged in
if (isset($_SESSION['username'])) {
    // If logged in, display user profile
    echo '<div class="user-profile">';
    echo '<p>Welcome, ' . $_SESSION['username'] . '!</p>';
    echo '<a href="logout.php">Logout</a>';
    echo '</div>';
}
?>
<?php

