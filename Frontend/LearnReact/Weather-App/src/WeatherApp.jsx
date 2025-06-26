import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherinfo] = useState({
    city: "Delhi",
    feelsLike: 34.76,
    humidity: 62,
    temp: 30.73,
    tempMax: 30.73,
    tempMin: 30.73,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo)=>{
    setWeatherinfo(newInfo)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Harshit</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info = {weatherInfo} />
    </div>
  );
}
