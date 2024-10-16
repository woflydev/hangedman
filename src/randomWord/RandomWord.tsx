import "./RandomWord.css"

type RandomWordProps = {
    guessedLetters: string[]
    word: string
    revealWord?: boolean

}

const RandomWord = ({guessedLetters, word, revealWord = false}:RandomWordProps) => {

    return (
        <div className="hidden_word">
            {word.split("").map((letter, index) => (
                <span key={index}
                      className="letter">
                    <span style={{
                        visibility: guessedLetters.includes(letter) || revealWord
                            ? "visible"
                            : "hidden",
                        color: !guessedLetters.includes(letter) && revealWord ? "red" : "black"
                    }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
};

export default RandomWord;