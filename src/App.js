import "./App.css";
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    return setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count}</button>;
}

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const listItems = products.map((product) => (
  <li
    key={product.id}
    style={{
      color: products.isFruit ? "magenta" : "darkgreen",
    }}
  >
    {product.title}
  </li>
));

function SharedStateButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

function ShareSameStateInTwoButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <SharedStateButton count={count} onClick={handleClick} />
      <SharedStateButton count={count} onClick={handleClick} />
    </div>
  );
}

function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  // function handleClick() {
  //   setValue("X");
  //   if (value == "X") {
  //     setValue("Y");
  //   } else {
  //     setValue("X");
  //   }
  // }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  let [status, setStatus] = useState(null);
  function handleClick(i) {
    const nexSquare = squares.slice();
    console.log(nexSquare)
    if (nexSquare[i]) {
      return
    }
    if (xIsNext) {
      nexSquare[i] = "X";
    } else {
      nexSquare[i] = "0";
    }
    setSquares(nexSquare);
    setXIsNext(!xIsNext);

    console.log('Board')
    const winner = calculateWinner(nexSquare);
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (!xIsNext ? 'X' : 'O');
    }
    setStatus(status)
    console.log('status', status)
  }

  return (
    <>
     <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <MyButton />
      <br />
      <br />
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <br />
      <br />
      {listItems}

      <br />
      <ShareSameStateInTwoButton />

      <h1>Tick tack toe</h1>
      <br />
      <Board />
    </div>
  );
}

export default App;
