import React from "react";
import Todo from "./Todo";

const TodoList = ({ list }) => {
  return (
    <div>
      {list.map((element) => (
        <Todo el={element} key={element.id} />
      ))}
    </div>
  );
};

export default TodoList;
