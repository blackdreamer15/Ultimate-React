import { useState } from "react";

function App() {
    return (
        <main>
            < StepAndCount />
        </main>
    )
}

function StepAndCount() {
    const [step, setStep] = useState(0);

    // function handleStepIncrement(e) {
    //     setStep(step => step + 1);
    // }

    // function handleStepDecrement(e) {
    //     setStep(step => step - 1);
    // }

    return (
        <>
            <section>
                {/* <button onClick={handleStepDecrement}>-</button>
                <span>Step: {step}</span>
                <button onClick={handleStepIncrement}>+</button> */}
                <input type="range" min={0} max={10} value={step}
                    onChange={e => setStep(Number(e.target.value))}
                />
                <span> Step: {step}</span>
            </section>

            < Counter step={step} />
        </>
    );
}

function Counter({ step }) {
    const [count, setCount] = useState(0);

    function handleCountIncrement() {
        setCount(count => count + step);
    }

    function handleCountDecrement() {
        setCount(count => count - step);
    }

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    let date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <>
            <section>
                <button onClick={handleCountDecrement}>-</button>

                {/* <span>Count: {count}</span> */}
                <input type="text" value={count}
                    onChange={e => setCount(Number(e.target.value))}
                />

                <button onClick={handleCountIncrement}>+</button>
            </section>

            <p>
                {count > 0 ?
                    `${count} days from today is` : (
                        (count === 0) ?
                            "Today is" : `${Math.abs(count)} days ago was`
                    )
                }: {date.toDateString()}
            </p>

            {(count !== 0 || step !== 0) ?
                <button type="reset" onClick={handleReset}>Reset</button>
                : ""
            }

        </>
    );
}

export default App;
