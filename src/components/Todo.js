import React from "react";
import { FaTrashAlt, FaCheck, FaExclamation } from "react-icons/fa";

const Todo = ({ el, setList, list }) => {
  const deleteHandler = () => {
    setList(list.filter((todo) => todo.id !== el.id));
  };

  const checkHandler = () => {
    setList(
      list.map((todo) => {
        if (todo.id === el.id) {
          return { ...el, complete: !el.complete };
        }
        return todo;
      })
    );
  };

  const importantHandler = () => {
    setList(
      list
        .map((todo) => {
          if (todo.id === el.id) {
            return { ...el, important: !el.important };
          }
          return todo;
        })
        .sort((a, b) => {
          return b.important - a.important;
        })
    );
  };

  return (
    <div>
      <p>{el.name}</p>
      <button onClick={checkHandler}>
        <FaCheck />
      </button>
      <button onClick={importantHandler}>
        <FaExclamation />
      </button>
      <button onClick={deleteHandler}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Todo;
