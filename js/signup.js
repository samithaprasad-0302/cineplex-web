function signup() {
    // Fetch form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Perform client-side validation (optional)

    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure it as a POST request to the signup_process.php script
    xhr.open('POST', 'signup_process.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Define the callback function to handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Handle the response
                const response = JSON.parse(xhr.responseText);

                if (response.success) {
                    // Signup successful
                    alert(response.message);
                    window.location.href = 'login.html'; // Redirect to login page
                } else {
                    // Signup failed
                    alert('Error: ' + response.message);
                }
            } else {
                // Handle errors
                alert('Error: ' + xhr.status);
            }
        }
    };

    // Send data to the server
    xhr.send(`fullName=${fullName}&email=${email}&username=${username}&password=${password}&confirmPassword=${confirmPassword}`);
}

function clearForm() {
    // Clear the form fields
    document.getElementById('signupForm').reset();
}
