import React from 'react'

import LetterCell from './Lettercell'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'

function Board({ letters, currentWord, onTileClick, submit, submittedWords, deleteFunc, shuffle, updateGameState, selectedLetters }) {
    let word = ""

    let words = submittedWords

    if (submittedWords.length > 0) {
        if (submittedWords.length > 4) {
            words = submittedWords.slice(-4)
        }
        let i = 0;

        while (i < words.length) {
            if (i === words.length - 1) {
                word += words[i]
            } else {
                word += words[i] + " - "
            }
            i++
        }
    }


    return (
        <div>
            <div className='currentWord'>
                <h1>{currentWord}</h1>
            </div>

            <div className='row'>
                <LetterCell value={letters[0]} onClick={() => onTileClick(0)} selectedLetters={selectedLetters} index={0} />
                <LetterCell value={letters[1]} onClick={() => onTileClick(1)} selectedLetters={selectedLetters} index={1} />
                <LetterCell value={letters[2]} onClick={() => onTileClick(2)} selectedLetters={selectedLetters} index={2} />
                <LetterCell value={letters[3]} onClick={() => onTileClick(3)} selectedLetters={selectedLetters} index={3} />
            </div>
            <div className='row'>
                <LetterCell value={letters[4]} onClick={() => onTileClick(4)} selectedLetters={selectedLetters} index={4} />
                <LetterCell value={letters[5]} onClick={() => onTileClick(5)} selectedLetters={selectedLetters} index={5} />
                <LetterCell value={letters[6]} onClick={() => onTileClick(6)} selectedLetters={selectedLetters} index={6} />
                <LetterCell value={letters[7]} onClick={() => onTileClick(7)} selectedLetters={selectedLetters} index={7} />
            </div>
            <div className='row'>
                <LetterCell value={letters[8]} onClick={() => onTileClick(8)} selectedLetters={selectedLetters} index={8} />
                <LetterCell value={letters[9]} onClick={() => onTileClick(9)} selectedLetters={selectedLetters} index={9} />
                <LetterCell value={letters[10]} onClick={() => onTileClick(10)} selectedLetters={selectedLetters} index={10} />
                <LetterCell value={letters[11]} onClick={() => onTileClick(11)} selectedLetters={selectedLetters} index={11} />
            </div>
            <div className='row'>
                <LetterCell value={letters[12]} onClick={() => onTileClick(12)} selectedLetters={selectedLetters} index={12} />
                <LetterCell value={letters[13]} onClick={() => onTileClick(13)} selectedLetters={selectedLetters} index={13} />
                <LetterCell value={letters[14]} onClick={() => onTileClick(14)} selectedLetters={selectedLetters} index={14} />
                <LetterCell value={letters[15]} onClick={() => onTileClick(15)} selectedLetters={selectedLetters} index={15} />
            </div>
            <div className='button-row'>
                <button onClick={deleteFunc}>Delete</button>
                <button onClick={shuffle}><FontAwesomeIcon icon={faShuffle} /></button>
                <button onClick={submit}>Submit</button>
            </div>
        </div>

    )
}

export default Board