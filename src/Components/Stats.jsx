import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-8 h-8 "
              style={{ color: "black" }}
            />
          </div>
          <div className="stat-title">Location</div>
          <div className="stat-value">Winnipeg</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faClock}
              className="w-8 h-8 "
              style={{ color: "black" }}
            />
          </div>
          <div className="stat-title">Time Zone</div>
          <div className="stat-value">Time</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faCalendarDay}
              className="w-8 h-8 "
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
