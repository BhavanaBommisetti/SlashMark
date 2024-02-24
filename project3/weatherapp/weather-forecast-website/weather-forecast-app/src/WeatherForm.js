
// WeatherForm.js
import React from 'react';
import './WeatherForm.css'; // Import the CSS file

const WeatherForm = ({ getWeather }) => {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getWeather(latitude, longitude); // Call API with latitude and longitude
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const city = formData.get('city');
    getWeather(city);
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}> {/* Apply CSS class to form */}
      <input className="city-input" type="text" placeholder="Enter City Name" name="city" required /> {/* Apply CSS class to input */}
      <button className="submit-button" type="submit">Get Weather</button> {/* Apply CSS class to button */}
      <button className="location-button" type="button" onClick={getCurrentLocation}>Use Current Location</button> {/* Apply CSS class to button */}
    </form>
  );
};

export default WeatherForm;

