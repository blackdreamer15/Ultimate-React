import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);
  const numOfItems = items.length;
  const numOfPackedItems = items.filter(item => item.packed).length;

  function handleAddItem(newItem) {
    setItems((items) => ([...items, newItem]));
  }

  function handleDeleteItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems(items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  return (
    <div className="app">
      <Logo />

      {/* <main> */}
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} />
      {/* </main> */}

      <Stats numOfItems={numOfItems} numOfPackedItems={numOfPackedItems} />
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

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false
    }

    onAddItem(newItem);

    setDescription("");
    setquantity(1);
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

function PackingList({ items, onDeleteItem, onUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input type="checkbox" value={item.description} onChange={() => onUpdateItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ numOfItems }) {
  return (
    <footer className="stats">
      <p>
        <i>
          You have {numOfItems} items on your list, and you have already packed X (X%)
        </i>
      </p>
    </footer>
  );
}


export default App;
