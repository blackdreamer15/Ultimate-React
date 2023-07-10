function App() {
  return (
    <>
      <Logo />

      <main className="app">
        <Form />
        <PackingList />
      </main>

      <Stats />
    </>
  );
}

function Logo() {
  return (
    <header>
      <h1>🏝️ Far Away 🧳</h1>
    </header>
  );
}

function Form() {
  return (
    <div className="add-form">

    </div>
  );
}

function PackingList() {
  return (
    <div className="list"></div>
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
