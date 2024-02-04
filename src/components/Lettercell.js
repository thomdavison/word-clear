import React from 'react'

function LetterCell({ value, onClick, isCenterLetter, currentWord }) {
    return (
        <div id={currentWord.includes(value) ? "center-letter" : ""} className='circle' onClick={onClick}><h1>{value}</h1></div>
    )
}

export default LetterCell