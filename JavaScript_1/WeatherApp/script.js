async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '61f47d51e3e7302f2ad425851c0dedc3'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { main: { temp, humidity }, name } = data;
      document.getElementById('weather-data').innerHTML = `
        <strong>City:</strong> ${name}<br>
        <strong>Temperature:</strong> ${temp}K<br>
        <strong>Humidity:</strong> ${humidity}%
      `;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }