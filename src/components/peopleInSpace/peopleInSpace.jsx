import React from "react";
import "./peopleInSpace.css";
import PeopleInSpaceCard from "./peopleInSpace_Card.jsx";

const PeopleInSpace = (props) => {
  return (
    <div className="peopleInSpace_container">
      <PeopleInSpaceCard team={props.team} />
      <div className="peopleInSpace_container-total">
        <p>Total amount: {props.numberOfCrew} people on ISS</p>
      </div>
    </div>
  );
};

export default PeopleInSpace;
