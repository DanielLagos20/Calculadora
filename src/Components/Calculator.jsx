import { evaluate } from "mathjs";
import "../assets/styles/Calculator.css";
import Screen from "./Screen";
import Button from "./Button";
import ButtonClear from "./ButtonClear";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };
  const clearInput = () => {
    setInput("");
  };
  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("error de operacion");
    }
  };
  return (
    <>
      <div className="calculator">
        <div className="content-screen">
          <Screen input={input} />
        </div>
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={result}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear handleClear={clearInput} />
        </div>
      </div>
    </>
  );
}
