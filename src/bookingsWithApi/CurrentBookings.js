import React, { useState, useEffect } from 'react';

const CurrentBookings = () => {

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

    let currentBookings = bookings.filter(booking => booking.time >= new Date())

    return (
        <div>
            <h1>Current Bookings</h1>
            <ul>
                {currentBookings.map(booking => (
                    <li key={booking._id}>
                        {booking.time.getDate()}/{booking.time.getMonth()}/{booking.time.getFullYear()}, {booking.time.getHours()}:00, {booking.studentName}, {booking.subject}, notesButton, cancelButton
                    </li>
                ))}
            </ul>
            {/* {console.log(bookings)} */}
        </div>
    );
}

export default CurrentBookings;