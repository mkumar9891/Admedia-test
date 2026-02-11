import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/Css/Custom.css";
import "./Components/Header";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeSlider from "./Components/HomeSlider";
import CaseStudy from "./Components/CaseStudy";
import Contact from "./Components/Contact";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Header2 from "./Components/Header2";

function App() {
  return (
    <div className="App">
      <Router>
        <Header2 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="xyz" element={<HomeSlider />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About heading="Heading Testing" />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
