import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Methods from "./pages/Methods";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/methods" element={<Layout><Methods /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;