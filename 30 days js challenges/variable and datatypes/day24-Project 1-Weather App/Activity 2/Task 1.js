//  Activity 2 : Fetching Weather Data

// 1. Use the fetch api to get current weather data from a public weather API (e.g. Openweathermap)log the response data to the console.
// document.getElementById('getWeatherBtn').addEventListener('click', () => {
//     const city = document.getElementById('cityInput').value;
//     const apiKey = '3d3bf0df5526038b2be7112dcefb486c'; // Replace with your OpenWeatherMap API key
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



    // fetch(url)
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok ' + response.statusText);
    //         }
    //         return response.json();
    //     })
//         .then(data => {
//             console.log(data); // Log the response data to the console
            
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// });

// 2. Parse the weather data and display the current temperature, weather condition, and city name on the web page.
// .then(data => {
//     console.log(data); // Log the response data to the console

//     // Parse the data
//     const temperature = data.main.temp;
//     const weatherCondition = data.weather[0].description;
//     const cityName = data.name;

//     // Display the data on the web page
//     document.querySelector('.weather-info').innerHTML = `
//         <h2>${cityName}</h2>
//         <p>Temperature: ${temperature}°C</p>
//         <p>Condition: ${weatherCondition}</p>
//     `;
// })
// .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//     document.querySelector('.weather-info').innerHTML = `
//         <p>Could not retrieve weather data. Please try again.</p>
//     `;
// });
// });

// Activity 3 : Adding Search Functionality 
// 3. Add an input field and a search button to the HTML structure. style the input and button using css.
// 4. write a function to fetch and display weather data for a city entered in the search input field. log any errors to the console.
// function fetchAndDisplayWeather(city) {
//     const apiKey = '3d3bf0df5526038b2be7112dcefb486c'; // Replace with your OpenWeatherMap API key
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Parse the data
//             const temperature = data.main.temp;
//             const weatherCondition = data.weather[0].description;
//             const cityName = data.name;

//             // Display the data on the web page
//             document.querySelector('.weather-info').innerHTML = `
//                 <h2>${cityName}</h2>
//                 <p>Temperature: ${temperature}°C</p>
//                 <p>Condition: ${weatherCondition}</p>
//             `;
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//             document.querySelector('.weather-info').innerHTML = `
//                 <p>Could not retrieve weather data. Please try again.</p>
//             `;
//         });
// }

// // Event listener for the search button
// document.getElementById('getWeatherBtn').addEventListener('click', () => {
//     const city = document.getElementById('cityInput').value.trim();
//     if (city) {
//         fetchAndDisplayWeather(city);
//     } else {
//         alert('Please enter a city name.');
//     }
// });


// Activity 4: Displaying a 5-Day Forecast
// 5. Use the fetch api to get a 5-day weather forecast from the public weather API. LOG THE RESPONSE DATA to the console.

// Function to fetch and log 5-day weather forecast data
function fetchFiveDayForecast(city) {
    const apiKey = '3d3bf0df5526038b2be7112dcefb486c'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data); // Log the 5-day forecast data to the console
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

// // Event listener for the search button
// document.getElementById('getWeatherBtn').addEventListener('click', () => {
//     const city = document.getElementById('cityInput').value.trim();
//     if (city) {
//         fetchFiveDayForecast(city); // Call the function to fetch the 5-day forecast
//     } else {
//         alert('Please enter a city name.');
//     }
// });
// 6. Parse the forecast data and display the temperature and weather condition for each day in the forecast on th e web page.

// fetch(url)
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();
// })
// .then(data => {
//     console.log(data); // Log the 5-day forecast data to the console

//     // Process and display the 5-day forecast
//     const forecastContainer = document.querySelector('.weather-info');
//     forecastContainer.innerHTML = ''; // Clear previous data

//     const forecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")); // Get data for each day at noon

//     forecasts.forEach(forecast => {
//         const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', {
//             weekday: 'long',
//             month: 'short',
//             day: 'numeric'
//         });
//         const temperature = forecast.main.temp;
//         const weatherCondition = forecast.weather[0].description;

//         // Create a div for each day's forecast and append to the container
//         const forecastDiv = document.createElement('div');
//         forecastDiv.classList.add('forecast-item');
//         forecastDiv.innerHTML = `
//             <h3>${date}</h3>
//             <p>Temperature: ${temperature}°C</p>
//             <p>Condition: ${weatherCondition}</p>
//         `;

//         forecastContainer.appendChild(forecastDiv);
//     });
// })
// .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//     document.querySelector('.weather-info').innerHTML = `
//         <p>Could not retrieve weather data. Please try again.</p>
//     `;
// });
// }

// // Event listener for the search button
// document.getElementById('getWeatherBtn').addEventListener('click', () => {
// const city = document.getElementById('cityInput').value.trim();
// if (city) {
// fetchFiveDayForecast(city); // Call the function to fetch the 5-day forecast
// } else {
// alert('Please enter a city name.');
// }
// });

// Activity 5: Enhancing the UI 
// 7. aDD ICONS OR IMAGES  to represent different weather conditions(e.g.sunny,rainy,cloudy)based on the weather data.
// 8. Add css animations or transitions to make the weather app more interactive and visually apealing.

fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the 5-day forecast data to the console

            // Process and display the 5-day forecast
            const forecastContainer = document.querySelector('.weather-info');
            forecastContainer.innerHTML = ''; // Clear previous data

            const forecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")); // Get data for each day at noon

            forecasts.forEach(forecast => {
                const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric'
                });
                const temperature = forecast.main.temp;
                const weatherCondition = forecast.weather[0].description;
                const iconCode = forecast.weather[0].icon; // Get the icon code
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // URL to the icon

                // Create a div for each day's forecast and append to the container
                const forecastDiv = document.createElement('div');
                forecastDiv.classList.add('forecast-item');
                forecastDiv.innerHTML = `
                    <h3>${date}</h3>
                    <img src="${iconUrl}" alt="${weatherCondition}">
                    <p>Temperature: ${temperature}°C</p>
                    <p>Condition: ${weatherCondition}</p>
                `;

                forecastContainer.appendChild(forecastDiv);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.querySelector('.weather-info').innerHTML = `
                <p>Could not retrieve weather data. Please try again.</p>
            `;
        });
}

// Event listener for the search button
document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        fetchFiveDayForecast(city); // Call the function to fetch the 5-day forecast
    } else {
        alert('Please enter a city name.');
    }
});
// 8.

// forecasts.forEach(forecast => {
//     const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', {
//         weekday: 'long',
//         month: 'short',
//         day: 'numeric'
//     });
//     const temperature = forecast.main.temp;
//     const weatherCondition = forecast.weather[0].description;
//     const iconCode = forecast.weather[0].icon;
//     const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

//     const forecastDiv = document.createElement('div');
//     forecastDiv.classList.add('forecast-item');
//     forecastDiv.innerHTML = `
//         <h3>${date}</h3>
//         <img src="${iconUrl}" alt="${weatherCondition}">
//         <p>Temperature: ${temperature}°C</p>
//         <p>Condition: ${weatherCondition}</p>
//     `;

//     forecastContainer.appendChild(forecastDiv);

//     // Delay adding the show class for each item
//     setTimeout(() => {
//         forecastDiv.classList.add('show');
//     }, 100);
// });
// window.addEventListener('load', () => {
//     document.body.classList.add('loaded');
// });
//         });
//     };
