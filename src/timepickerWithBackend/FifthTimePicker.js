import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, addDays, subDays } from "date-fns";

const FifthTimePicker = () => {

    //* bookings: all bookings for the teacher through all days
    //* bookedTimes: booked times on a given day

    const [values, setValues] = useState({
        bookings: [],
        bookedTimes: []
    });

    const { bookings, bookedTimes } = values;

    async function initializeBookings() {
        let response = await fetch('http://localhost:8000/api/bookings/SalKhan');
        let data = await response.json();

        //* originally the each booking.time is a string so have to convert to date type
        let bookingData = data.map(booking => ({
            ...booking,
            time: new Date(booking.time)
        }))

        let todaysBookings = bookingData.filter(booking => {
            return (booking.time.getDate() == new Date().getDate())
        });

        setValues({
            ...values,
            bookings: bookingData,
            bookedTimes: todaysBookings
        });
    }

    useEffect(() => {
        initializeBookings();
    }, [])

    // * returns the bookings as an array for a given date 
    let getBookings = date => {
        return bookings.filter(booking => (
            booking.time.getDate() === date.getDate() &&
            booking.time.getMonth() === date.getMonth() &&
            booking.time.getFullYear() === date.getFullYear()
        ))
    }

    // * uses getBookings to set values for the bookedTimes of the day 
    const updateBookedTimes = date => {
        let bookingsForDay = getBookings(date);
        setValues({
            ...values,
            bookedTimes: bookingsForDay.map(booking => booking.time)
        })
    }

    // * highlighted day on calendar, not important
    const [selectedDate, setSelectedDate] = useState(
        setHours(setMinutes(new Date(), 0), 15)
    );

    // * keeps only weekdays, not important
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
                }}
                showTimeSelect
                minDate={subDays(new Date(), 0)}
                maxDate={addDays(new Date(), 13)}
                excludeTimes={bookedTimes}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button>
                Book Lesson
            </button>
        </div>
    );

}

export default FifthTimePicker;




// ! NOT IMPORTANT CODE BELOW, WAS USED FOR OTHER TESTING


// * setting unavailable times for today 

// let day = new Date().getDay();

// switch (day) {
//     case 1:
//         day = 'one'
//         break;
//     case 2:
//         day = 'two'
//         break;
//     case 3:
//         day = 'three'
//         break;
//     case 4:
//         day = 'four'
//         break;
//     case 5:
//         day = 'five'
//         break;
//     default:
//         console.log('error')
//         break;
// }

// let todaysUnavailableTimes = unavailableTimes[day].map(hour => new Date(2020, 1, 1, hour));

// * end of setting unavailable times for today



   // const updateUnavailableHours = date => {

    //     let day = date.getDay();

    //     switch (day) {
    //         case 1:
    //             day = 'one'
    //             break;
    //         case 2:
    //             day = 'two'
    //             break;
    //         case 3:
    //             day = 'three'
    //             break;
    //         case 4:
    //             day = 'four'
    //             break;
    //         case 5:
    //             day = 'five'
    //             break;
    //         default:
    //             console.log('error')
    //             break;
    //     }

    //     let todaysUnavailableHours = [];

    //     if (unavailableTimes[day].length != 0) {
    //         todaysUnavailableHours = unavailableTimes[day].map(hour => (
    //             new Date(2020, 1, 1, hour)
    //         ))
    //     }

    //     setUnavailableHours(todaysUnavailableHours);
    // }


    // const [unavailableHours, setUnavailableHours] = useState(todaysUnavailableTimes);


    // import unavailableTimes from '../data/unavailableTimes'
