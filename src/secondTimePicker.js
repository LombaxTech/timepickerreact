import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, addDays, subDays } from "date-fns";
import bookings from './data/bookings'

let todaysBookings = bookings.filter(booking => {
    return (booking.timeDetails.day === new Date().getDate())
})

const SecondTimePicker = () => {

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
    );

    const [bookedTimes, setBookedTimes] = useState(
        todaysBookings.map(booking => (
            new Date(booking.timeDetails.year, booking.timeDetails.month, booking.timeDetails.day, booking.timeDetails.hour)
        ))
    )

    const getDateDetails = () => {
        console.log(`Year is: ${startDate.getFullYear()}, Month is: ${startDate.getMonth()}, Day is: ${startDate.getDate()}, Hour is: ${startDate.getHours()}`)
    }

    const updateAvailableTimes = date => {
        // console.log(date)
        // * 
        // * bookedHours = getBookedHours(date)
        // * setBookedTimes(bookedHours) 

        setBookedTimes([
            // setHours(setMinutes(new Date(), 0), 1),
            // setHours(setMinutes(new Date(), 0), 2),
            // setHours(setMinutes(new Date(), 0), 3),
            // setHours(setMinutes(new Date(), 0), 4)
            new Date(2020, 3, 4, 13),
            new Date(2020, 3, 4, 17)
        ])
    }

    return (
        <div>
            <DatePicker
                timeIntervals={60}
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
            <button
            >
                Book Lesson
            </button>
        </div>
    );

}

export default SecondTimePicker;
