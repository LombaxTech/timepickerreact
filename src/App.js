import React, { useState } from 'react';
import './App.css';
import TimePicker from './timepickers/TimePicker'
import SecondTimePicker from './timepickers/SecondTimePicker'
import ThirdTimePicker from './timepickers/ThirdTimePicker'
import FourthTimePicker from './timepickers/FourthTimePicker'
import AllBookings from './bookings/AllBookings'
import CurrentBookings from './bookings/CurrentBookings'
import PastBookings from './bookings/PastBookings'


const App = () => (
  <div>
    <FourthTimePicker />
    <AllBookings />
    <CurrentBookings />
    <PastBookings />
  </div>
)

export default App;
