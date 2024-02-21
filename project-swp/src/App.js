import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import QuotationForm from "./Pages/QuotationPage/QuotationForm";
import Projects from "./Pages/ProjectPage/projectsData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<QuotationForm />}></Route>
        <Route path="/" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}
export default App;
