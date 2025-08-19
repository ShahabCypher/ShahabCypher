import React from "react";

const Footer = () => {
  return (
    <footer className="flex bg-white dark:bg-void-black justify-center items-center h-20 border-t-[.5px] border-blight dark:border-bdark z-50 transition-all duration-300">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Cypher. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
