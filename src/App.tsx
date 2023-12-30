import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import "./App.css";
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
