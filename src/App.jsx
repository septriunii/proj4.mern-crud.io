import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import {
  getAllToDo,
  addToDo,
  updateToDo,
  deleteToDo,
} from "./utils/HandleApis";
import mern from "./data/img";
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="flex justify-center w-screen min-h-screen ">
        <div className="flex flex-col gap-4 mt-20 w-[80%]  md:w-[60%]  lg:w-[40%] h-auto container p-4 mb-6">
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
            className="absolute top-3 right-3"
          />

          <div className="flex flex-col items-center gap-3">
            <h1 className="font-bold">MERN CRUD</h1>
            <div className="flex gap-2 p-2">
              {mern.map((mern) => (
                <div key={mern.id} className="h-10 w-10">
                  <img src={mern.img} alt="" />
                </div>
              ))}
            </div>

            <div className="w-[90%] md:w-[70%] lg:w-[85%] flex gap-3">
              <input
                type="text"
                placeholder="Add Anything"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="p-2 w-full text-gray-700 "
              />
              <button
                className="hover:border-gray-800"
                onClick={
                  isUpdating
                    ? () =>
                        updateToDo(
                          toDoId,
                          text,
                          setToDo,
                          setText,
                          setIsUpdating
                        )
                    : () => addToDo(text, setText, setToDo)
                }
              >
                {isUpdating ? "Update" : "Add"}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3  p-2 rounded todos ">
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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
