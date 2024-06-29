import React from "react";

function HowToPlay({ updateGameState }) {
  return (
    <div>
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

      <div className="button-row">
        <button onClick={() => updateGameState("")}>Play</button>
      </div>
    </div>
  );
}

export default HowToPlay;
