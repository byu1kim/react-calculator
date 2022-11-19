import { calculatorButtons } from "../calculator-base-button-data";
import "../styles/Buttons.css";
import { useState } from "react";

const Buttons = ({ receivingFunction }) => {
  const [mathStr, setMathStr] = useState("");
  const [result, setResult] = useState();

  // This part!
  const safeEval = (str) => {
    return new Function("return " + str)();
  };

  const calculation = (btn) => {
    if (btn == "=" && mathStr != "") {
      const resultStr = safeEval(mathStr);
      receivingFunction(resultStr);
      setMathStr("");
      console.log(resultStr);
    } else if (btn == "All Clear") {
      receivingFunction();
      setMathStr("");
      // This Part!
    } else if (btn == "Clear") {
      console.log("Clear clicked!"); // erase the last string
      receivingFunction(mathStr);
      setMathStr(mathStr);
    } else {
      const currentStr = mathStr + btn;
      setMathStr(currentStr);
      receivingFunction(currentStr);

      // console.log("btn: ", btn);
      // console.log("currentQuery: ", currentStr);
      // console.log("query: ", mathStr);
    }
  };

  const displayBtn = (num) => {
    receivingFunction(num);
  };

  return (
    <>
      <h1>BTNS</h1>
      <div className="container">
        {calculatorButtons.map((btn, i) => (
          <div key={i} className="btn" onClick={() => calculation(btn.value)}>
            {btn.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default Buttons;
