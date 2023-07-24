import "./App.css";
import { useState } from "react";
import { Animated } from "react-animated-css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Portafolio from "./Pages/Portafolio";
import StateLanguage from "./context/StateLanguage";

function App() {
  return (
    <>
      <StateLanguage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio/:id" element={<Portafolio />} />
        </Routes>
      </StateLanguage>
    </>
  );
}

export default App;
