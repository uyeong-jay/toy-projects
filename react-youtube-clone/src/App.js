import React from "react";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Subscription from "./pages/Subscription";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/subscription" element={<Subscription />} />
    </Routes>
  );
};

export default App;
