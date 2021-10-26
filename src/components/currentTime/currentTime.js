import React from "react";
import './currentTime.css'

const CurrentTime = (props) => {
    
    return(
        <div className='currentTime_container'>
            <div className='currentTime_container-item'>
                <p><strong>
                     Current UTC time: {props.time}   
                </strong></p>
            </div>
            <div className='currentTime_container-item'>
                <p>
                    {props.day_string}, {props.day_number}.{props.month}.{props.year}
                </p>
            </div>
        </div>
        
    )
}

export default CurrentTime;