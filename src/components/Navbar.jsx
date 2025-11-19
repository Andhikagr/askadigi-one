import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const html = document.documentElement;
    if (isChecked) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isChecked);
  }, [isChecked]);

  return (
    <div className="py-8 px-[8%] justify-between flex w-full h-full items-center">
      <div className="flex gap-5 items-center">
        <img src={logo} alt="" className="w-12" />
      </div>
      <div className="flex gap-2 shadow-theme p-3 rounded-2xl ">
        <span className="flex items-center justify-center cursor-default">
          <FiSun />
        </span>
        <label className="flex cursor-pointer select-none">
          <div className="relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBox}
              className="sr-only"
            />
            <div
              className={`box block h-6 w-10 rounded-full ${
                isChecked ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full  bg-white transition-all ${
                isChecked ? "" : "translate-x-full"
              }`}
            ></div>
          </div>
        </label>
        <span className="flex items-center justify-center  cursor-default">
          <FiMoon />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
