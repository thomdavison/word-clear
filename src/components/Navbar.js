import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faClockRotateLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Navbar({ id, updateGameState }) {
  switch (id) {
    case 0:
      return (
        <div className="button-row-header">
          <button
            id="header-button"
            onClick={() => updateGameState("how-to-play")}
          >
            <FontAwesomeIcon icon={faQuestion} />
          </button>
          <button
            id="header-button"
            onClick={() => updateGameState("yesterdays-answer")}
          >
            <FontAwesomeIcon icon={faClockRotateLeft} />
          </button>
        </div>
      );
    case 1:
      return (
        <div className="button-row-header">
          <button id="header-button" onClick={() => updateGameState("")}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <button
            id="header-button"
            onClick={() => updateGameState("yesterdays-answer")}
          >
            <FontAwesomeIcon icon={faClockRotateLeft} />
          </button>
        </div>
      );
    case 2:
      return (
        <div className="button-row-header">
          <button
            id="header-button"
            onClick={() => updateGameState("how-to-play")}
          >
            <FontAwesomeIcon icon={faQuestion} />
          </button>
          <button id="header-button" onClick={() => updateGameState("")}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      );
  }
}

export default Navbar;
