import React from 'react'

function Win({ submittedWords }) {
    return (
        <div>
            <div>
                <h1>Congratulations!</h1>
            </div>
            <div><h2>You solved today's puzzle with...</h2>
                <h3>{submittedWords[0]} - {submittedWords[1]}</h3>
                <h3></h3>
            </div>

        </div>
    )
}

export default Win