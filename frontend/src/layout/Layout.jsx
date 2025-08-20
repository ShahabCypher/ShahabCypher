import { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { ThreeBackground } from "components/three";
import Loader from "components/modules/Loader";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <ThreeBackground />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="flex-grow max-w-screen mx-auto relative z-10">
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
