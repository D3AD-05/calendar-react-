import React from "react";
import './calan.css';

function DaysDisplay(dayarr){

    return(
        <div className="num-dates">
            {
                dayarr.map((day) => (
                    <div className={day <= 0 ? 'paddingd' : 'weekd'}>{day}</div>
                ))
            }
        </div>
    
         
    )

 }

export default DaysDisplay;