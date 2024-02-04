import React from 'react'

import Rank from './Rank'
import LetterCell from './Lettercell'

function Board({ score, letters, currentWord, onTileClick, submit, submittedWords, deleteFunc, shuffle, updateGameState }) {
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
            <Rank score={score} />
            <div className='currentWord'>
                <h1>{currentWord}</h1>
            </div>
            <div className='submittedWords' >
                <h3>{word}</h3>
            </div>
            <div className='row'>
                <LetterCell value={letters[0]} onClick={() => onTileClick(0)} currentWord={currentWord} />
                <LetterCell value={letters[1]} onClick={() => onTileClick(1)} currentWord={currentWord} />
                <LetterCell value={letters[2]} onClick={() => onTileClick(2)} currentWord={currentWord} />
            </div>
            <div className='row'>
                <LetterCell value={letters[3]} onClick={() => onTileClick(3)} currentWord={currentWord} />
                <LetterCell value={letters[4]} onClick={() => onTileClick(4)} currentWord={currentWord} />
                <LetterCell value={letters[5]} onClick={() => onTileClick(5)} currentWord={currentWord} />
            </div>
            <div className='row'>
                <LetterCell value={letters[6]} onClick={() => onTileClick(6)} currentWord={currentWord} />
                <LetterCell value={letters[7]} onClick={() => onTileClick(7)} currentWord={currentWord} />
                <LetterCell value={letters[8]} onClick={() => onTileClick(8)} currentWord={currentWord} />
            </div>
            <div className='button-row'>
                <button onClick={deleteFunc}>Delete</button>
                <button onClick={submit}>Submit</button>
            </div>
        </div>

    )
}

export default Board