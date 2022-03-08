import React from "react";
import Todo from "./Todo";
import { useList } from "../hooks/list-hooks";

const TodoList = () => {
  const { list } = useList();
  return (
    <div className="TodoList-wrapper">
      {list.map((element) => (
        <Todo key={element.id} el={element} />
      ))}
    </div>
  );
};

export default TodoList;
