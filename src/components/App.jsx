import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]); // Array for to-do items

  function updateList(inputText) {
    // adds a new item to the list, also with an isCompleted property
    setItems((prevItems) => [
      ...prevItems,
      { text: inputText, isCompleted: false }
    ]);
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item, index) => index !== id));
  }

  function toggleComplete(id) {
    // toggles the isCompleted property of the item
    setItems((prevItems) =>
      prevItems.map((item, index) =>
        index === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={updateList} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item.text}
              isCompleted={item.isCompleted}
              onChecked={deleteItem}
              onToggle={toggleComplete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;