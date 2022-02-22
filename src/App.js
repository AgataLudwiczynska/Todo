import React, { useState } from "react";
import "./App.css";
//Import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //useState
  const [text, setText] = useState();
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <header className="Header">
        <h1>Todo List</h1>
      </header>
      <Form text={text} setText={setText} list={list} setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}

export default App;
