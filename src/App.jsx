import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 10) {
      document.title = "Kelompok 17";
    } else {
      document.title = "Aplikasi Counter";
    }
  }, [counter]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <h1>Kelompok 17 RPLBK</h1>
      <p>Counter: {counter}</p>
      {counter === 10 ? <p>Ini tampilan yang muncul bro</p> : null}
      <button onClick={incrementCounter}>Tambah</button>
      <button onClick={decrementCounter}>Kurang</button>
    </div>
  );
}

export default App;
