// WeatherDisplay.js
import React from 'react';
import './WeatherForm.css';

const WeatherDisplay = ({ weatherData }) => {
  return (
    <center>
        <div>
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} K</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      {/* Additional weather information can be displayed here */}
    </div>
    </center>
   
  );
};

export default WeatherDisplay;
