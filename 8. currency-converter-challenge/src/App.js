import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("");
  const [quoteCurrency, setQuoteCurrency] = useState("");


  useEffect(
    function () {
      async function fetchConversion() {
        const res = await fetch(`https://api.frankfurter.app/latest?${amount}=100&from=${baseCurrency}&to=${quoteCurrency}`);

        const data = await res.json();
        console.log(data);
      }

      fetchConversion();

    }, []);


  return (
    <div className="App">
      <input
        type="text"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
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