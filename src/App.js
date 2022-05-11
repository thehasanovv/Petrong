import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
