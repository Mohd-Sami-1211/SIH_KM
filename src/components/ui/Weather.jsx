import React, { useState, useEffect } from "react";

function WeatherSection() {
  const [weather, setWeather] = useState({});
  
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=YourAPIKey&units=metric")
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          temp: data.main.temp,
          description: data.weather[0].description,
          city: data.name,
          country: data.sys.country,
        });
      });
  }, []);

  return (
    <section className="w-full md:w-1/3 pl-4">
      <h2 className="text-3xl font-medium mb-4">Weather</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-medium mb-2">Current Weather</h3>
        <p className="text-gray-600 mb-4">
          {weather.city}, {weather.country}
        </p>
        <p className="text-4xl font-bold text-blue-600">{weather.temp}°C</p>
        <p className="text-gray-600 capitalize">{weather.description}</p>
        <hr className="my-4" />
        {/* Add forecast here */}
      </div>
    </section>
  );
}

export default WeatherSection;
