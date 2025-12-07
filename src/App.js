import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cybersecurity from"./pages/Cybersecurity";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cybersecurity"element={<Cybersecurity/>}/>
    </Routes>
  );
}

export default App;
