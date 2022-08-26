import { useState } from "react";
import "./Form.css";

let counter = 0;

function Form({ addTaskHandler }) {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length === 0) {
      return;
    }

    const obj = {
      id: counter++,
      task: inputValue,
      date: new Date().toLocaleDateString(),
    };
    addTaskHandler(obj);
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler} className="forma-block">
      <input
        type="text"
        placeholder="text"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default Form;
