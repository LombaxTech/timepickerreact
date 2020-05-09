import React, { useState, useEffect } from 'react';
// import bookings from '../data/bookings2';

const AllBookings = () => {

    const [bookings, setBookings] = useState([]);

    async function initializeBookings() {
        let response = await fetch('http://localhost:8000/api/bookings/SalKhan');
        let data = await response.json();
        let bookingData = data.map(booking => ({
            ...booking,
            time: new Date(booking.time)
        }))
        const sortedBookings = bookingData.slice().sort((a, b) => a.time - b.time)
        setBookings(sortedBookings);
    }

    useEffect(() => {
        initializeBookings();
    }, [])

    const deleteBooking = e => {
        console.log(`key is: ${e.target.getAttribute("data-index")}`)
    }

    return (
        <div>
            <h1>All Bookings</h1>
            <ul>
                {bookings.map(booking => (
                    <li key={booking._id}>
                        {booking.time.getDate()}/{booking.time.getMonth()}/{booking.time.getFullYear()}, {booking.time.getHours()}:00, {booking.studentName}, {booking.subject}, notesButton
                        <button
                            data-index={booking._id}
                            onClick={deleteBooking}
                        >
                            Cancel Booking
                        </button>
                    </li>
                ))}
            </ul>
            {/* {console.log(bookings[1]._id)} */}
            {console.log(bookings[1])}
        </div>
    );
}

export default AllBookings;

// TODO: delete functionality
// TODO only make clickable if time of booking - today time is more than a day 
// TODO make a copy of the booking, into deleted booking of tutor
// TODO make a copy of the booking, into deleted booking of student
// TODO delete the booking for tutor
// TODO delete the booking for student
// TODO send notification/email to student 
