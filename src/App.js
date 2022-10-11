import "../src/App.css";
// import Pages from "./Components/Pages/Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Components/Common/Header";
import Home from "./Components/Home/Home";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Portfolio from "./Components/Pages/Portfolio";
import Testimonials from "./Components/Pages/Testimonials";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Common/Footer";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/certification" element={<Testimonials />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
