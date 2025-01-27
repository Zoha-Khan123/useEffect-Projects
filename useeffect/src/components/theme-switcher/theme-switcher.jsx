import React, { useState, useEffect } from "react";
import "./theme-switcher.css";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <h1>ThemeSwitcher</h1>
      <p>Current Theme : {theme}</p>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
