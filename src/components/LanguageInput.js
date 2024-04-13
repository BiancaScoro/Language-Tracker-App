import React, {useState} from 'react'

const LanguageInput = ({onAddLanguage}) => {
  const [languagelearned, setLanguageLearned] = useState('')

  const handleChange = (e) => {
    setLanguageLearned(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (languagelearned.trim()) {
        onAddLanguage(languagelearned);
        setLanguageLearned('');
      }
    }
  }
  return (
    <div className="language-input">
      <input className="text-input" type="text" languagelearned={languagelearned} onChange={handleChange} onKeyDown={handleKeyDown} placeholder='what language did you learn?' maxLength={34}  />
    </div>
  )
}

export default LanguageInput;