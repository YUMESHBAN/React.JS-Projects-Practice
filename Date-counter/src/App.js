import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="steps">
      <div className="buttons">
        <button
          style={{ backgroundColor: "skyblue", color: "#fff" }}
          on
          onClick={() => setStep((c) => (c != 0 ? c - 1 : 0))}
        >
          -
        </button>
        <span>Step:{step}</span>
        <button
          style={{ backgroundColor: "skyblue", color: "#fff" }}
          on
          onClick={() => setStep((c) => c + 1)}
        >
          +
        </button>
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "skyblue", color: "#fff" }}
          on
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <span>Count:{count}</span>
        <button
          style={{ backgroundColor: "skyblue", color: "#fff" }}
          on
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
