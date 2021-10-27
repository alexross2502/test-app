import React from "react";
import "./currentLocation.css";

const CurrentLocation = (props) => {
  return (
    <div className="currentLocation_container">
      <div className="currentLocation_container-item">
        <p>
          <strong>ISS is now located at:</strong>
        </p>
      </div>
      <div className="currentLocation_container-item">
        <p>
          longitude {props.lng}: , latitude : {props.lat}
        </p>
      </div>
    </div>
  );
};

export default CurrentLocation;
