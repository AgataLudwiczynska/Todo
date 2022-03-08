import React from "react";
import { useList } from "../hooks/list-hooks";

const Form = ({ text, setText }) => {
  const { addTodo } = useList();

  const inputTextHandler = (e) => {
    setText(e.target.value);
  };
  const addText = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form className="Form-wrapper">
      <input
        className="text"
        value={text}
        onChange={inputTextHandler}
        type="text"
      ></input>
      <button onClick={addText}>OK</button>
    </form>
  );
};

export default Form;
