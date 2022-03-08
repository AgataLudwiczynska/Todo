import React, { useState, useEffect } from "react";
import "./App.css";
//Import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useList } from "./hooks/list-hooks";

function App() {
  //useState
  const [text, setText] = useState("");
  const { list, addSaveTodos } = useList();
  const keyLocalStorage = "list-todos";

  //useEffect
  //getLocalData
  useEffect(() => {
    if (localStorage.getItem(keyLocalStorage === null))
      localStorage.setItem(keyLocalStorage, JSON.stringify([]));
    else {
      addSaveTodos(keyLocalStorage);
    }
  }, []);

  //saveLocalData
  useEffect(() => {
    localStorage.setItem(keyLocalStorage, JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <header className="Header">
        <h1>Todo List</h1>
      </header>
      <Form text={text} setText={setText} />
      <TodoList />
    </div>
  );
}

export default App;
