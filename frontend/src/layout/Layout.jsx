import { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

import Loader from "src/components/modules/Loader";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
