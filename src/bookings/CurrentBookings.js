import React from 'react';
import bookings from '../data/bookings2';

let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();

let currentBookings = bookings.filter(booking => booking.time >= new Date())

const CurrentBookings = () => {

    return (
        <div>
            <h1>Current Bookings</h1>
            <ul>
                {currentBookings.map(booking => (
                    <li key={booking.id}>
                        {booking.time.getDate()}/{booking.time.getMonth()}/{booking.time.getFullYear()}, {booking.time.getHours()}:00, {booking.studentName}, {booking.subject}, notesButton, cancelButton
                    </li>
                ))}
            </ul>
            {/* {console.log(bookings)} */}
        </div>
    );
}

export default CurrentBookings;