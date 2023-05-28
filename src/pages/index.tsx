import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./mainPage";
import AppleTvPage from "./appleTV";

export default function Home() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/apple-tv-plus">About</Link>
          </li> */}
        </ul>

        <Routes>
          <Route path="/" element={<AppleTvPage />} />
          <Route path="/apple-tv-plus" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}
