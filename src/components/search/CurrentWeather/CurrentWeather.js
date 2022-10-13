import "../CurrentWeather/CurrentWeather.css"

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
        <div className="top">
        <div >
            <p className="city">{data.city}</p>
            <p className="weatherDescription">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weatherIcon" src={`/icons/${data.weather[0].icon}.png`}/>
        </div>
        <div className="bottom">
            <p className="temperature">{Math.round(data.main.temp)}<span>&deg;</span>C</p>
            <div className="details">
                <div className="rowParameter">
                    <span className="detailParameter">Details</span>
                </div>
                <div className="rowParameter">
                    <span className="labelParameter">Feels Like </span>
                    <span className="valueParameter">{Math.round(data.main.feels_like)}<span>&deg;</span>C</span>
                </div>
                <div className="rowParameter">
                    <span className="labelParameter">Wind </span>
                    <span className="valueParameter">{(data.wind.speed)} m/s</span>
                </div>
                <div className="rowParameter">
                    <span className="labelParameter">Humidity </span>
                    <span className="valueParameter">{(data.main.humidity)}%</span>
                </div>
                <div className="rowParameter">
                    <span className="labelParameter">Pressure </span>
                    <span className="valueParameter">{Math.round(data.main.pressure)} Pa</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CurrentWeather;