import { useState } from "react";

function App() {
    return (
        <div>
            < Steps />
            < Counter />
        </div>
    )
}

function Steps() {
    const [step, setStep] = useState(0);

    function handleStepIncrement() {
        setStep(step => step + 1);
    }

    function handleStepDecrement() {
        setStep(step => step - 1);
    }

    return (
        <div>
            <button onClick={handleStepDecrement}>&minus;</button>
            <span>Step: {step}</span>
            <button onClick={handleStepIncrement}>&plus;</button>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0);

    function handleCountIncrement() {

    }

    function handleCountDecrement() {

    }

    return (
        <div>
            <button>&minus;</button>
            <span>Count: {count}</span>
            <button>&plus;</button>
        </div>
    )
}

export default App;
