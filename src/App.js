import { useEffect, useState } from "react";

/* export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => ++c);
  }
  useEffect(() => getAdvice, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>CLICK ME </button>
      <p>
        Uh have taken advice <strong>{count}</strong> times.
      </p>
    </div>
  );
}
 */

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const stepNext = () => {
    setStep((s) => s + 1);
  };
  const stepPrev = () => {
    if (step > 0) setStep((s) => s - 1);
  };
  const countNext = () => {
    setCount((c) => c + step);
    setCount((c) => c + 1);
  };
  const countPrev = () => {
    setCount((c) => c - step);
    setCount((c) => c - 1);
  };
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div style={{ textAlign: "center" }}>
      <>
        <button onClick={stepPrev}> - </button>
        <span>Step:{step}</span>
        <button onClick={stepNext}> + </button>
      </>
      <p></p>
      <button onClick={countPrev}> - </button>
      <span>Count:{count}</span>
      <button onClick={countNext}> + </button>
      <p>
        {count === 0
          ? "Today is : "
          : count > 0
          ? ` ${count} ${count === 1 ? "day" : "days"} from today is : `
          : `${Math.abs(count)}  days ago was : `}
        {date.toDateString()}
      </p>
    </div>
  );
}
