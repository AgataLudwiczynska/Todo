import React from "react";
import { useInput } from "../hooks/input-hooks";
import { useList } from "../hooks/list-hooks";

const Form = () => {
  const [text, resetText] = useInput("");
  const { addTodo } = useList();

  const addText = (e) => {
    e.preventDefault();
    addTodo(text.value);
    resetText();
  };

  return (
    <form className="Form-wrapper">
      <input
        className="text"
        value={text.value}
        onChange={text.onChange}
        type="text"
      ></input>
      <button onClick={addText}>OK</button>
    </form>
  );
};

export default Form;
