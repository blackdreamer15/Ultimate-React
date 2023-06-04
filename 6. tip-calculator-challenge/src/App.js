import { useState } from "react";

export default function App() {
    return (
        <div>
            <BillInput />
            <SelectPercentage>How did you like the service?</SelectPercentage>
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

    return (
        <div>
            <label></label>
            <input type="text" value={percentage} onChange={e => setPercentage(Number(e.target.value))} />
        </div>
    );
}