import React from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Accommodation from "../pages/accommodation/Accommodation";
import Error from "../pages/error/Error";
import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <div style={{ margin: "auto 0" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kasa" element={<Home />} />
        <Route path="/logement/:id" element={<Accommodation />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
