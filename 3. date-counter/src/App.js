import { useState } from "react";

function App() {
    return (
        < Steps />
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

export default App;
