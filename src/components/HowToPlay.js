import React from "react";
import Navbar from "./Navbar";

function HowToPlay({ updateGameState }) {
  return (
    <div>
      <Navbar id={1} updateGameState={updateGameState} />

      <div className="help-header">
        <div className="help-title">
          <h1>How To Play</h1>
        </div>
      </div>

      <div>
        <h2>Find the two 8 letter words.</h2>

        <h3 color="orange">Word Submission Rules</h3>
        <h4>Must be a real word.</h4>
        <h4>Must be 8 letters long.</h4>
        <h4>Must not be a plural.</h4>
        <h4>Remaining letters meet the above.</h4>
      </div>
    </div>
  );
}

export default HowToPlay;
