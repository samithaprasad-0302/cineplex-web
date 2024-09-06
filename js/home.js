function searchMovies() {
    const searchTerm = document.getElementById('searchInput').value.trim();

    // AJAX request to PHP script for searching movies
    fetch(`search_movies.php?searchTerm=${encodeURIComponent(searchTerm)}`)
        .then(response => response.json())
        .then(data => {
            // Update the search results on the page
            const searchResultsContainer = document.getElementById('searchResults');
            searchResultsContainer.innerHTML = ''; // Clear existing results

            if (data.length > 0) {
                data.forEach(movie => {
                    const movieCard = document.createElement('div');
                    movieCard.classList.add('movie-card');
                    movieCard.innerHTML = `
                        <img src="${movie.image_url}" alt="${movie.title}">
                        <h3>${movie.title}</h3>
                        <p>Showtimes: ${movie.showtimes}</p>
                        <a href="ticketsbooking.html"><button>Book Tickets</button></a>
                    `;
                    searchResultsContainer.appendChild(movieCard);
                });
            } else {
                searchResultsContainer.innerHTML = '<p>No movies found.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch movies. Please try again later.');
        });
}
