// App.js
import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import './WeatherForm.css';
import axios from 'axios';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async (city, latitude, longitude) => {
    try {
      let url;
      if (city) {
        url = `/weather?city=${city}`;
      } else if (latitude && longitude) {
        url = `/weather?lat=${latitude}&lon=${longitude}`;
      }
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <WeatherForm getWeather={getWeather} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;
