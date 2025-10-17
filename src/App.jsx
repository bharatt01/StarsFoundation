import React from "react";
import "./App.css";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import WhatsAppButton from "./components/WhatsAppButton";
import GetInvolved from "./pages/GetInvolved";
import DonatePage from "./pages/DonatePage";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import Stories from "./pages/Stories";
function App() {
  return (
    <Router>
      <>
      
        <WhatsAppButton />
        <ScrollToTopOnRouteChange />
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
      </>
    </Router>
  );
}

export default App;
