import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchLocation(latitude, longitude);
      });
    }
  }, []);

  const fetchLocation = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const data = await response.json();
      setLocation(data.locality);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setDay(now.toLocaleDateString("en", { weekday: "long" }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getTimeZone = async () => {
      try {
        const response = await fetch("https://worldtimeapi.org/api/ip");
        const data = await response.json();
        setTimeZone(data.timezone);
      } catch (error) {
        console.error("Error fetching time zone:", error);
      }
    };

    getTimeZone();
  }, []);

  return (
    <div className="flex justify-center z-0">
      <div className="stats shadow flex flex-col items-center lg:flex-row lg:justify-center">
        <div className="stat mb-4 lg:mb-0 lg:mr-4">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-8 h-8"
              style={{ color: "blue" }}
            />
          </div>
          <div className="stat-title">Location</div>
          <div className="stat-value">{location}</div>
        </div>

        <div className="stat mb-4 lg:mb-0 lg:mx-4">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faClock}
              className="w-8 h-8"
              style={{ color: "blue" }}
            />
          </div>
          <div className="stat-title">{timeZone}</div>
          <div className="stat-value">{currentTime}</div>
        </div>

        <div className="stat mb-4 lg:mb-0 lg:ml-4">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faCalendarDay}
              className="w-8 h-8"
              style={{ color: "blue" }}
            />
          </div>
          <div className="stat-title">Day</div>
          <div className="stat-value">{day}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
