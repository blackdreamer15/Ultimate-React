import { useState } from "react";

export default function App() {
    return (
        <BillInput />
    );
}

function BillInput() {
    const [bill, setBill] = useState();

    return (
        <div>
            <label>How much was the bill?</label>
            <input type="text" />
        </div>
    );
}