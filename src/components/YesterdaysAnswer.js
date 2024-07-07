import React from "react";
import Board from "./Board";
import Navbar from "./Navbar";

function YesterdaysAnswer({
  updateGameState,
  yesterdaysAnswers,
  yesterdaysLetters,
}) {
  return (
    <div>
      <Navbar id={2} updateGameState={updateGameState} />
      <div>
        <h1>Yesterday's Solution</h1>
      </div>

      <div>
        <h3>
          <span id="word1">{yesterdaysAnswers[0]}</span> -{" "}
          <span id="word2">{yesterdaysAnswers[1]}</span>
        </h3>
      </div>

      <Board letters={yesterdaysLetters} isDryRun={true} />
    </div>
  );
}

export default YesterdaysAnswer;
