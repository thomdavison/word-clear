import React, { useState } from 'react'

import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'

function Board({ letters, currentWord, onTileClick, submit, deleteFunc, updateGameState, shuffleFunc, submittedInvalidWord }) {
    const [move, setMove] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const spring = {
        type: "spring",
        damping: 25,
        stiffness: 120
    };

    return (
        <div>
            <div className='currentWord'>
                <motion.h1
                    animate={{ x: submittedInvalidWord ? 1 : -1 }}
                    transition={{ type: "spring", bounce: 10 }}
                    onClick={() => {
                        setMove(!move)
                    }}>{currentWord}</motion.h1>
            </div>
            <div className='row'>
                <ul>
                    {letters.map((letter) => (
                        <motion.h1 id={letter.isSelected ? 'selected-letter' : ''} className="letter" key={letter.id} layout transition={spring} onClick={() => onTileClick(letter)}> {letter.value}</motion.h1>
                    ))}
                </ul>
            </div>

            <div className='button-row'>
                <button id="help-button" onClick={() => updateGameState("how-to-play")}>?</button>
                <button id="help-button" onClick={shuffleFunc}><FontAwesomeIcon icon={faShuffle} /></button>
                <button onClick={deleteFunc}>Delete</button>
                <button onClick={submit}>Submit</button>
            </div>
        </div >

    )
}

export default Board