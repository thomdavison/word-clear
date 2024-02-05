import React from 'react'

function LetterCell({ value, onClick, isCenterLetter, currentWord, selectedLetters, index }) {
    return (
        <div id={selectedLetters.includes(index) ? "center-letter" : ""} className='circle' onClick={onClick}><h2>{value}</h2></div>
    )
}

export default LetterCell