import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((items) => ([...items, newItem]));
  }

  function handleDeleteItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems(items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  function handleClearList() {
    if (!items.length) return;

    const isConfirmed = window.confirm("Are you sure you want to delete all items?");
    if (isConfirmed) setItems([]);
    setTimeout(() => {
      alert("All items have been deleted.");
    }, 100);
  }

  return (
    <div className="app">
      <Logo />

      {/* <main> */}
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onClearList={handleClearList} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} />
      {/* </main> */}

      <Stats items={items} />
    </div>
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

function PackingList({ items, onClearList, onDeleteItem, onUpdateItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));



  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />
        ))}
      </ul>

      <div className="actions">
        <select onChange={e => setSortBy(e.target.value)}>
          <option value="input">
            sort by input order
          </option>
          <option value="description">
            sort by description
          </option>
          <option value="packed">
            sort by packed status
          </option>
        </select >
        <button onClick={onClearList}>Clear list</button>
      </div >
    </div >
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

function Stats({ items }) {
  const numOfItems = items.length;
  const numOfPackedItems = items.filter(item => item.packed).length;
  const percentage = Math.round((numOfPackedItems / numOfItems) * 100);

  return (
    <footer className="stats">
      <p>
        {numOfItems ? (
          <i>
            {percentage === 100 ?
              "You got everything! Ready to go ✈️" :
              `You have ${numOfItems} items on your list, and you have already packed ${numOfPackedItems} (${percentage}%)`}
          </i>
        ) :
          "Start adding some items to your packing list 🚀"}
      </p>
    </footer>
  );
}


export default App;
