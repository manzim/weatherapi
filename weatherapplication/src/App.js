import React, { useState } from 'react';
import moment from 'moment';

import './index.css'

const api = {
  key: "03afe73b8207e542f76f20091e01d131",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  return (
    <div className="app">
      <section>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        <div className="">
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.weather.main}
             </div>
            <div className="date">
              {moment().format("dddd, MMMM Do YYYY, h:mm a")}
            </div>
            <div className="weather-box">
              <div className="temp"> 15* C </div>
              <div className="">  </div>
              <div className="weather"> Sunny </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
