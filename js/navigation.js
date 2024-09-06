// navigation.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    var currentPage = window.location.pathname.split('/').pop();

    // Find the corresponding navigation link and add the 'active' class
    var navigationLinks = document.querySelectorAll('nav a');
    navigationLinks.forEach(function (link) {
        var linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
