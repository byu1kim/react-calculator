import "../styles/App.css";
import Buttons from "./Buttons";
import Display from "./Display";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [btn, setBtn] = useState();
  const btnReceiving = (btn) => {
    setBtn(btn);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <Display btn={btn} />
        <Buttons receivingFunction={btnReceiving} />
      </header>
    </div>
  );
}

export default App;
