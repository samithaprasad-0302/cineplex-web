
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // AJAX request to PHP script
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login_process.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Handle the response
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    alert(response.message);
                    window.location.href = "home.html"; // Redirect to the dashboard or another page
                } else {
                    alert(response.message);
                }
            } else {
                // Handle errors
                alert("Error: " + xhr.status);
            }
        }
    };

    // Send data to the server
    xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
}

function clearLoginForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

