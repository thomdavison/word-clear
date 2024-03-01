import React from 'react'

function HowToPlay({ updateGameState }) {

    return (
        <div>

            <div className='help-header'>
                <div className='help-title'>
                    <h1>How To Play</h1>
                </div>
            </div>

            <div>
                <h2>Find the scrambled words.</h2>

                <h4>Words must be 8 letters long.</h4>
                <h4>Words must not be a plural.</h4>
                <h4>Letters can only be used once.</h4>
                <h4>Use all letters to solve.</h4>

            </div>

            <div className='button-row'><button onClick={() => updateGameState("")}>Play</button></div>
        </div >

    )
}

export default HowToPlay