import React, { useState } from 'react';
import './App.css';
import TimePicker from './timepickers/TimePicker'
import SecondTimePicker from './timepickers/SecondTimePicker'
import ThirdTimePicker from './timepickers/ThirdTimePicker'
import FourthTimePicker from './timepickers/FourthTimePicker'
import AllBookings from './bookings/AllBookings'
import CurrentBookings from './bookings/CurrentBookings'
import PastBookings from './bookings/PastBookings'
import FifthTimePicker from './timepickerWithBackend/FifthTimePicker'


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
	</div>
)

export default App;
