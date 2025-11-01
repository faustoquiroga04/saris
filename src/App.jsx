import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SarisExperience from "./pages/SarisExperience";
import Technique from "./pages/Technique";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saris-experience" element={<SarisExperience />} />
        <Route path="/technique" element={<Technique />} />
        <Route path="/faq" element={<Home />} />
        <Route path="/waitlist" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
