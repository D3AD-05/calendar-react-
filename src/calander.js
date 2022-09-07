import React, { useMemo, useState } from "react";
import './calan.css';
import Header from "./calHeader";
import DaysDisplay from './calanDays'
function Calendar() {

    const date = new Date;
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];


    const [nav, setNav] = useState(0);
    const [toDay, setToDay] = useState([]);
    const [dateDisplay, setDateDisplay] = useState('');


    
    var month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDay();
    console.log('today ', day);

    const firstDay = new Date(year, month + nav); // ww mm dd yy
    console.log('first day', firstDay);

    const d = firstDay.toLocaleDateString('en', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    // console.log('first day ' + d);

    const emptyDays = weekDays.indexOf(d.split(', ')[0]);
    // console.log('empty days', emptyDays);

    const daysInMonth = new Date(year, month + 1 + nav, 0).getDate();
    // console.log('d===', daysInMonth);

    useMemo(() => {
        if (nav !== 0) {
            date.setMonth(month + nav);

        }
        

        //date display
        setDateDisplay(`${date.toLocaleDateString('ml',
            {
                month: 'long',
                year: 'numeric',
                weekday: 'long',
            })}`)

        setToDay(`${date.toLocaleDateString('en', {
            day: 'numeric'
        })}`)

    }, [nav]);

    const onPrvClick = () => {
        setNav(nav - 1)
    }

    const onNextClick = () => {
        setNav(nav + 1)
    }

    const OnAddEvent = () =>{
        console.log('click');
    }

    const dayarr = [];

    for (let i = 1; i <= emptyDays + daysInMonth; i++) {
        const dayString = i - emptyDays
        console.log(dayString);
        dayarr.push(dayString)

    }
    return (
        <>
            <div className="container">
                <div className="calendar-base">
                    <div className="year"></div>

                    

                    <hr className="month-line" />
                    <div className="days">SUN MON TUE WED THU FRI SAT</div>
                    <div className="num-dates">
                        {
                            dayarr.map((day) => (
                                <div className={day <= 0 ? 'paddingd' : 'weekd'} onClick={OnAddEvent} >{day}</div>

                            ))
                        }
                    </div>
                </div>
               
                <Header
                 onNextClick={ onNextClick } 
                 onPrvClick={onPrvClick}
                 toDay={toDay} 
                 dateDisplay={dateDisplay}/>
                
            </div>









        </>
    )

}

export default Calendar;