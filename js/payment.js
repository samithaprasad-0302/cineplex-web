// payment.js

// Function to retrieve query parameters from the URL
function getQueryParam(parameter) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parameter);
}

// Function to initialize the payment page
function initializePaymentPage() {
    // Retrieve the total amount from the URL
    const totalAmount = getQueryParam('totalAmount');

    // Update the page with the total amount
    const totalAmountElement = document.getElementById('totalAmount');

    if (totalAmountElement) {
        totalAmountElement.innerText = totalAmount;
    } else {
        console.error("Total amount element not found on the page.");
    }
}

// Call the initializePaymentPage function when the page loads
window.onload = initializePaymentPage;
