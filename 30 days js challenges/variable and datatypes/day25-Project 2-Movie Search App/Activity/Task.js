// Activity 1: Setting Up the Project  //omdb api

// Task 1: Initialize a new project directory and set up the basic HTML structure for the movie search app.

// Task 2: Add a basic CSS file to style the movie search app, including a container for displaying movie search results.



// Activity 2: Fetching Movie Data

// Task 3: Use the fetch API to get movie data from a public movie API (e.g., OMDB API or The Movie Database API). Log the response data to the console.
// Task 4: Parse the movie data and display the movie title, poster, and release year on the web page.
// document.addEventListener('DOMContentLoaded', () => {
//     const searchBtn = document.getElementById('search-btn');
//     const searchInput = document.getElementById('search');
//     const resultsContainer = document.getElementById('results');
//     const apiKey = '1a43dc4f'; // Replace with your OMDB API key

//     searchBtn.addEventListener('click', async () => {
//         const query = searchInput.value;
//         if (query) {
//             try {
//                 // Fetch movie data from OMDB API
//                 const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`);
//                 const data = await response.json();
                
//                 // Log the response data to the console
//                 console.log(data);

//                 // Clear previous results
//                 resultsContainer.innerHTML = '';

//                 // Display the results
//                 if (data.Response === 'True') {
//                     data.Search.forEach(movie => {
//                         const movieElement = document.createElement('div');
//                         movieElement.className = 'movie';
//                         movieElement.innerHTML = `
//                             <img src="${movie.Poster}" alt="${movie.Title}">
//                             <div class="movie-details">
//                                 <h3>${movie.Title}</h3>
//                                 <p>Release Year: ${movie.Year}</p>
//                             </div>
//                         `;
//                         resultsContainer.appendChild(movieElement);
//                     });
//                 } else {
//                     resultsContainer.innerHTML = `<p>${data.Error}</p>`;
//                 }
//             } catch (error) {
//                 console.error('Error fetching movie data:', error);
//             }
//         }
//     });
// });
// Activity 3: Adding Search Functionality

// Task 5: Add an input field and a search button to the HTML structure. Style the input and button using CSS.
// Task 6: Write a function to fetch and display movie data based on a search query entered in the input field. Log any errors to the console.

// searchBtn.addEventListener('click', () => {
//     const query = searchInput.value.trim();
//     if (query) {
//         fetchMovieData(query);
//     }
// });

// async function fetchMovieData(query) {
//     try {
//         // Fetch movie data from OMDB API
//         const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
        
//         // Clear previous results
//         resultsContainer.innerHTML = '';

//         // Display the results
//         if (data.Response === 'True') {
//             data.Search.forEach(movie => {
//                 const movieElement = document.createElement('div');
//                 movieElement.className = 'movie';
//                 movieElement.innerHTML = `
//                     <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
//                     <div class="movie-details">
//                         <h3>${movie.Title}</h3>
//                         <p>Release Year: ${movie.Year}</p>
//                     </div>
//                 `;
//                 resultsContainer.appendChild(movieElement);
//             });
//         } else {
//             resultsContainer.innerHTML = `<p>${data.Error}</p>`;
//         }
//     } catch (error) {
//         console.error('Error fetching movie data:', error);
//         resultsContainer.innerHTML = `<p>An error occurred. Please try again.</p>`;
//     }
// }
// });


// Activity 4: Displaying Detailed Movie Information

// • Task 7: Modify the search results to include a "More Info" button for each movie. When clicked, fetch and display additional details about the movie, such as the plot, director, and actors.

// Task 8: Create a modal or a new section on the page to display the detailed movie information.



// searchBtn.addEventListener('click', () => {
//     const query = searchInput.value.trim();
//     if (query) {
//         fetchMovieData(query);
//     }
// });

// async function fetchMovieData(query) {
//     try {
//         // Fetch movie data from OMDB API
//         const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
        
//         // Clear previous results
//         resultsContainer.innerHTML = '';

//         // Display the results
//         if (data.Response === 'True') {
//             data.Search.forEach(movie => {
//                 const movieElement = document.createElement('div');
//                 movieElement.className = 'movie';
//                 movieElement.innerHTML = `
//                     <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
//                     <div class="movie-details">
//                         <h3>${movie.Title}</h3>
//                         <p>Release Year: ${movie.Year}</p>
//                         <button class="more-info-btn" data-imdbid="${movie.imdbID}">More Info</button>
//                     </div>
//                 `;
//                 resultsContainer.appendChild(movieElement);
//             });

//             // Add event listeners to "More Info" buttons
//             const moreInfoButtons = document.querySelectorAll('.more-info-btn');
//             moreInfoButtons.forEach(button => {
//                 button.addEventListener('click', (event) => {
//                     const imdbID = event.target.getAttribute('data-imdbid');
//                     fetchMovieDetails(imdbID, event.target);
//                 });
//             });
//         } else {
//             resultsContainer.innerHTML = `<p>${data.Error}</p>`;
//         }
//     } catch (error) {
//         console.error('Error fetching movie data:', error);
//         resultsContainer.innerHTML = `<p>An error occurred. Please try again.</p>`;
//     }
// }

