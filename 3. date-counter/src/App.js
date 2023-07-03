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

    function handleStepIncrease() {
        setStep(step => step + 1);
    }

    function handleStepDecrease() {
        setStep(step => step - 1);
    }

    return (
        <div>
            <button onClick={handleStepDecrease}>&minus;</button>
            <span>Step: {step}</span>
            <button onClick={handleStepIncrease}>&plus;</button>
        </div>
    )
}

function Counter() {
    return (
        <div>
            <button>&minus;</button>
            <span>Count: {count}</span>
            <button>&plus;</button>
        </div>
    )
}

export default App;
