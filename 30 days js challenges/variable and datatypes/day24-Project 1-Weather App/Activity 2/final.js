function fetchFiveDayForecast(city) {
    const apiKey = '3d3bf0df5526038b2be7112dcefb486c'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
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
