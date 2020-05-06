import React from 'react';
import bookings from '../data/bookings2';

const AllBookings = () => {

    return (
        <div>
            <h1>All Bookings</h1>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {booking.time.getDate()}/{booking.time.getMonth()}/{booking.time.getFullYear()}, {booking.time.getHours()}:00, {booking.studentName}, {booking.subject}, notesButton, cancelButton
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllBookings;