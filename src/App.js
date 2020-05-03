import React, { useState } from 'react';
import './App.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// ! importing like this messes up includeTimes for some reason
// import setHours from "date-fns/setMinutes";
// import setMinutes from "date-fns/setMinutes";

// ! importing like this does work
import { setHours, setMinutes, addDays, subDays } from "date-fns";

const App = () => {

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        minDate={subDays(new Date(), 0)}
        maxDate={addDays(new Date(), 13)}
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
          setHours(setMinutes(new Date(), 0), 18),
          setHours(setMinutes(new Date(), 0), 19),
          setHours(setMinutes(new Date(), 0), 17)
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      {console.log(startDate)}
      {console.log()}
    </div>
  );

}

export default App;
