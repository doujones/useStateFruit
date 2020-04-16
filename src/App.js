import React, { useState } from "react";
import "./styles.css";
import randomstring from "randomstring";

export default function App() {
  const [fruits, setFruits] = useState([
    { id: 1, type: "Banana" },
    { id: 2, type: "Mango" },
    { id: 3, type: "Lemon" }
  ]);

  const [newFruit, setNewFruit] = useState("");

  const addFruit = () => {
    setFruits([...fruits, { id: randomstring.generate(5), type: newFruit }]);
  };

  const removeFruit = id => {
    const filteredFruits = fruits.filter(fruit => fruit.id !== id);
    setFruits(filteredFruits);
  };

  return (
    <div className="App">
      <input type="text" onChange={e => setNewFruit(e.target.value)} />
      <button onClick={addFruit}>Add</button>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>
            {fruit.type}
            <button onClick={() => removeFruit(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