// async function fetchMovieDetails(imdbID, buttonElement) {
//     try {
//         // Fetch additional movie details from OMDB API
//         const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         // Display additional details
//         if (data.Response === 'True') {
//             const detailsElement = document.createElement('div');
//             detailsElement.className = 'movie-details-expanded';
//             detailsElement.innerHTML = `
//                 <h4>Plot</h4>
//                 <p>${data.Plot}</p>
//                 <h4>Director</h4>
//                 <p>${data.Director}</p>
//                 <h4>Actors</h4>
//                 <p>${data.Actors}</p>
//                 <button class="close-info-btn">Close</button>
//             `;

//             // Replace the button with the additional details
//             const parentElement = buttonElement.parentElement;
//             parentElement.appendChild(detailsElement);
//             buttonElement.style.display = 'none';

//             // Add event listener to "Close" button
//             detailsElement.querySelector('.close-info-btn').addEventListener('click', () => {
//                 detailsElement.remove();
//                 buttonElement.style.display = 'block';
//             });
//         } else {
//             console.error(data.Error);
//         }
//     } catch (error) {
//         console.error('Error fetching movie details:', error);
//     }
// }
// });

// Task 8: Create a modal or a new section on the page to display the detailed movie information.

// app.js

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search');
    const resultsContainer = document.getElementById('results');
    const modal = document.getElementById('movie-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');
    const apiKey = '1a43dc4f'; // Replace with your OMDB API key

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            fetchMovieData(query);
        }
    });

    async function fetchMovieData(query) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            resultsContainer.innerHTML = '';
            if (data.Response === 'True') {
                data.Search.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.className = 'movie';
                    movieElement.innerHTML = `
                        <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
                        <div class="movie-details">
                            <h3>${movie.Title}</h3>
                            <p>Release Year: ${movie.Year}</p>
                            <button class="more-info-btn" data-imdbid="${movie.imdbID}">More Info</button>
                        </div>
                    `;
                    resultsContainer.appendChild(movieElement);
                });
                const moreInfoButtons = document.querySelectorAll('.more-info-btn');
                moreInfoButtons.forEach(button => {
                    button.addEventListener('click', (event) => {
                        const imdbID = event.target.getAttribute('data-imdbid');
                        fetchMovieDetails(imdbID);
                    });
                });
            } else {
                resultsContainer.innerHTML = `<p>${data.Error}</p>`;
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
            resultsContainer.innerHTML = `<p>An error occurred. Please try again.</p>`;
        }
    }

    async function fetchMovieDetails(imdbID) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.Response === 'True') {
                modalBody.innerHTML = `
                    <img src="${data.Poster}" alt="${data.Title}" class="movie-poster">
                    <h3>${data.Title}</h3>
                    <p><strong>Release Year:</strong> ${data.Year}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                    <p><strong>Director:</strong> ${data.Director}</p>
                    <p><strong>Actors:</strong> ${data.Actors}</p>
                `;
                modal.style.display = 'block';
            } else {
                console.error(data.Error);
            }
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});



//new section 


// searchBtn.addEventListener('click', () => {
//     const query = searchInput.value.trim();
//     if (query) {
//         fetchMovieData(query);
//     }
// });

// async function fetchMovieData(query) {
//     try {
//         const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         resultsContainer.innerHTML = '';
//         if (data.Response === 'True') {
//             data.Search.forEach(movie => {
//                 const movieElement = document.createElement('div');
//                 movieElement.className = 'movie';
//                 movieElement.innerHTML = `
//                     <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
//                     <div class="movie-details">
//                         <h3>${movie.Title}</h3>
//                         <p>Release Year: ${movie.Year}</p>
//                         <button class="more-info-btn" data-imdbid="${movie.imdbID}">More Info</button>
//                     </div>
//                 `;
//                 resultsContainer.appendChild(movieElement);
//             });
//             const moreInfoButtons = document.querySelectorAll('.more-info-btn');
//             moreInfoButtons.forEach(button => {
//                 button.addEventListener('click', (event) => {
//                     const imdbID = event.target.getAttribute('data-imdbid');
//                     fetchMovieDetails(imdbID);
//                 });
//             });
//         } else {
//             resultsContainer.innerHTML = `<p>${data.Error}</p>`;
//         }
//     } catch (error) {
//         console.error('Error fetching movie data:', error);
//         resultsContainer.innerHTML = `<p>An error occurred. Please try again.</p>`;
//     }
// }

// async function fetchMovieDetails(imdbID) {
//     try {
//         const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         if (data.Response === 'True') {
//             detailsContent.innerHTML = `
//                 <img src="${data.Poster}" alt="${data.Title}" class="movie-poster">
//                 <h3>${data.Title}</h3>
//                 <p><strong>Release Year:</strong> ${data.Year}</p>
//                 <p><strong>Plot:</strong> ${data.Plot}</p>
//                 <p><strong>Director:</strong> ${data.Director}</p>
//                 <p><strong>Actors:</strong> ${data.Actors}</p>
//             `;
//             detailsSection.style.display = 'block';
//         } else {
//             console.error(data.Error);
//         }
//     } catch (error) {
//         console.error('Error fetching movie details:', error);
//     }
// }

// closeDetailsBtn.addEventListener('click', () => {
//     detailsSection.style.display = 'none';
// });
// });



// Activity 5: Enhancing the Ul

// Task 9: Add CSS styles to improve the layout and design of the search results and detailed movie information.

// Task 10: Add CSS animations or transitions to make the movie search app more interactive and visually appealing.