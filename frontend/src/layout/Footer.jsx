import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-white dark:bg-void-black justify-center items-center h-20 border-t-[.5px] z-50">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Cypher. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
