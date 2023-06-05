import { useState } from "react";

export default function App() {
    return (
        <TipCalculator />
    );
}

function TipCalculator() {
    return (
        <div>
            <BillInput />
            <SelectPercentage>
                How did you like the service?
            </SelectPercentage>
            <SelectPercentage>
                How did your friend like the service?
            </SelectPercentage>
        </div>
    );
}

function BillInput() {
    const [bill, setBill] = useState(0);

    return (
        <div>
            <label>How much was the bill?</label>
            <input type="text" value={bill} onChange={e => setBill(Number(e.target.value))} />
        </div>
    );
}

function SelectPercentage({ children }) {
    const [percentage, setPercentage] = useState(0);
    const [tip, setTip] = useState(0);

    return (
        <div>
            <label>{children}</label>

            <select value={percentage} onChange={e => setPercentage(Number(e.target.value))}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, tip }) {
    return (
        <h1>You pay ${ } (${ } + ${ } tip)</h1>
    );
}