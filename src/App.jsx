import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SarisExperience from "./pages/SarisExperience";
import Technique from "./pages/Technique";
import Faq from "./pages/Faq";
import Waitlist from "./pages/Waitlist";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); 
  }, [location]);

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "fadeOut") {
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, location]);

  return (
    <div className={`page ${transitionStage}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/saris-experience" element={<SarisExperience />} />
        <Route path="/technique" element={<Technique />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
