import React from "react";

const Footer = () => {
  return (
    <footer className="flex bg-white/30 dark:bg-void-black/30 backdrop-blur-md justify-center items-center h-20 border-t border-blight/50 dark:border-bdark/50 z-50 transition-all duration-300 shadow-backdrop">
      <p className="text-sm text-gray-500 text-shadow-enhanced">
        &copy; {new Date().getFullYear()} Cypher. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
