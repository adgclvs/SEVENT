import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plus from "./Pages/Plus";
import Rent from "./Pages/Rent";
import Ride from "./Pages/Ride";
import Share from "./Pages/Share";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rent />} />
        <Route path="/share" element={<Share />} />
        <Route path="/ride" element={<Ride />} />
        <Route path="/plus" element={<Plus />} />
        <Route path="*" element={<Rent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
