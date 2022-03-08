import React, { createContext, useContext, useState } from "react";
import nextId from "react-id-generator";

const ListContext = createContext();
export const useList = () => useContext(ListContext);

const ListProvider = ({ children }) => {
  const htmlId = nextId();
  const [list, setList] = useState([]);

  //available functions
  const addTodo = (name) => {
    setList([
      ...list,
      {
        name: name,
        complete: false,
        important: false,
        id: htmlId,
      },
    ]);
  };
  const checkTodo = (id) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };
  const importantTodo = (id) => {
    setList(
      list
        .map((todo) =>
          todo.id === id ? { ...todo, important: !todo.important } : todo
        )
        .sort((a, b) => {
          return b.important - a.important;
        })
    );
  };
  const deleteTodo = (id) => {
    setList(list.filter((el) => el.id !== id));
  };
  const addSaveTodos = (key) => {
    setList(JSON.parse(localStorage.getItem(key)));
  };

  return (
    <ListContext.Provider
      value={{
        list,
        addTodo,
        checkTodo,
        importantTodo,
        deleteTodo,
        addSaveTodos,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
