import React from 'react'
import Language from './Language'

const LanguageList = ({ languages }) => {
  return (
    <div className="language-list">
      {languages.map((language, i) => {
        return <Language key={i} content={language} />
      })}
    </div>
  )
}

export default LanguageList;