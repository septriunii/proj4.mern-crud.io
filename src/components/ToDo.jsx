import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="bg-zinc-700 todocon flex justify-between p-3 bg-opacity-60 rounded-sm w-full">
      <div className="flex ">{text}</div>
      <div className="icons flex items-center gap-2">
        <BiEdit className="icon cursor-pointer" onClick={updateMode} />
        <AiFillDelete className="icon cursor-pointer" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
