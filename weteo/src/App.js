import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/about"} element={<About />}/>
        <Route path={"*"} element{<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
