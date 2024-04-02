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
  const [maxTemp, setMaxTemp] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [deg, setDeg] = useState(null);
  const [gust, setGust] = useState(null);
  const [image, setImage] = useState(null);
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
      setTemperature(data?.current?.temp_c);
      setMinTemp(data?.current?.temp_c);
      setMaxTemp(null);
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
            Value1={`Temperature: ${temp}`}
            Value2={`Minimum: ${minTemp}`}
            Value3={`Maximum: ${maxTemp}`}
            Value4={`pressure: ${pressure}`}
            Value5={`humidity:${humidity}`}
          />
          <Hero Image={image} />
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
