import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Main";
import Manufacturer from "../components/Manufacturer";
import Supplier from "../components/Supplier";

function globalRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/manufacturer" element={<Manufacturer/>} />
        <Route path="/main/supplier" element={<Supplier/>} />
      </Routes>
    </>
  );
}

export default globalRoute;
