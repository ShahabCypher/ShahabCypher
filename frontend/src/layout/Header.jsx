import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";

import { useTheme } from "hooks/useTheme";
import { useMobileMenu } from "hooks/useMobileMenu";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { isOpen, toggle, close } = useMobileMenu();

  const navigationItems = [
    { to: "#home", label: "Home" },
    { to: "#stack", label: "Tech Stack" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      if (targetId === "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.scrollY;
        const middle = absoluteElementTop - 20;

        window.scrollTo({
          top: middle,
          behavior: "smooth",
        });
      }
    }
  };

  const NavLink = ({ to, label, onClick }) => (
    <a
      href={to}
      onClick={(e) => {
        handleSmoothScroll(e, to);
        if (onClick) onClick();
      }}
      className="hover:text-professional-blue dark:hover:text-cyber-blue transition-colors duration-200 block py-2 md:py-0"
    >
      {label}
    </a>
  );

  return (
    <nav className="sticky top-0 flex justify-between items-center h-20 bg-white dark:bg-void-black select-none shadow-[0_10px_10px_-8px] shadow-professional-blue dark:shadow-cyber-blue z-50">
      {/* Logo */}
      <h1 className="text-3xl font-semibold ml-4 md:ml-10 z-20 w-30 font-[UnifrakturMaguntia] tracking-wider">
        <Link to="/">Cypher</Link>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 items-center text-lg">
        {navigationItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} label={label} />
          </li>
        ))}
      </ul>

      {/* Desktop Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="hidden md:block mr-4 md:mr-10 md:ml-20 cursor-pointer transition-colors duration-200"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? <Sun size={30} /> : <Moon size={30} />}
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={toggle}
        className={`md:hidden mr-4 p-2 transition-colors duration-200 ${
          isOpen ? "z-50" : "z-0"
        }`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/50 dark:bg-black/50 z-30 md:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[85vw]
          dark:bg-void-black bg-white
          transform transition-transform duration-300 ease-in-out z-40
          md:hidden shadow-xl
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full pt-24 px-6 relative">
          {/* Mobile Theme Toggle */}
          <div className="pt-7 absolute top-0">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 text-lg cursor-pointer transition-colors duration-200"
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-6 text-lg">
            {navigationItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} label={label} onClick={close} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
