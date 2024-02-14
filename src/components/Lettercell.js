import React from 'react'
import { motion } from "framer-motion"

function LetterCell({ onClick, letter }) {


    var id = ""
    var className = "circle"
    // if (displayValue !== undefined && displayValue.length > 1) {
    //     displayValue = value[1]
    //     id = "used-letter"
    //     className = "circle-selected"
    // }
    // else if (selectedLetters.includes(index)) {
    //     id = "selected-letter"
    // }

    if (letter.isSelected) {
        id = "selected-letter"
    }

    const spring = {
        type: "spring",
        damping: 25,
        stiffness: 120
    };


    return (
        <motion.h1 id={id} className={className} onClick={onClick} key={letter} layout transition={spring}> {letter.value}</motion.h1>

    )
}

export default LetterCell