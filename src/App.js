const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 1, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />

      {/* <main> */}
      <Form />
      <PackingList />
      {/* </main> */}

      <Stats />
    </div>
  );
}

function Logo() {
  return (
    // <header>
    <h1>🏝️ Far Away 🧳</h1>
    // </header>
  );
}

function Form() {
  return (
    <form className="add-form">
      <h3>
        What do you need for your trip🤩?
      </h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input type="text" placeholder="Item..." />
      <button className="button">Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
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
