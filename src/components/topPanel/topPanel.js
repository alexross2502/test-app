import React from "react";
import CurrentLocation from "../currentLocation/currentLocation";
import CurrentTime from "../currentTime/currentTime";
import './topPanel.css'

const TopPanel = (props) => {
    return (
        <div className='topPanel_container'>
            <CurrentLocation lat={props.data.lat} lng={props.data.lng}/>
            <CurrentTime 
                time={props.data.time} day_string={props.data.date.day_string} 
                day_number={props.data.date.day_number} 
                month={props.data.date.month} year={props.data.date.year}
            />
        </div>
    )
}

export default TopPanel;