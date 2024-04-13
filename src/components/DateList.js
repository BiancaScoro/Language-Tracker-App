import React from 'react'
import Date from './Date'

const DateList = ({dates}) => {
  return (
    <div className="date-list">
        {dates.map((date, i) => {
            return <Date key={i} content={date} />
        })}
    </div>
  )
}

export default DateList;