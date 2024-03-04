import React from "react";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigaton from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigaton />
      <Routes>
        <Route to="/" exact={true} component={Home} />
        <Route to="/about" component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
