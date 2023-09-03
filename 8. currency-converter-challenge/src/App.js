import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(Number(e.target.value))}
      />

      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>OUTPUT</p>
    </div>
  );
}