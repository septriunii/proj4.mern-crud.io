import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import {
  getAllToDo,
  addToDo,
  updateToDo,
  deleteToDo,
} from "./utils/HandleApis";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <>
      <h1 className="font-bold mb-7">MERN CRUD</h1>
      <div className=" flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add TODOS"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2"
        />
        <button
          onClick={
            isUpdating
              ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)
          }
        >
          {isUpdating ? "Update" : "Add"}
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
