import { useState } from 'react';
import SearchBar from './component/SearchBar';
import ForecastCard from './component/ForecastCard';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // ← Replace with your real API key

function App() {
  const [forecastList, setForecastList] = useState([]);
  const [error, setError] = useState('');
  const [city, setCity] = useState('');

  const fetchForecast = async (cityName) => {
    if (!cityName) return;

    try {
      setError('');
      setForecastList([]);
      setCity(cityName);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error('City not found');
      }

      const data = await res.json();

      // Filter: pick one forecast per day at 12:00:00
      const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));

      setForecastList(dailyForecasts);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>📅 5-Day Weather Forecast</h2>
      <SearchBar onSearch={fetchForecast} />
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {forecastList.length > 0 && (
        <div>
          <h3>Forecast for {city}</h3>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {forecastList.map((forecast) => (
              <ForecastCard key={forecast.dt} data={forecast} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}