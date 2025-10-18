function ForecastCard({ data }) {
  const date = new Date(data.dt_txt).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        width: '120px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h4>{date}</h4>
      <img src={iconUrl} alt={data.weather[0].description} />
      <p>{data.weather[0].main}</p>
      <p>{Math.round(data.main.temp)}°C</p>
    </div>
  );
}

export default ForecastCard;
