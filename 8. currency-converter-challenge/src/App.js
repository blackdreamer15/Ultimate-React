import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("");
  const [quoteCurrency, setQuoteCurrency] = useState("");


  useEffect(
    function () {
      async function fetchConversion() {

      }


    }, []);


  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(Number(e.target.value))}
      />

      <select value={baseCurrency}
        onChange={e => setBaseCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select value={quoteCurrency}
        onChange={e => setQuoteCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>OUTPUT</p>
    </div>
  );
}