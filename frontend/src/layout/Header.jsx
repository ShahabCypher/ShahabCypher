import React from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center h-20 dark:bg-void-black select-none">
      <h1 className="text-3xl font-bold ml-10">
        <Link to="/">Cypher</Link>
      </h1>
      <ul className="flex gap-10 items-center [&>li]:text-lg [&>li]:hover:text-cyber-blue [&>li]:transition-colors [&>li]:duration-200">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="mr-10 cursor-pointer">
        {theme === "dark" ? <Sun size={30} /> : <Moon size={30} />}
      </button>
    </nav>
  );
};

export default Header;
