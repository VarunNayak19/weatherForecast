
import './App.css';
import Search from './components/search/Search';
import logo from "./assets/weatherForecastLogo.png";
import CurrentWeather  from './components/search/CurrentWeather/CurrentWeather';
import { WEATHER_API_URL,WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './components/search/forecast/Forecast';
// import Sound from "react-sound";
// import NeverGonna from "../src/assets/Never Gonna Give You Up Original.mp3";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
   const [lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const WeatherForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([CurrentWeatherFetch, WeatherForecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label,  ...weatherResponse});
      setForecast({city: searchData.label,  ...forecastResponse});
    }) 
    .catch((err) => console.log(err));

  }
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className='mainBox'>
      <div>
        <img src={logo} alt="logo" className='logo' />
      </div>
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} /> }
      {forecast && <Forecast data={forecast}/>}
    </div>
    </div>
  );
}

export default App;
