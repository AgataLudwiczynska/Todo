import React from "react";
import { FaTrashAlt, FaCheck, FaExclamation } from "react-icons/fa";
import { useList } from "../hooks/list-hooks";

const Todo = ({ el }) => {
  const { deleteTodo, checkTodo, importantTodo } = useList();
  return (
    <div
      className={`text Todo-wrapper ${
        el.important === true ? "important" : ""
      } ${el.complete === true ? "complete" : ""}`}
    >
      <p className="Todo-name">{el.name}</p>
      <button className="Todo-button" onClick={() => checkTodo(el.id)}>
        <FaCheck />
      </button>
      <button className="Todo-button" onClick={() => importantTodo(el.id)}>
        <FaExclamation />
      </button>
      <button className="Todo-button" onClick={() => deleteTodo(el.id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Todo;
