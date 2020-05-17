import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, addDays, subDays } from "date-fns";

const FifthTimePicker = () => {

    // * highlighted day on calendar, not important
    const [selectedDate, setSelectedDate] = useState(
    );

    const [bookings, setBookings] = useState([]);
    const [bookedTimesForDay, setBookedTimesForDay] = useState([]);

    const [timeInterval, setTimeInterval] = useState(60)

    async function initializeBookings() {
        let response = await fetch('http://localhost:8000/api/bookings/DonaldSadoway');
        let bookingData = await response.json();

        //* originally the each booking.time is a string so have to convert to date type
        bookingData = bookingData.map(booking => ({
            ...booking,
            time: new Date(booking.time)
        }))

        let todaysBookings = bookingData.filter(booking => booking.time.getDate() == new Date().getDate())

        setBookings(bookingData);
        setBookedTimesForDay(todaysBookings);
        console.log(todaysBookings);

        // setTimeInterval(30);
        // setBookedTimesForDay([
        //     new Date(2020, 4, 9, 12),
        //     new Date(2020, 4, 9, 13),
        //     new Date(2020, 4, 9, 14)
        // ]);

        // setTimeout(() => {
        //     setBookedTimesForDay([
        //         new Date(2020, 4, 9, 12),
        //         new Date(2020, 4, 9, 13),
        //         new Date(2020, 4, 9, 14)
        //     ]);
        // }, 4000)

        setSelectedDate(setHours(setMinutes(new Date(), 0), 15))
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
        // console.log(bookingsForDay)
        setBookedTimesForDay(bookingsForDay.map(booking => booking.time))
    }

    // * keeps only weekdays, not important
    // const isWeekday = date => {
    //     return date.getDay() != 0 && date.getDay() != 6
    // }

    const bookLesson = async () => {
        try {
            let response = await fetch('http://localhost:8000/api/booking/Thomas/SalKhan', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subject: 'Solid State Chemistry',
                    time: selectedDate
                })
            });
            response = await response.json();
            console.log(response);
        } catch (err) {
            console.log(`error is: ${err}`);
        }
    }

    // let [loading, setLoading] = useState(true);

    // setTimeout(() => {
    //     setLoading(false);
    // }, 1000);

    return (
        <div>
            {/* {loading && (
                <h1>loading...</h1>
            )
            }

            {!loading && (
                <div>
                    <DatePicker
                        timeIntervals={timeInterval}
                        selected={selectedDate}
                        onChange={date => {
                            setSelectedDate(date);
                            updateBookedTimes(date);
                        }}
                        showTimeSelect
                        minDate={subDays(new Date(), 0)}
                        maxDate={addDays(new Date(), 13)}
                        excludeTimes={bookedTimesForDay}
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                    <button onClick={bookLesson}>
                        Book Lesson
                    </button>
                </div>
            )} */}

            <DatePicker
                timeIntervals={timeInterval}
                selected={selectedDate}
                onChange={date => {
                    setSelectedDate(date);
                    updateBookedTimes(date);
                }}
                showTimeSelect
                minDate={subDays(new Date(), 0)}
                maxDate={addDays(new Date(), 13)}
                excludeTimes={bookedTimesForDay}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button onClick={bookLesson}>
                Book Lesson
            </button>
            {/* {console.log(`selected date is: ${selectedDate}`)} */}
            {/* {console.log(bookedTimesForDay)} */}
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
