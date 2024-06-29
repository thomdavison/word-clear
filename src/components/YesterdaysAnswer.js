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
          <span id="word1">{yesterdaysAnswers[0]}</span> -{" "}
          <span id="word2">{yesterdaysAnswers[1]}</span>
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
