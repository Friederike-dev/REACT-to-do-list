import React, { useState } from "react";

function App() {
  // Array for the to-do items
  const [items, setItems] = useState([]); 
  // to save the input value
  const [inputText, setInputText] = useState("");

  // to update the input value
  function handleChange(event) {
    const { value } = event.target;
    setInputText(value);
  }

  function updateList() {
    // add the new value to the array
    setItems((prevItems) => [...prevItems, inputText]);
    // reset the input field
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      <input
          onChange={handleChange}
          type="text"
          value={inputText} // Bind the input value
        />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
      <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


