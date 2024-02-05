import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import { generate8LetterWords } from './Words';

function App() {

  const [letters, setLetters] = useState([])
  const [currentWord, setCurrentWord] = useState("")
  const [submittedWords, setSubmittedWords] = useState([])
  const [wordSet, setWordSet] = useState([]);
  const [gameState, setGameState] = useState("board")
  const [selectedLetters, setSelectedLetters] = useState([])

  let currentDate = new Date().toJSON().slice(0, 10);
  const rand = require('random-seed').create(currentDate);

  const handleTileClick = (index) => {

    if (selectedLetters.includes(index)) {
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
      console.log(word1)
      console.log(word2)

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
      setWordSet(words)
    });
  }, [])

  const shuffleFunc = str => [...str].sort(() => Math.random() - .5).join('');

  const submit = () => {
    if (currentWord.length !== 8) {
      console.log("current word length not 8")
      return
    }

    if (!wordSet.includes(currentWord)) {
      console.log("word not in dictionary")
      return
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

    if (currentWord === "") {
      return
    }

    var newletters = selectedLetters
    newletters.pop()
    setCurrentWord(currentWord.slice(0, -1))
    setSelectedLetters(newletters)
  }

  const shuffle = () => {

    var centerLetter = letters[4]

    let shuffled = letters
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    setLetters(shuffled)
  }


  if (gameState === "" || gameState === "board") {
    return (
      <div className="App">
        <Board
          letters={letters}
          currentWord={currentWord}
          onTileClick={handleTileClick}
          shuffle={shuffle}
          submit={submit}
          submittedWords={submittedWords}
          deleteFunc={deleteFunc}
          updateGameState={updateGameState}
          selectedLetters={selectedLetters} />
      </div>
    );
  }

}
export default App;
