   async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '' ;
  // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const output = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>🌡️ Temperature: ${data.main.temp} °C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
                <p>🌥️ Condition: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherDisplay').innerHTML = output;
        } else {
            document.getElementById('weatherDisplay').innerHTML = `<p>City not found. Try again.</p>`;
        }
    } catch (error) {
        console.error(error);
        document.getElementById('weatherDisplay').innerHTML = `<p>Error fetching data.</p>`;
    }
}
