import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                <p className="city">Belgrade</p>
                <p className="weather-description">Sunny with a lot of letters here</p>
                </div>
            <img alt="weather" className="weather-icon" src="icon/sunny.png" />
            </div>
            <div className="bottom">
            <p className="temperature">34°C</p>
            <div className="details">
                <div className="parameter-row">
                    <span className="parameter-label">Details</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Feels like </span>
                    <span className="parameter-value">40°C</span>
                </div>
            </div>
            </div>
        </div>
        
    );
}
export default CurrentWeather;