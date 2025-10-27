import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Home />} />
        <Route path="/technique" element={<Home />} />
        <Route path="/faq" element={<Home />} />
        <Route path="/waitlist" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
