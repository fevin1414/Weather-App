import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

const Stats = ({ location }) => {
  const displayLocation = location ? location : "Winnipeg";
  return (
    <div className="flex justify-center z-0">
      <div className="stats shadow flex flex-col items-center lg:flex-row lg:justify-center">
        <div className="stat mb-4 lg:mb-0 lg:mr-4">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-8 h-8"
              style={{ color: "black" }}
            />
          </div>
          <div className="stat-title">Location</div>
          <div className="stat-value">{displayLocation}</div>
        </div>

        <div className="stat mb-4 lg:mb-0 lg:mx-4">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faClock}
              className="w-8 h-8"
              style={{ color: "black" }}
            />
          </div>
          <div className="stat-title">Time Zone</div>
          <div className="stat-value">Time</div>
        </div>

        <div className="stat mb-4 lg:mb-0 lg:ml-4">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faCalendarDay}
              className="w-8 h-8"
              style={{ color: "black" }}
            />
          </div>
          <div className="stat-title">Day</div>
          <div className="stat-value">Saturday</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
