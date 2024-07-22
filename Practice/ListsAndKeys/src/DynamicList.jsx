import { useState } from "react";

const DynamicList = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  }
  return (
    <div>
      <ul>
        {items.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
      <input type="text"
        value={newItem}
        onChange={(e) => { setNewItem(e.target.value) }}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}

export default DynamicList;
