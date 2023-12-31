import { useState } from "react";

export default function App() {
    return (
        <TipCalculator />
    );
}

function TipCalculator() {
    const [bill, setBill] = useState("");
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);

    function handleReset() {
        setBill("");
        setPercentage1(0);
        setPercentage2(0);
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />

            <SelectPercentage
                percentage={percentage1}
                onSetPercentage={setPercentage1}
            >
                How did you like the service?
            </SelectPercentage>

            <SelectPercentage
                percentage={percentage2}
                onSetPercentage={setPercentage2}
            >
                How did your friend like the service?
            </SelectPercentage>

            {(bill > 0 || percentage1 > 0 || percentage2 > 0) &&
                <>
                    <Output bill={bill} tip1={percentage1} tip2={percentage2} />

                    <Reset onReset={handleReset} />
                </>
            }
        </div>
    );
}

function BillInput({ bill, onSetBill }) {

    return (
        <div>
            <label>How much was the bill?</label>

            <input type="text" value={bill}
                placeholder="Bill value"
                onChange={e => onSetBill(Number(e.target.value))}
            />
        </div>
    );
}

function SelectPercentage({ percentage, onSetPercentage, children }) {

    return (
        <div>
            <label>{children}</label>

            <select value={percentage} onChange={e => onSetPercentage(Number(e.target.value))}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, tip1, tip2 }) {
    const tip = (tip1 + tip2) / 2;

    return (
        <h2>You pay ${bill + tip} (${bill} + ${tip} tip)</h2>
    );
}

function Reset({ onReset }) {
    return (
        <button type="reset" onClick={onReset}>Reset</button>
    );
}