import eightLetterWords from "./data/8_letter_words.txt";

export const generate8LetterWords = async () => {
    let words = []


    await fetch(eightLetterWords)
        .then((response) => response.text())
        .then((result) => {
            words = result.split("\n");

        });
    return { words };
}; 