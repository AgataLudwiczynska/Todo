import React from "react";
import { FaTrashAlt, FaCheck, FaExclamation } from "react-icons/fa";

const Todo = ({ el }) => {
  return (
    <div>
      <p>{el.name}</p>
      <button>
        <FaCheck />
      </button>
      <button>
        <FaExclamation />
      </button>
      <button>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Todo;
