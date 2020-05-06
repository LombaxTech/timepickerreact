import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, addDays, subDays } from "date-fns";
import bookings from '../data/bookings'
import unavailableTimes from '../data/unavailableTimes'

let nightBookings = [
    new Date(2020, 4, 10, 1),
    new Date(2020, 4, 10, 2),
    new Date(2020, 4, 10, 3),
    new Date(2020, 4, 10, 4),
    new Date(2020, 4, 10, 5),
    new Date(2020, 4, 10, 6)
]

let todaysBookings = bookings.filter(booking => {
    return (booking.timeDetails.day === new Date().getDate())
})

let getBookings = date => {
    return bookings.filter(booking => booking.timeDetails.day == date.getDate())
}

const SecondTimePicker = () => {

    const [selectedDate, setSelectedDate] = useState(
        setHours(setMinutes(new Date(), 0), 15)
    );

    const [bookedTimes, setBookedTimes] = useState(
        todaysBookings.map(booking => (
            new Date(booking.timeDetails.year, booking.timeDetails.month, booking.timeDetails.day, booking.timeDetails.hour)
        ))
    )

    const isWeekday = date => {
        return date.getDay() != 0 && date.getDay() != 6
    }

    const updateBookedTimes = date => {

        // * 
        // * bookedHours = getBookedHours(date)
        // * setBookedTimes(bookedHours)

        // * SETTING UNAVAILABLE TIMES

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

        let todaysUnavailableTimes = [];

        if (unavailableTimes[day].length != 0) {
            todaysUnavailableTimes = unavailableTimes[day].map(time => (
                new Date(2020, 1, 1, time)
            ))
        }

        // console.log(todaysUnavailableTimes);
        let bookingsForDay = getBookings(date);
        // console.log(bookingsForDay);
        let bookedHoursForDay = bookingsForDay.map(booking => new Date(2020, 1, 1, booking.timeDetails.hour))
        // console.log(bookedHoursForDay);

        setBookedTimes([...todaysUnavailableTimes, ...bookedHoursForDay])

        // setBookedTimes([
        //     new Date(2020, 3, 4, 13),
        //     new Date(2020, 3, 4, 17)
        // ])
    }

    return (
        <div>
            <DatePicker
                filterDate={isWeekday}
                timeIntervals={60}
                selected={selectedDate}
                onChange={date => {
                    setSelectedDate(date);
                    updateBookedTimes(date)
                }}
                showTimeSelect
                minDate={subDays(new Date(), 0)}
                maxDate={addDays(new Date(), 13)}
                excludeTimes={[...nightBookings, ...bookedTimes]}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button
            >
                Book Lesson
            </button>
            {/* {console.log(unavailableTimes.one)} */}
        </div>
    );

}

export default SecondTimePicker;
