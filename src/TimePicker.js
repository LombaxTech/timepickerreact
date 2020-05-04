import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// ! importing like this messes up includeTimes for some reason
// import setHours from "date-fns/setMinutes";
// import setMinutes from "date-fns/setMinutes";

// ! importing like this does work
import { setHours, setMinutes, addDays, subDays } from "date-fns";

const TimePicker = () => {

    const bookings = [
        {
            bookingId: 1,
            timeDetails: {
                year: 2020,
                month: 5,
                day: 4,
                hour: 1
            }
        },
        {
            bookingId: 2,
            timeDetails: {
                year: 2020,
                month: 5,
                day: 4,
                hour: 16
            }
        },
        {
            bookingId: 3,
            timeDetails: {
                year: 2020,
                month: 5,
                day: 4,
                hour: 23
            }
        },
        {
            bookingId: 4,
            timeDetails: {
                year: 2020,
                month: 5,
                day: 5,
                hour: 15
            }
        },
        {
            bookingId: 5,
            timeDetails: {
                year: 2020,
                month: 5,
                day: 5,
                hour: 17
            }
        },
    ]

    let todaysBookings = bookings.filter(booking => {
        return (booking.timeDetails.day === new Date().getDate())
    })

    const myBookedTimes = todaysBookings.map(booking => {
        return (new Date())
    }
        // new Date(booking.timeDetails.year, booking.timeDetails.month, booking.timeDetails.day, booking.timeDetails.hour)
    )

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
    );

    const [bookedTimes, setBookedTimes] = useState(
        todaysBookings.map(booking => (
            new Date(booking.timeDetails.year, booking.timeDetails.month, booking.timeDetails.day, booking.timeDetails.hour)
        ))
    )

    // const [bookedTimes, setBookedTimes] = useState([
    //     // todaysBookings.map(booking => (
    //     // new Date(booking.timeDetails.year, booking.timeDetails.month, booking.timeDetails.day, booking.timeDetails.hour)
    //     //     new Date(2020, 5, 4, 15)
    //     // ))
    //     // new Date(2020, 5, 4, 15),
    //     // new Date(2020, 5, 4, 17),
    //     // new Date(2020, 5, 4, 18),
    //     // new Date(2020, 5, 6, 18)

    //     // '17:00', 1800, 1900

    //     // new Date(2019, 2, 3, 15)

    //     // setHours(setMinutes(new Date(), 0), 17),
    //     // setHours(setMinutes(new Date(), 0), 18),
    //     // setHours(setMinutes(new Date(), 0), 19),
    //     // setHours(setMinutes(new Date(), 0), 17)
    // ])

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

    // TODO: Try extracting date and using new Date(dateValues)

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
            {/* {console.log(myBookedTimes)} */}
            {/* {console.log(startDate)}
            {console.log(setHours(setMinutes(new Date(), 0), 17))} */}
            <button

            >
                Book Lesson
            </button>
            <button
                onClick={getDateDetails}
            >
                Get date details
            </button>
        </div>
    );

    // * reference if anything goes wrong
    // onChange={date => setStartDate(date)}

    // Mon May 04 2020 02:00:00 GMT+0100 (British Summer Time)

}

export default TimePicker;
