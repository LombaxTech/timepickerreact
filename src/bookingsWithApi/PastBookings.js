import React, { useState, useEffect } from 'react';

const PastBookings = () => {

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

    let pastBookings = bookings.filter(booking => booking.time < new Date())

    return (
        <div>
            <h1>Past Bookings</h1>
            <ul>
                {pastBookings.map(booking => (
                    <li key={booking._id}>
                        {booking.time.getDate()}/{booking.time.getMonth()}/{booking.time.getFullYear()}, {booking.time.getHours()}:00, {booking.studentName}, {booking.subject}, notesButton, cancelButton
                    </li>
                ))}
            </ul>
            {console.log(pastBookings)}
        </div>
    );
}

export default PastBookings;