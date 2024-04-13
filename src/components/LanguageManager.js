import React, {useState} from 'react'
import LanguageList from './LanguageList'
import LanguageInput from './LanguageInput'

const LanguageManager = () => {
  const [languages, setLanguages] = useState([])

  const addLanguage = (newLanguage) => {
    setLanguages([...languages, newLanguage])
  }


  return (
    <div className="language-manager">
      <LanguageInput onAddLanguage={addLanguage} />
      <LanguageList languages={languages} />
    </div>
  )
}

export default LanguageManager;