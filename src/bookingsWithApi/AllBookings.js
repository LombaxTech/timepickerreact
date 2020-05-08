import React, { useState, useEffect } from 'react';
// import bookings from '../data/bookings2';

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

// TODO: delete functionality
// TODO only make clickable if time of booking - today time is more than a day 
// TODO make a copy of the booking, into deleted booking of tutor
// TODO make a copy of the booking, into deleted booking of student
// TODO delete the booking for tutor
// TODO delete the booking for student
// TODO send notification/email to student 
