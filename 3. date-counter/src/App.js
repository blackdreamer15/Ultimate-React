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

    }

    return (
        <div>
            <button>&minus;</button>
            <p>Step: {step}</p>
            <button>&plus;</button>
        </div>
    )
}

export default App;
