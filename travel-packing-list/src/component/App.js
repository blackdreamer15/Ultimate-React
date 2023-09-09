import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";


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

export default App;
