import React, { useState } from 'react';
import moment from 'moment-jalaali';
import 'moment/locale/fa'; 

const DateConverter = () => {
  const [dayOfYear, setDayOfYear] = useState('');
  const [year, setYear] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');

  const handleConvert = () => {
    
    const shamsiDateString = `${year}/01/01`;
    //Add days to first day of year
    const shamsiMoment = moment(shamsiDateString, 'jYYYY/jMM/jDD').add(dayOfYear - 1, 'days');
    //The name of the day of the week
    const day = shamsiMoment.format('dddd');
    setDayOfWeek(day);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="شماره روز (بین ۱ تا ۳۶۵)"
        value={dayOfYear}
        onChange={(e) => setDayOfYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="سال شمسی (به فرمت yyyy)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleConvert}>تبدیل</button>
      <div>
        <p>روز هفته: {dayOfWeek}</p>
      </div>
    </div>
  );
};

export default DateConverter;
