import "/src/css/Main.css";

export default function Main() {
  const array = ["R", "O", "G", "E", "R"];
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  alphabets.push("Enter", "Delete");

  const arrayElements = array.map((letter, index) => {
    return (
      <div className="letter-tile" key={index}>
        {letter}
      </div>
    );
  });

  const keyboardElements = alphabets.map((letter, index) => {
    if (index === 26) {
      return <div className="keyboard-tile enter-key">{letter}</div>;
    } else if (index === 27) {
      return <div className="keyboard-tile delete-key">{letter}</div>;
    } else {
      return (
        <button className="keyboard-tile" key={index}>
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
