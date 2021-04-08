import React,{useState,useEffect} from 'react'

function Weather() {

    const [weather, setWeather] = useState({conditions: "Sunny"});

    function getWeather() {        
        // setWeather('Rainy');
        const lon = 113.17;
        const lat = 23.09;
        fetch(`http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`)
        .then(res=>res.json())
        .then(body=>{
            console.log(body)
        });
    }

    getWeather();

    return (
      <div className="Weather weather-wrapper">        
          Weather 
        <div>
            {weather.conditions}
        </div>  
      </div>
    );
  }
  
  export default Weather;