import React from "react";
import nextId from "react-id-generator";

const Form = ({ text, setText, list, setList }) => {
  const htmlId = nextId();

  const inputTextHandler = (e) => {
    setText(e.target.value);
  };
  const addText = (e) => {
    e.preventDefault();
    setList([
      ...list,
      { name: text, complete: false, important: false, id: htmlId },
    ]);
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
