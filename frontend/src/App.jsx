import Layout from "layout/Layout";
import ThemeProvider from "contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <h1>Cypher</h1>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
