import './WeatherForm.css';
const express = require('express');
const axios = require('axios'); // Import axios to make HTTP requests

const app = express();

// Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route to fetch weather data
app.get('/weather', async (req, res) => {
  try {
    const { city } = req.query; // Get the city from the query parameters
    const API_KEY = '9026dfa745b87f9dae2d306e89280afa'; // Your weather API key

    // Make a GET request to the weather API with the city name and API key
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    // Extract the weather data from the response
    const weatherData = response.data;

    // Send the weather data as a JSON response
    res.json(weatherData);
  } catch (error) {
    // Handle errors
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
