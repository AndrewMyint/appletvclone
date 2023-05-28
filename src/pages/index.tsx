import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AppleTvPage from "../pages/AppleTvPage";

export default function Home() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AppleTvPage />} />
          <Route path="/apple-tv-plus" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}
