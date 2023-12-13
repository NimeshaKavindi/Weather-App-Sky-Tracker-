import React from 'react'
import search_icon from "../assests/search.png";
import clear_icon from '../assests/clear.png';
import drizzle_icon from '../assests/drizzle.png';
import humidity_icon from '../assests/humidity.png';
import rain_icon from '../assests/rain.png';
import snow_icon from '../assests/snow.png';
import cloud_icon from '../assests/cloud.png';
import wind_icon from '../assests/wind.png';
import './weatherApp.css'


const WeatherApp = () => {
    return (
      <div className='container'>
        <div className='top-bar'>
          <div className='input-container'>
            <input type='text' className='cityInput' placeholder='Search' />
            <div className='search-icon'>
              <img src={search_icon} alt='' />
            </div>
          </div>
          <div className='weather-details'>
            <div className='weather-image'>
              <img src={cloud_icon} alt='' />
            </div>
            <div className='weather-temp'>24°C</div>
            <div className='weather-location'>Kandy</div>
          </div>
          <div className='data-container'>
            <div className='element'>
              <img src={humidity_icon} alt='' className='icon' />
              <div className='data'>
                <div className='text'>Humidity</div>
                <div className='humidity'>64%</div>
              </div>
            </div>
            <div className='element'>
              <img src={wind_icon} alt='' className='icon' />
              <div className='data'>
                <div className='text'>Wind speed</div>
                <div className='wind-speed'>18 km/h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  

export default WeatherApp;
