import React from 'react'

function HowToPlay({ updateGameState }) {

    return (
        <div>

            <div className='help-header'>
                <div className='help-title'>
                    <h1>How To Play</h1>
                </div>
                <div className='help-close-button' onClick={() => updateGameState("")}><h1>X</h1></div>
            </div>

            <div>
                <h2>Find the two scrambled eight letter words in the grid.</h2>

                <h3>Words must be 8 letters long</h3>
                <h3>Words must be in the word list</h3>
                <h3>Remaining letters can be arranged into a valid submission</h3>

            </div>
        </div >

    )
}

export default HowToPlay