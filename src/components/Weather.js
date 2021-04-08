import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);

  function success(res) {
    setLon(res.coords.longitude);
    setLat(res.coords.latitude);
    // getWeather();
  }
  function error(err) {
    alert(err);
  }

  function handleLocationClick() {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function getWeather() {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${
        process.env.REACT_APP_WEATHER_API_KEY
      }&q=${"Atlanta"}&days=1&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((body) => {
        setWeather(body.current);
        console.log(body);
      });
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  getLocation();

  if (!lon || !lat) {
    return (
      <div className='Weather'>
        <button onClick={handleLocationClick}>Click to share location</button>
        Must share location in order to enable weather
      </div>
    );
  } else {
    return (
      <div className='Weather weather-wrapper'>
        <button onClick={getWeather}>Get Weather</button>
        <div>longitude: {lon}</div>
        <div>latitude: {lat}</div>
        Weather
      </div>
    );
  }
}

export default Weather;
