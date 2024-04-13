import React, {useState} from 'react'

const DateInput = ({onAddDate}) => {
    const [date, setDate] = useState('')

    const handleChange = (e) => {
        setDate(e.target.value)
        console.log(e.target.value)
    }

const handleKeyDown = (e) => {
        if (e.key === "Enter"){
            e.preventDefault();
            if (date.trim()) {
                onAddDate(date);
                setDate('');
            }
        }
    }
  return (
    <div className="date-input">
        <input className="text-input" type="text" date={date} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="YYYY-MM-DD" maxLength={8} />
    </div>
  )
}

export default DateInput;