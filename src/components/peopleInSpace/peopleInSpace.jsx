import React from "react";
import './peopleInSpace.css'
import PeopleInSpace_Card from "./peopleInSpace_Card.jsx";

const PeopleInSpace = (props) => {
 
    return(
        <div className='peopleInSpace_container'>
            <PeopleInSpace_Card team={props.team}/>
            <div className='peopleInSpace_container-total'>
                <p>Total amount: {props.number_of_crew} people on ISS</p>
            </div>
        </div>
        
    )
}

export default PeopleInSpace;