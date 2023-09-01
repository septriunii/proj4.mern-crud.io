import React, { useState } from "react";

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="absolute top-5 right-5">
      <label className="flex items-center space-x-2 cursor-pointer">
        <span className={`text-${isToggled ? "green" : "gray"} text-sm`}>
          {isToggled ? "Light Mode" : "Dark Mode"}
        </span>
        <div
          className={`w-12 h-7 bg-gradient-to-r bg-gray-700 bg-opacity-75 rounded-full p-1 transition-all duration-300 ease-in-out`}
        >
          <div
            className={`w-6 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out  ${
              isToggled ? "translate-x-4 bg-white " : "bg-zinc-900"
            }`}
          ></div>
        </div>
        <input
          type="checkbox"
          className="hidden"
          checked={isToggled}
          onChange={toggle}
        />
      </label>
    </div>
  );
}

export default ToggleButton;
