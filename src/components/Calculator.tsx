"use client";
import { useState } from "react";
import "@/styles/calculator.css";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecond) {
      setDisplay(digit);
      setWaitingForSecond(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForSecond) {
      setDisplay("0.");
      setWaitingForSecond(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setOperator(null);
    setFirstValue(null);
    setWaitingForSecond(false);
  };

  const toggleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  const percent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator && !waitingForSecond) {
      const currentValue = firstValue || 0;
      let newValue = currentValue;

      switch (operator) {
        case "+":
          newValue = currentValue + inputValue;
          break;
        case "-":
          newValue = currentValue - inputValue;
          break;
        case "*":
          newValue = currentValue * inputValue;
          break;
        case "/":
          newValue = currentValue / inputValue;
          break;
      }
      setFirstValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForSecond(true);
    setOperator(nextOperator);
  };

  const handleEquals = () => {
    if (operator) {
      performOperation(operator);
      setOperator(null);
    }
  };

  return (
    <div className="calculator">
      <div className="display" data-testid="display">{display}</div>
      <div className="buttons">
        <button className="function" onClick={clear}>AC</button>
        <button className="function" onClick={toggleSign}>±</button>
        <button className="function" onClick={percent}>%</button>
        <button className="operator" onClick={() => performOperation("/")}>÷</button>

        <button onClick={() => inputDigit("7")}>7</button>
        <button onClick={() => inputDigit("8")}>8</button>
        <button onClick={() => inputDigit("9")}>9</button>
        <button className="operator" onClick={() => performOperation("*")}>×</button>

        <button onClick={() => inputDigit("4")}>4</button>
        <button onClick={() => inputDigit("5")}>5</button>
        <button onClick={() => inputDigit("6")}>6</button>
        <button className="operator" onClick={() => performOperation("-")}>−</button>

        <button onClick={() => inputDigit("1")}>1</button>
        <button onClick={() => inputDigit("2")}>2</button>
        <button onClick={() => inputDigit("3")}>3</button>
        <button className="operator" onClick={() => performOperation("+")}>+</button>

        <button className="zero" onClick={() => inputDigit("0")}>0</button>
        <button onClick={inputDot}>.</button>
        <button className="operator" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}

