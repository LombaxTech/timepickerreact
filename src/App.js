import React, { useState } from 'react';
import './App.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import setHours from "date-fns/setMinutes";
import setMinutes from "date-fns/setMinutes";


// function App() {
//   const [startDate, setStartDate] = useState(new Date());

//   return (
//     <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//   );
// }

// const App = () => {

//   const [startDate, setStartDate] = useState(
//     setHours(setMinutes(new Date(), 30), 16)
//   );

//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={date => setStartDate(date)}
//       showTimeSelect
//       excludeTimes={[
//         setHours(setMinutes(new Date(), 0), 17),
//         setHours(setMinutes(new Date(), 30), 18),
//         setHours(setMinutes(new Date(), 30), 19),
//         setHours(setMinutes(new Date(), 30), 17)
//       ]}
//       dateFormat="MMMM d, yyyy h:mm aa"
//     />
//   );
// };

const App = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17)
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};

export default App;
