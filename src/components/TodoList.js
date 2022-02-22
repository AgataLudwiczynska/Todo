import React from "react";
import Todo from "./Todo";

const TodoList = ({ list, setList }) => {
  return (
    <div>
      {list.map((element) => (
        <Todo el={element} key={element.id} setList={setList} list={list} />
      ))}
    </div>
  );
};

export default TodoList;
