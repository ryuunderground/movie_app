import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <div>
        <h3>About</h3>
        <h3>Home</h3>
      </div>
      <HashRouter>
        <Routes>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/about" exact={true} component={About}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
