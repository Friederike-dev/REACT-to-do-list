import React, { useState } from "react";

function InputArea(props) {

    // to save the input value
  const [inputText, setInputText] = useState("");

  // to update the input value
  function handleChange(event) {
    const { value } = event.target;
    setInputText(value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
