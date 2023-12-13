import React from 'react'
import search_icon from "../assests/search.png";
import clear_icon from '../assests/clear.png';
import drizzle_icon from '../assests/cloud.png';
import humidity_icon from '../assests/humidity.png';
import rain_icon from '../assests/rain.png';
import snow_icon from '../assests/snow.png';
import wind_icon from '../assests/wind.png';
import './weatherApp.css'


const WeatherApp = () => {
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type ="text" className="searchInput" placeholder="search"/> 
            <div className='search-icon'>
                <img src={search_icon} alt=""/>
            </div>
            <div className='weather-image'>
                
            </div>
        </div>

    </div>
  )
}

export default WeatherApp;
