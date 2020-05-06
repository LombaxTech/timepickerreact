import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, addDays, subDays } from "date-fns";
import bookings from '../data/bookings2'
import unavailableTimes from '../data/unavailableTimes'

let todaysBookings = bookings.filter(booking => {
    return (booking.time.getDate() == new Date().getDate())
})

// * setting unavailable times for today 

let day = new Date().getDay();

switch (day) {
    case 1:
        day = 'one'
        break;
    case 2:
        day = 'two'
        break;
    case 3:
        day = 'three'
        break;
    case 4:
        day = 'four'
        break;
    case 5:
        day = 'five'
        break;
    default:
        console.log('error')
        break;
}

let todaysUnavailableTimes = unavailableTimes[day].map(hour => new Date(2020, 1, 1, hour));

// * end of setting unavailable times for today

let getBookings = date => {
    return bookings.filter(booking => (
        booking.time.getDate() === date.getDate() &&
        booking.time.getMonth() === date.getMonth() &&
        booking.time.getFullYear() === date.getFullYear()
    ))
}

const FourthTimePicker = () => {

    const [selectedDate, setSelectedDate] = useState(
        setHours(setMinutes(new Date(), 0), 15)
    );

    const [bookedTimes, setBookedTimes] = useState(
        todaysBookings.map(booking => booking.time)
    )

    const [unavailableHours, setUnavailableHours] = useState(todaysUnavailableTimes);

    const updateBookedTimes = date => {
        let bookingsForDay = getBookings(date);
        setBookedTimes(bookingsForDay.map(booking => booking.time))
    }

    const updateUnavailableHours = date => {

        let day = date.getDay();

        switch (day) {
            case 1:
                day = 'one'
                break;
            case 2:
                day = 'two'
                break;
            case 3:
                day = 'three'
                break;
            case 4:
                day = 'four'
                break;
            case 5:
                day = 'five'
                break;
            default:
                console.log('error')
                break;
        }

        let todaysUnavailableHours = [];

        if (unavailableTimes[day].length != 0) {
            todaysUnavailableHours = unavailableTimes[day].map(hour => (
                new Date(2020, 1, 1, hour)
            ))
        }

        setUnavailableHours(todaysUnavailableHours);
    }

    const isWeekday = date => {
        return date.getDay() != 0 && date.getDay() != 6
    }

    return (
        <div>
            <DatePicker
                filterDate={isWeekday}
                timeIntervals={60}
                selected={selectedDate}
                onChange={date => {
                    setSelectedDate(date);
                    updateBookedTimes(date);
                    updateUnavailableHours(date);
                }}
                showTimeSelect
                minDate={subDays(new Date(), 0)}
                maxDate={addDays(new Date(), 13)}
                excludeTimes={[...unavailableHours, ...bookedTimes]}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button
            >
                Book Lesson
            </button>
            {console.log(bookedTimes)}
        </div>
    );

}

export default FourthTimePicker;
