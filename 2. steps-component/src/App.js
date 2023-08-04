import { useState } from "react";


const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];


export default function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);


    function handlePrevious() {
        if (step > 1) setStep(s => s - 1);
    }

    function handleNext() {
        if (step < 3) setStep(s => s + 1);
    }


    return (
        <>
            <button
                className="close"
                onClick={() => setIsOpen(open => !open)}
            >&times;</button>

            {
                isOpen &&
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    <p className="message">
                        {`Step ${step}: ${messages[step - 1]}`}
                    </p>

                    <div className="buttons">
                        <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
                            👈 Previous
                        </Button>

                        <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
                            Next 👉
                        </Button>
                    </div>
                </div >
            }
        </>

    );
}

function Button({ bgColor, color, onClick, children }) {
    return (
        <button style={{ backgroundColor: bgColor, color: color }} onClick={onClick}>
            {children}
        </button>
    );
}