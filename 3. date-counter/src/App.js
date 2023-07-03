import { useState } from "react";

function App() {
    return (
        <div>
            < Counter />
        </div>
    )
}


function Counter() {
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);


    function handleStepIncrement() {
        setStep(step => step + 1);
    }

    function handleStepDecrement() {
        setStep(step => step - 1);
    }


    function handleCountIncrement(step) {
        setCount(count => count + step);
    }

    function handleCountDecrement(step) {
        setCount(count => count - step);
    }

    return (
        <main>
            <section>
                <button onClick={handleStepDecrement}>&minus;</button>
                <span>Step: {step}</span>
                <button onClick={handleStepIncrement}>&plus;</button>
            </section>

            <section>
                <button>&minus;</button>
                <span>Count: {count}</span>
                <button>&plus;</button>
            </section>
        </main>
    )
}

export default App;
