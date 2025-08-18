import React from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <h1>Cypher</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
};

export default Header;
