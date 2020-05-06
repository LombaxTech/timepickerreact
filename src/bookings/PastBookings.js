import React from 'react';
import bookings from '../data/bookings2';

let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();

let pastBookings = bookings.filter(booking => booking.time < new Date())

const PastBookings = () => {

    return (
        <div>
            <h1>Past Bookings</h1>
            <ul>
                {pastBookings.map(booking => (
                    <li key={booking.id}>
                        {booking.time.getDate()}/{booking.time.getMonth()}/{booking.time.getFullYear()}, {booking.time.getHours()}:00, {booking.studentName}, {booking.subject}, notesButton, cancelButton
                    </li>
                ))}
            </ul>
            {console.log(pastBookings)}
        </div>
    );
}

export default PastBookings;