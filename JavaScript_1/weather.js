async function getWeather(city) {
    const apiKey = '61f47d51e3e7302f2ad425851c0dedc3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { main: { temp, humidity }, name } = data;
      console.log(`City: ${name}, Temperature: ${temp}K, Humidity: ${humidity}%`);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  
  getWeather('London');