import React, {useState, useEffect} from 'react'
import DateInput from './DateInput'
import DateList from './DateList'

const DateManager = () => {
    const [dates, setDates] = useState([])

    useEffect(() => {
        console.log("Updated dates:", dates);
    }, [dates]);

    const addDate = (newDate) => {
       setDates(prevDates => [...prevDates, newDate])
      }
  return (
    <div className="date-manager">
      <DateInput onAddDate={addDate} />
      <DateList dates={dates} />
    </div>
  )
}

export default DateManager;