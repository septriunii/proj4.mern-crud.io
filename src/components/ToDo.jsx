import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="bg-black text-white flex justify-between p-2">
      <div>{text}</div>
      <div className="icons flex items-center gap-2">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
