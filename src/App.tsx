import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import MainNav from "./components/MainNav/MainNav";
import Building from "./pages/Building";
import CharactersPage from "./pages/CharactersPage";
import Home from "./pages/Home";
import { theme } from "./util/muiSettings";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <MainNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/episodes" element={<Building />} />
            <Route path="/locations" element={<Building />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
