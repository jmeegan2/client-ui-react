import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Attendance from "./pages/attendance";
import Navigation from "./components/Navigation";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navigation />
          <Routes>
            
            <Route path="/" element={<Attendance />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
