import React, { useState } from 'react';
import './App.css';
import TimePicker from './timepickers/TimePicker'
import CurrentBookings from './bookings/CurrentBookings'
import PastBookings from './bookings/PastBookings'
import FifthTimePicker from './timepickerWithBackend/FifthTimePicker'
import AllBookings from './bookingsWithApi/AllBookings'

// * Timepicker using mock data only
// const App = () => (
//   <div>
//     <FourthTimePicker />
//     <AllBookings />
//     <CurrentBookings />
//     <PastBookings />
//   </div>
// )

// * Timepicker with integrated backend
const App = () => (
	<div>
		<FifthTimePicker />
		<AllBookings />
	</div>
)

export default App;
