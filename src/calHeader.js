import React from "react";
import './calan.css';


function Header({ toDay, dateDisplay ,onPrvClick, onNextClick}) {

    return (
        <div className="calendar-left">
            <div className="triangle-left" onClick={onPrvClick}></div>
                    <div className="triangle-right" onClick={onNextClick} ></div>
            <div className="num-date">{toDay}</div>
            <div className="day">{dateDisplay}</div>
            <div className="current-events">Current Events
                <br />
                <ul>
                    <li>Day {dateDisplay}</li>
                </ul>
                <span className="posts">See post events</span></div>

            <div className="create-event">Create an Event</div>
            <hr className="event-line" />
            <div className="add-event"><span className="add">+</span></div>

        </div>

    )
}
export default Header;


{/* 
<div className="year">{year}</div>
<button onClick={onNextClick}  >  next  </button> */}