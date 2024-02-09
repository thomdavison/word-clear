import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import { generate8LetterWords } from './Words';
import HowToPlay from './components/HowToPlay';


const isLoggingEnabled = false // set flag to false when deploying - probably a better way of setting this

function App() {
  const [letters, setLetters] = useState([])
  const [currentWord, setCurrentWord] = useState("")
  const [submittedWords, setSubmittedWords] = useState([])
  const [wordSet, setWordSet] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [gameState, setGameState] = useState("board")
  const [selectedLetters, setSelectedLetters] = useState([])

  let currentDate = new Date().toJSON().slice(0, 10);
  const rand = require('random-seed').create(currentDate);

  const handleTileClick = (index) => {

    if (selectedLetters.includes(index)) {
      return
    }

    if (currentWord.length === 8) {
      return
    }

    setCurrentWord(currentWord + letters[index])
    var sl = selectedLetters
    sl.push(index)
    setSelectedLetters(sl)

  };

  const updateGameState = (gameState) => {
    setGameState(gameState)
  }

  useEffect(() => {
    generate8LetterWords().then((w) => {
      let word1 = w.words[rand(w.words.length)]
      let word2 = w.words[rand(w.words.length)]
      log(word1)
      log(word2)

      let word = word1 + word2

      word1 = word1.toUpperCase()
      word2 = word2.toUpperCase()
      let shuffledWord = shuffleFunc(word)
      let words = [word1, word2]

      let pickedLetters = []

      for (var i = 0; i < shuffledWord.length; i++) {
        let letter = shuffledWord[i].toUpperCase()
        pickedLetters.push(letter)
      }

      setLetters(pickedLetters)
      setAnswers(words)
      setWordSet(w.words)
    });
  }, [])

  const shuffleFunc = str => [...str].sort(() => Math.random() - .5).join('');

  const submit = () => {
    if (currentWord.length !== 8) {
      log("current word length not 8")
      return
    }

    if (!answers.includes(currentWord)) {
      if (wordSet.includes(currentWord)) {
        let remainingLetters = pickedLetters.filter(x => x !== "")

        // if the submitted word is not in the answer list, check to see if the remaining letters can make another valid 8 letter word
        // only need to do this check if there is another word left. if there are no remaining letters, then the game is won
        if (remainingLetters.length === 8) {
          let isMatch = false
          let potentialMatch

          for (let i = 0; i < wordSet.length; i++) {
            let word = wordSet[i]
            for (let j = 0; j < remainingLetters.length; j++) {
              if (!word.includes(remainingLetters[j])) {
                break
              }

              // if on the last letter and this loop isn't broken then it must be a match
              if (j === remainingLetters.length - 1) {
                isMatch = true
              }
            }
            // if a match is found, then bomb out early
            if (isMatch) {
              potentialMatch = word
              log("potential word found: " + word)
              break
            }
          }

          if (!isMatch) {
            log("this is not the answer, but no other words can be submitted")
            return
          }
        }
      }
      else {
        log("word not in dictionary")
        return
      }
    }

    var pickedLetters = letters

    for (var i = 0; i < selectedLetters.length; i++) {
      pickedLetters[selectedLetters[i]] = ""
    }

    setLetters(pickedLetters)
    setSubmittedWords([...submittedWords, currentWord])
    setCurrentWord("")
    setSelectedLetters([])
  }

  const deleteFunc = () => {

    log(letters)
    if (currentWord === "") {
      return
    }

    var newletters = selectedLetters
    log(newletters)
    newletters.pop()
    log(newletters)
    setCurrentWord(currentWord.slice(0, -1))
    setSelectedLetters(newletters)
  }


  if (gameState === "" || gameState === "board") {
    return (
      <div className="App">
        <Board
          letters={letters}
          currentWord={currentWord}
          onTileClick={handleTileClick}
          submit={submit}
          submittedWords={submittedWords}
          deleteFunc={deleteFunc}
          updateGameState={updateGameState}
          selectedLetters={selectedLetters} />
      </div>
    );
  }
  if (gameState === "how-to-play") {
    return (
      <div className="App">
        <HowToPlay
          updateGameState={updateGameState} />
      </div>
    )
  }

}
export default App;


function log(message) {
  if (isLoggingEnabled) {
    console.log(message)
  }
}