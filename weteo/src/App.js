import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";

function App() {
  return (
      <div>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Weteo</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Home />}/>
                  <Route path={"/about"} element={<About />}/>
                  <Route path={"*"} element={<NotFound />}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
