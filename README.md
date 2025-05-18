# Real-Time Weather App

A simple, user-friendly weather application that fetches and displays real-time weather information for cities worldwide.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [File Structure](#file-structure)
- [Customization](#customization)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Project Overview

This app allows users to search for cities via an autocomplete search bar powered by a local JSON file containing city data (`city.list.json`). Once a city is selected, it fetches live weather data from the OpenWeatherMap API and displays detailed weather information, including temperature, humidity, wind speed, and weather conditions.

The app uses **Bootstrap** for a responsive UI, **jQuery** for DOM manipulation and event handling, and **vanilla JavaScript (fetch API)** for retrieving weather data.

---

## Features

- Autocomplete search with city suggestions as you type
- Real-time weather data fetching via OpenWeatherMap API
- Display of temperature (in °C), humidity, wind speed, and weather conditions
- Weather icon matching current conditions
- Smooth animations for search suggestions and weather info card
- Error handling for invalid city names or network issues
- Skeleton loader for improved UX during data fetching
- Responsive and visually appealing design

---

## Technologies Used

- **HTML5** – Markup and structure
- **CSS3** + **Bootstrap 5** – Styling and layout
- **JavaScript (ES6+)** – API calls and logic
- **jQuery** – DOM manipulation, event handling, and UI updates
- **OpenWeatherMap API** – Weather data source

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection (to load Bootstrap, jQuery CDN & OpenWeatherMap API)
- An API key from [OpenWeatherMap](https://openweathermap.org/api) (free tier available)

### Installation

1. Clone or download this repository
2. Place the `city.list.json` file (downloaded from OpenWeatherMap) in the project root or a folder accessible to your HTML file
3. Open `index.html` in a browser

---

## Usage

1. Start typing a city name in the search bar.
2. Select a city from the autocomplete dropdown list.
3. The weather card will animate in and display the current weather data for the selected city.
4. If an error occurs (e.g., city not found), an error message will be displayed.

---

## How It Works

- **City Search Autocomplete:**  
  The app loads the `city.list.json` file containing thousands of cities worldwide. As the user types, the app filters and displays matching city names dynamically.

- **Weather Data Fetching:**  
  When a city is selected, its unique city ID is used to fetch weather data from OpenWeatherMap’s API. The data is parsed and displayed on the card.

- **UI Updates:**  
  jQuery handles all dynamic UI updates including showing/hiding the weather card, updating text and images, handling input events, and managing animations.

---

## File Structure

/project-root
|
|
|
|── index.html # Main HTML file
|
|── styles.css # Custom CSS styles
|
|── script.js # JavaScript and jQuery logic
|
|── city.list.json # City data for search autocomplete
|
|── README.md # This documentation file

---

## Customization

- **API Key:**  
  Replace `"YOUR_API_KEY"` in `script.js` with your own OpenWeatherMap API key.

- **Styling:**  
  Modify `styles.css` to change colors, fonts, animations, and layout.

- **City Data:**  
  Update `city.list.json` periodically from OpenWeatherMap to keep city list fresh.

---

## Future Improvements

- Add support for multiple languages
- Include a toggle for temperature units (Celsius/Fahrenheit)
- Add weather forecast for next 5 days
- Cache city data for faster loading
- Improve performance for very large city lists (e.g., with indexing or server-side search)

---

## License

This project is open-source and available under the MIT License.

---

Feel free to contribute or open issues if you find any bugs or have suggestions!

---

**Created by DevAT**  
https://www.linkedin.com/in/advait-tumbre-7b878716b/
