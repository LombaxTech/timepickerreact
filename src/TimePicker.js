import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// ! importing like this messes up includeTimes for some reason
// import setHours from "date-fns/setMinutes";
// import setMinutes from "date-fns/setMinutes";

// ! importing like this does work
import { setHours, setMinutes, addDays, subDays } from "date-fns";

const TimePicker = () => {

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
    );

    const [bookedTimes, setBookedTimes] = useState([
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 0), 18),
        setHours(setMinutes(new Date(), 0), 19),
        setHours(setMinutes(new Date(), 0), 17)
    ])

    const submitTime = () => {
        // console.log('clicked')
        console.log(startDate)
    }

    const updateAvailableTimes = date => {
        // console.log(date)
        // * 
        // * bookedHours = getBookedHours(date)
        // * setBookedTimes(bookedHours) 

        setBookedTimes([
            setHours(setMinutes(new Date(), 0), 1),
            setHours(setMinutes(new Date(), 0), 2),
            setHours(setMinutes(new Date(), 0), 3),
            setHours(setMinutes(new Date(), 0), 4)
        ])
    }

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={date => {
                    setStartDate(date);
                    updateAvailableTimes(date)
                }}
                showTimeSelect
                minDate={subDays(new Date(), 0)}
                maxDate={addDays(new Date(), 13)}
                excludeTimes={bookedTimes}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            {console.log(startDate)}
            {/* {console.log(setHours(setMinutes(new Date(), 0), 17))} */}
            <button
                onClick={submitTime}
            >
                Book Lesson
            </button>

        </div>
    );

    // * reference if anything goes wrong
    // onChange={date => setStartDate(date)}

}

export default TimePicker;
