import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import {
  getAllToDo,
  addToDo,
  updateToDo,
  deleteToDo,
} from "./utils/HandleApis";
import mern from "./data/img";
import ToggleButton from "./components/ToggleButton";

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
    <div className="flex flex-col gap-4 mt-28 mb-10 bg-zinc-700 bg-opacity-25 p-5">
      <ToggleButton />
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold">MERN CRUD</h1>
        <div className="flex gap-2 p-2">
          {mern.map((mern) => (
            <div key={mern.id} className="h-10 w-10">
              <img src={mern.img} alt="" />
            </div>
          ))}
        </div>

        <div>
          <input
            type="text"
            placeholder="Add Anything"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 w-72 text-gray-700 outline-none"
          />
          <button
            className="hover:border-gray-800"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-zinc-900 bg-opacity-70 p-2 rounded">
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
