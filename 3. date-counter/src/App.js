import { useState } from "react";

function App() {
    return (
        <div>

        </div>
    )
}

function Steps() {
    const [step, setStep] = useState(0);

    function handleStepIncrease() {
        setStep(step => step + 1);
    }

    function handleStepDecrease() {
        setStep(step => step + 1);
    }

    return (
        <div>
            <button onClick={handleStepDecrease}>&minus;</button>
            <p>Step: {step}</p>
            <button onClick={handleStepIncrease}>&plus;</button>
        </div>
    )
}

export default App;
