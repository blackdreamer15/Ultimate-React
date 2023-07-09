function App() {
  return (

      <main className="app">
        <Logo />
      </main>
      <Stats />

  );
}

function Logo() {
  return (
    <h1>🏝️ Far Away 🧳</h1>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <p>
        <i>
          You have X items on your list, and you have already packed X (X%)
        </i>
      </p>
    </footer>
  );
}


export default App;
