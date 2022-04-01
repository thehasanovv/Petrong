import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
