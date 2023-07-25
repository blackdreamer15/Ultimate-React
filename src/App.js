import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
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
  const [description, setDescription] = useState("");
  const [quantity, setquantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false
    }

    handleAddItem(newItem);

    setDescription("");
    setquantity(1);
  }


  function handleAddItem(newItem) {
    setItems((items) => ([...items, newItem]));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>
        What do you need for your trip🤩?
      </h3>

      <select value={quantity} onChange={(e) => (
        setquantity(Number(e.target.value))
      )}>
        {Array.from({ length: 20 }, (_, curr) => (curr + 1)).map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>

      <input type="text" placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }} />

      <button className="button">Add</button>
    </form >
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
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
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
