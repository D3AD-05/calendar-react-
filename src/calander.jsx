import React, {  useMemo, useState } from "react";
import './calan.css';
import Header from "./calHeader";
import Days from './Day'
function Calendar() {

    const date = new Date;
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
    var month = date.getMonth();
    // month = date.setMonth(month+1);
    // month = date.getDate()

    // const year = date.getFullYear();
    // const day = date.getDay();

    const firstDay = date; // ww mm dd yy
    console.log('first day', firstDay);

    const d = firstDay.toLocaleDateString('en', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    console.log('first day ' + d);

    const emptyDays = weekDays.indexOf(d.split(', ')[0]);
    console.log('empty days', emptyDays);

    const daysInMonth = new Date(year, month+1,0 ).getDate()
    console.log('d===',daysInMonth);




    const [nav, setNav] = useState(0);
    //const [curentMonth, setCurrentMonth] = useState(date.getMonth());
    const [days, setDays] = useState([]);
    const [dateDisplay, setDateDisplay] = useState('');
    //const [events, setEvents] = useState(localStorage.getItem('events') ?JSON.parse(localStorage.getItem('events')) : [] );

    // console.log( 'date', date);   
    //. console.log( 'month', month);
    // console.log( 'year', year);
    // console.log('no of days ' + daysInMonth);


    useMemo(() => {
        if (nav !== 0) {
            date.setMonth(month + nav);
            //setCurrentMonth((curentMonth + nav) % 12)

        }
        //console.log('nxt', date);

        //date display
        setDateDisplay(`${date.toLocaleDateString('ml',
            {
                month: 'long',
                year: 'numeric'

            })}`)

    }, [nav]);


    const onPrvClick = () => {
        setNav(nav - 1)
        //console.log('prv',nav);
    }

    const onNextClick = () => {
        setNav(nav + 1)
        //console.log('next', nav,1);
    }


    const dayarr=[];

    for (let i = 1; i <= emptyDays + daysInMonth; i++) {
        const dayString = i-emptyDays
        console.log(dayString);
        dayarr.push(dayString)
        
    }
    console.log(dayarr);
   



    return (
        <>
            <h1>Calendar</h1>
             {/* <Header onNextClick={onNextClick}  onPrvClick={onPrvClick} dateDisplay={dateDisplay} />         */}
            

            <div id="weekdays">
                <div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
            </div>
            <div id="calendar">
                {dayarr}
                
            </div>

            <div id="da">
           
                </div>


            

        </>
    )

}

export default Calendar;