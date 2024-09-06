document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Fetch API to send form data to the server
    fetch('contact_process.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(new FormData(event.target)),
    })
    .then(response => response.json())
    .then(data => {
        // Display the response message on the page
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.innerHTML = '<p>' + data.message + '</p>';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again later.');
    });
});
