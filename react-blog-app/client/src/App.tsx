import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./PageRenderer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/:page" element={<Page />} />
        <Route path="/:page/:slug" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
