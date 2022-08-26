import { useState } from "react";
import "./App.css";
import Form from "./components/forma/Form";
import TitleList from "./components/titleFromForm/TitleList";

function App() {
  const [list, setList] = useState([]);


  const addTaskHandler = (task) => {
    setList([task, ...list]);
  };

  return (
    <div className="App">
      <Form addTaskHandler={addTaskHandler} />
      <TitleList taskList={list} setList={setList} />
    </div>
  );
}

export default App;
