import React from 'react'

function LetterCell({ value, onClick, isCenterLetter, currentWord, selectedLetters, index }) {

    var displayValue = ""
    displayValue = value

    var id = ""
    var className = "circle"
    if (displayValue !== undefined && displayValue.length > 1) {
        displayValue = value[1]
        id = "used-letter"
        className = "circle-selected"
    }
    else if (selectedLetters.includes(index)) {
        id = "selected-letter"
    }

    return (
        <div id={id} className={className} onClick={onClick}><h2>{displayValue}</h2></div>
    )
}

export default LetterCell