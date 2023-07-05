import { useState } from "react";

function App() {
    return (
        <main>
            < Counter />
        </main>
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

    function handleCountIncrement() {
        setCount(count => count + step);
    }

    function handleCountDecrement() {
        setCount(count => count - step);
    }


    let date = new Date();
    date.setDate(date.getDate() + count);


    return (
        <section>
            <section>
                <button onClick={handleStepDecrement}>&minus;</button>
                <span>Step: {step}</span>
                <button onClick={handleStepIncrement}>&plus;</button>
            </section>

            <section>
                <button onClick={handleCountDecrement}>&minus;</button>
                <span>Count: {count}</span>
                <button onClick={handleCountIncrement}>&plus;</button>
            </section>

            <p>
                {count > 0 ?
                    `${count} days from today is` : (
                        (count === 0) ?
                            "Today is" : `${Math.abs(count)} days ago was`
                    )
                }: {date.toDateString()}
            </p>
        </section>
    )
}

export default App;
