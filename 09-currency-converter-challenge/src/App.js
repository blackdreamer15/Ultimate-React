import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [quoteCurrency, setQuoteCurrency] = useState("USD");
  const [conversion, setConversion] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchConversion() {
        try {
          setIsLoading(true);
          const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${baseCurrency}&to=${quoteCurrency}`);

          const data = await res.json();
          setConversion(data.rates[quoteCurrency]);
        }
        catch (err) {
          console.error(err.message);
        }
        finally {
          setIsLoading(false);
        }
      }

      if (quoteCurrency === baseCurrency) {
        return setConversion(amount);
      }

      fetchConversion();

    }, [amount, baseCurrency, quoteCurrency]);


  return (
    <div className="App">
      <input
        type="text"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />

      <select value={baseCurrency}
        onChange={e => setBaseCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select value={quoteCurrency}
        onChange={e => setQuoteCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>{quoteCurrency} {conversion}</p>
    </div>
  );
}