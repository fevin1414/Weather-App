import { useState, useEffect } from "react";
import "./App.css";
import Search from "./Components/Search";
import Stats from "./Components/Stats";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureThreeQuarters,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "./context/theme";
import useWeather from "./hooks/useWeather";
import Hero from "./Components/Hero";

function App() {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode")
      ? localStorage.getItem("themeMode")
      : "light"
  );

  const [location, setLocation] = useState("Winnipeg");
  const [temp, setTemperature] = useState(null);
  const [minTemp, setMinTemp] = useState();
  const [lastUpdated, setLastUpdated] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [deg, setDeg] = useState(null);
  const [gust, setGust] = useState(null);
  const [image, setImage] = useState(null);
  const [condition, setCondition] = useState(null);
  const [country, setCountry] = useState(null);
  const [region, setRegion] = useState(null);
  const [localTime, setLocalTime] = useState(null);
  const [timezone, setTimeZone] = useState(null);
  const { data } = useWeather({
    location,
  });
  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
    const localTheme = localStorage.getItem("themeMode");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [themeMode]);

  useEffect(() => {
    if (data) {
      setImage(`https:${data?.current?.condition?.icon}`);
      setCondition(data?.current?.condition?.text);
      setTemperature(data?.current?.temp_c);
      setMinTemp(data?.current?.feelslike_c);
      setCountry(data?.location?.country);
      setLocalTime(data?.location?.localtime);
      setLastUpdated(data?.current?.last_updated);
      setRegion(data?.location?.region);
      setTimeZone(data?.location?.tz_id);
      setPressure(data?.current?.pressure_mb);
      setHumidity(data?.current?.humidity);
      setSpeed(data?.current?.wind_kph);
      setDeg(data?.current?.wind_degree);
      setGust(data?.current?.gust_kph);
    }
  }, [data]);
  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div>
        <div className="mt-20 z-0">
          <Stats location={location} />
        </div>
        <div className="mt-10 z-0">
          <Search
            search={(e) => {
              e.preventDefault();
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className="mt-10  items-center flex flex-col justify-center lg:flex-row lg:items-center lg:gap-x-5 lg:justify-center gap-y-5">
          <Card
            image={
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} size="5x" />
            }
            Value1={`Temperature(c): ${temp}`}
            Value2={`Feels Like (c): ${minTemp}`}
            Value3={`Updated : ${lastUpdated}`}
            Value4={`pressure: ${pressure}`}
            Value5={`humidity:${humidity}`}
          />
          <Hero
            Image={image}
            Value1={condition}
            Value2={`Country: ${country}`}
            Value3={`Region: ${region}`}
            Value4={`Local Time: ${localTime}`}
            Value5={`Time Zone:${timezone}`}
          />
          <Card
            image={<FontAwesomeIcon icon={faWind} size="5x" />}
            Value1={`Speed: ${speed}`}
            Value2={`Degree: ${deg}`}
            Value3={`Gust: ${gust}`}
          />
        </div>
        <div className="z-9999">
          <Navbar />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
