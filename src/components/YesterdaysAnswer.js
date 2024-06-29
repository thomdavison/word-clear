import React from "react";
import Board from "./Board";

function YesterdaysAnswer({
  updateGameState,
  yesterdaysAnswers,
  yesterdaysLetters,
}) {
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

      <Board letters={yesterdaysLetters} isDryRun={true} />

      <div className="button-row">
        <button onClick={() => updateGameState("")}>Play</button>
      </div>
    </div>
  );
}

export default YesterdaysAnswer;
