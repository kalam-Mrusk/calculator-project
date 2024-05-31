import React from "react";
function Buttons({
  clickHandeler,
  setInput,
  evaluteExpression,
  removeLastElement,
}) {
  return (
    <div className="buttonsContainer">
      <div>
        <button onClick={() => setInput("")}>C</button>
        <button onClick={() => clickHandeler("%")}>%</button>
        <button onClick={() => removeLastElement()}>CC</button>
        <button onClick={() => clickHandeler("/")}>/</button>
      </div>
      <div>
        <button onClick={() => clickHandeler("7")}>7</button>
        <button onClick={() => clickHandeler("8")}>8</button>
        <button onClick={() => clickHandeler("9")}>9</button>
        <button onClick={() => clickHandeler("*")}>x</button>
      </div>
      <div>
        <button onClick={() => clickHandeler("4")}>4</button>
        <button onClick={() => clickHandeler("5")}>5</button>
        <button onClick={() => clickHandeler("6")}>6</button>
        <button onClick={() => clickHandeler("-")}>-</button>
      </div>
      <div>
        <button onClick={() => clickHandeler("1")}>1</button>
        <button onClick={() => clickHandeler("2")}>2</button>
        <button onClick={() => clickHandeler("3")}>3</button>
        <button onClick={() => clickHandeler("+")}>+</button>
      </div>
      <div>
        <button onClick={() => clickHandeler("00")}>00</button>
        <button onClick={() => clickHandeler("0")}>0</button>
        <button onClick={() => clickHandeler(".")}>.</button>
        <button onClick={() => evaluteExpression()}>=</button>
      </div>
    </div>
  );
}

export default Buttons;
