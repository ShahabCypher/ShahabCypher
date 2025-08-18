import Layout from "layout/Layout";
import ThemeProvider from "contexts/ThemeContext";
import { Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
