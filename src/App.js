import { useState, useEffect } from "react";
import "./App.css";
import Search from "./Components/Search";
import Stats from "./Components/Stats";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureThreeQuarters,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [location, setLocation] = useState("Winnipeg");
  const [temp, setTemperature] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [deg, setDeg] = useState(null);
  const [gust, setGust] = useState(null);
  useEffect(() => {}, [location]);

  return (
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
      <div className="mt-10 flex items-center justify-center z-0">
        <Hero />
      </div>
      <div className="mt-10 flex flex-wrap justify-center z-0">
        <div className="mt-10 mr-4 flex items-center justify-center z-0">
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
        </div>

        <div className="mt-10 mr-4 flex items-center justify-center z-0">
          <Card
            image={<FontAwesomeIcon icon={faWind} size="5x" />}
            Value1={`Speed: ${speed}`}
            Value2={`Degree: ${minTemp}`}
            Value3={`Gust: ${maxTemp}`}
          />
        </div>
      </div>
      <div className="z-9999">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
