import React, { useState } from 'react';
import './App.css';
import TimePicker from './timepickers/TimePicker'
import FifthTimePicker from './timepickerWithBackend/FifthTimePicker'
import AllBookings from './bookingsWithApi/AllBookings'
import CurrentBookings from './bookingsWithApi/CurrentBookings'
import PastBookings from './bookingsWithApi/PastBookings'

const App = () => (
	<div>
		{/* <FifthTimePicker /> */}
		<AllBookings />
		{/* <CurrentBookings /> */}
		{/* <PastBookings /> */}
	</div>
)

export default App;
