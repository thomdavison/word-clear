import React from "react";

function YesterdaysAnswer({ updateGameState, yesterdaysAnswers }) {
  return (
    <div>
      <div>
        <h1>Yesterdays Solution</h1>
      </div>

      <div>
        <h3>
          {yesterdaysAnswers[0]} - {yesterdaysAnswers[1]}
        </h3>
      </div>

      <div className="button-row">
        <button onClick={() => updateGameState("")}>Play</button>
      </div>
    </div>
  );
}

export default YesterdaysAnswer;
