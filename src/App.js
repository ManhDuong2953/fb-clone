import Home from "./component/Home/Home";
import Watch from "./page/watch";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/fb-clone" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/watch" element={<Watch />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
