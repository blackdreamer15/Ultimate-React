import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";

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
