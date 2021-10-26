import React from "react";
import GoogleMap from "../googleMap/googleMap";
import PeopleInSpace from "../peopleInSpace/peopleInSpace.jsx";
import './bottomPanel.css'

const BottomPanel = (props) => {
    
    return (
        <div className='bottomPanel_container'>
            <GoogleMap lng={props.lng} lat={props.lat} />
            <PeopleInSpace number_of_crew={props.number_of_crew} team={props.team}/>
        </div>
    )
}

export default BottomPanel;