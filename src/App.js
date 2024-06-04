import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import { generate8LetterWords } from './Words';
import HowToPlay from './components/HowToPlay';
import Win from './components/Win';


const isLoggingEnabled = false // set flag to false when deploying - theres probably a better way of setting this

function App() {
  const [letters, setLetters] = useState([])
  const [currentWord, setCurrentWord] = useState("")
  const [submittedWords, setSubmittedWords] = useState([])
  const [wordSet, setWordSet] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [gameState, setGameState] = useState("board")
  const [selectedLetters, setSelectedLetters] = useState([])
  const [hasWon, setHasWon] = useState(false)
  const [submittedInvalidWord, setSubmittedInvalidWord] = useState(false)

  let currentDate = new Date().toJSON().slice(0, 10);
  const rand = require('random-seed').create(currentDate);

  const handleTileClick = (letter) => {
    if (selectedLetters.includes(letter.id)) {
      setSubmittedInvalidWord(!submittedInvalidWord)
      return
    }

    if (currentWord.length === 8) {
      setSubmittedInvalidWord(!submittedInvalidWord)
      return
    }

    letter.isSelected = true

    setCurrentWord(currentWord + letter.value)
    selectedLetters.push(letter.id)
    setSelectedLetters(selectedLetters)

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

      let generatedLetters = []

      for (var i = 0; i < shuffledWord.length; i++) {
        let letter = { "id": crypto.randomUUID(), "value": shuffledWord[i].toUpperCase(), "isSelected": false }
        generatedLetters.push(letter)
      }

      setLetters(generatedLetters)
      setAnswers(words)
      setWordSet(w.words)
    });
  }, [])

  const shuffleFunc = str => [...str].sort(() => Math.random() - .5).join('');

  const shuffle = () => {

    let shuffled = letters
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)


    setLetters(shuffled)
  }

  const submit = () => {
    if (currentWord.length !== 8) {
      log("current word length not 8")
      setSubmittedInvalidWord(!submittedInvalidWord)
      return
    }

    if (!answers.includes(currentWord)) {
      if (wordSet.includes(currentWord)) {
        let remainingLetters = letters.filter(x => !x.isSelected)

        // if the submitted word is not in the answer list, check to see if the remaining letters can make another valid 8 letter word
        // only need to do this check if there is another word left. if there are no remaining letters, then the game is won
        if (remainingLetters.length === 8) {
          let isMatch = false

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
              log("potential word found: " + word)
              break
            }
          }

          if (!isMatch) {
            log("this is not the answer, but no other words can be submitted")
            setSubmittedInvalidWord(!submittedInvalidWord)
            return
          }
        }
      }
      else {
        log("word not in dictionary")
        setSubmittedInvalidWord(!submittedInvalidWord)
        return
      }
    }

    var newLetters = letters.filter(x => !x.isSelected)
    if (newLetters <= 0) {
      setHasWon(true)
    }

    setLetters(newLetters)
    setSubmittedWords([...submittedWords, currentWord])
    setCurrentWord("")
    setSelectedLetters([])
  }

  const deleteFunc = () => {
    if (currentWord === "") {
      return
    }

    var id = selectedLetters[selectedLetters.length - 1]
    var letter = letters.find(x => x.id === id)
    letter.isSelected = false

    var newletters = selectedLetters
    newletters.pop()
    setCurrentWord(currentWord.slice(0, -1))
    setSelectedLetters(newletters)
  }

  if (hasWon) {
    return (
      <div className="App">
        <Win submittedWords={submittedWords} />
      </div>
    );
  }
  if (gameState !== "how-to-play") {
    return (
      <div className="App">
        <Board
          letters={letters}
          currentWord={currentWord}
          onTileClick={handleTileClick}
          submit={submit}
          deleteFunc={deleteFunc}
          updateGameState={updateGameState}
          shuffleFunc={shuffle}
          submittedInvalidWord={submittedInvalidWord} />
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