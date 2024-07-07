import React, { useState } from "react";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShuffle,
  faDeleteLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

function Board({
  letters,
  currentWord,
  onTileClick,
  submit,
  deleteFunc,
  restartFunc,
  updateGameState,
  shuffleFunc,
  submittedInvalidWord,
  isDryRun,
}) {
  const [move, setMove] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const spring = {
    type: "spring",
    damping: 25,
    stiffness: 120,
  };

  if (isDryRun) {
    return (
      <div>
        <div className="row">
          <ul id="ul-dry-run">
            {letters.map((letter) => (
              <motion.h1
                id={letter.isWord1 ? "word1" : "word2"}
                className="letter-dry-run"
                key={letter.id}
                layout
              >
                {" "}
                {letter.value}
              </motion.h1>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar id={0} updateGameState={updateGameState} />

        <div className="currentWord">
          <motion.h1
            animate={{ x: submittedInvalidWord ? 1 : -1 }}
            transition={{ type: "spring", bounce: 10 }}
            onClick={() => {
              setMove(!move);
            }}
          >
            {currentWord}
          </motion.h1>
        </div>
        <div className="row">
          <ul>
            {letters.map((letter) => (
              <motion.h1
                id={letter.isSelected ? "selected-letter" : ""}
                className="letter"
                key={letter.id}
                layout
                transition={spring}
                onClick={() => onTileClick(letter)}
              >
                {" "}
                {letter.value}
              </motion.h1>
            ))}
          </ul>
        </div>
        <div className="button-row">
          <button id="help-button" onClick={restartFunc}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button id="help-button" onClick={deleteFunc}>
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
          <button id="help-button" onClick={shuffleFunc}>
            <FontAwesomeIcon icon={faShuffle} />
          </button>
          <button onClick={submit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Board;
