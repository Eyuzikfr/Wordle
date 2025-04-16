import "/src/css/Main.css";

export default function Main() {
  const word = "REACT";
  const guessedWords = [
    [
      {
        letter: "R",
        isInWord: true,
        isInPosition: true,
      },
      {
        letter: "O",
        isInWord: false,
        isInPosition: false,
      },
      {
        letter: "G",
        isInWord: false,
        isInPosition: false,
      },
      {
        letter: "E",
        isInWord: true,
        isInPosition: false,
      },
      {
        letter: "R",
        isInWord: false,
        isInPosition: false,
      },
    ],
  ];

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  alphabets.push("Enter", "Delete");

  const arrayElements = guessedWords.map((word, index) =>
    word.map((element, index) => {
      return (
        <div
          key={index}
          className="letter-tile"
          style={{
            backgroundColor: element.isInWord
              ? element.isInPosition
                ? "#60AF33"
                : "#D4C32A"
              : "#E2E2E2",
          }}
        >
          {element.letter}
        </div>
      );
    })
  );

  const buttonClick = (event) => {
    console.log(event.target.value);
  };

  const keyboardElements = alphabets.map((letter, index) => {
    if (index === 26) {
      return (
        <button
          className="keyboard-tile enter-key"
          key={index}
          onClick={buttonClick}
          value={letter}
        >
          {letter}
        </button>
      );
    } else if (index === 27) {
      return (
        <button
          className="keyboard-tile delete-key"
          key={index}
          onClick={buttonClick}
          value={letter}
        >
          {letter}
        </button>
      );
    } else {
      return (
        <button
          className="keyboard-tile"
          key={index}
          onClick={buttonClick}
          value={letter}
        >
          {letter}
        </button>
      );
    }
  });

  return (
    <main>
      <div className="main-container">
        <div className="word-container">{arrayElements}</div>
        <div className="word-container">{arrayElements}</div>
        <div className="word-container">{arrayElements}</div>
        <div className="word-container">{arrayElements}</div>
        <div className="word-container">{arrayElements}</div>
      </div>

      <div className="keyboard">{keyboardElements}</div>
    </main>
  );
}
