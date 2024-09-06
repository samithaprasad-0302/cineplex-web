let isLoggedIn = false;
let selectedSeats = [];

function showLogin() {
    if (!isLoggedIn) {
        const loginModal = document.getElementById('loginModal');
        loginModal.style.display = 'block';
    } else {
        // Proceed to the tickets booking page if already logged in
        window.location.href = 'ticketsbooking.html';
    }
}

function closeModal() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'none';
}

function login() {
    // Implement your login validation logic here
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simplified validation (replace with server-side validation)
    if (username === 'user' && password === 'password') {
        isLoggedIn = true;
        closeModal();
        window.location.href = 'ticketsbooking.html'; // Redirect to the tickets booking page
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function clearForm() {
    document.getElementById('bookingForm').reset();
}

function selectSeat(seat) {
    seat.classList.toggle("selected");
    const seatNumber = seat.innerText;

    if (selectedSeats.includes(seatNumber)) {
        // Remove the seat from the selected seats array if already selected
        selectedSeats = selectedSeats.filter(selectedSeat => selectedSeat !== seatNumber);
    } else {
        // Add the seat to the selected seats array
        selectedSeats.push(seatNumber);
    }

    // Update the total amount based on the number of selected seats
    const ticketPrice = 800; // Price of one ticket
    const totalAmount = selectedSeats.length * ticketPrice;

    // Display the updated total amount on the page
    document.getElementById('totalAmount').innerText = totalAmount;

    console.log("Selected Seats: ", selectedSeats);
}

// Modify your existing bookTickets function to use the total amount
function bookTickets() {
    // Check if seats are selected
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
        return;
    }

    // Calculate the total amount
    const ticketPrice = 800; // Price of one ticket
    const totalAmount = selectedSeats.length * ticketPrice;

    // Display a confirmation popup
    const confirmation = window.confirm("Are you sure you want to book these tickets? Total Amount: " + totalAmount + " LKR");

    if (confirmation) {
        // If the user confirms, redirect to the payment page and pass the total amount as a query parameter
        window.location.href = 'payment.html?totalAmount=' + encodeURIComponent(totalAmount);
    } else {
        // If the user cancels, you can provide feedback or take other actions
        alert("Booking canceled.");
    }
}

let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
}

// Initialize the slideshow
showSlides();
