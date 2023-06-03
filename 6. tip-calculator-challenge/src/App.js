import { useState } from "react";

export default function App() {
    return (
        <BillInput />
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

function SelectPercentage() {
    return (
        <div>
            <label></label>
            <input type="text" />
        </div>
    );
}