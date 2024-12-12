import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProdukPage from "./pages/ProdukPage";
import TestimoniPage from "./pages/TestimoniPage";
import FaqPage from "./pages/FaqPage";
import SKPage from "./pages/SKPage";

import Spinner from "react-bootstrap/Spinner"; // Assuming you are using Bootstrap

function App() {
  // spinners
  const [loading, setLoading] = useState(true);
  const [spinnerLarge, setSpinnerLarge] = useState(false); // State for spinner size

  // Simulate a loading delay
  useEffect(() => {
    // Timer to handle loading
    const timer = setTimeout(() => {
      setSpinnerLarge(true); // Trigger grow effect
    }, 2700); // After 1.5 seconds, start enlarging spinner

    const finalTimer = setTimeout(() => setLoading(false), 3000); // After 2 seconds, show content

    return () => {
      clearTimeout(timer);
      clearTimeout(finalTimer);
    };
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        {/* Spinner with conditional class for growth */}
        <Spinner
          animation="grow"
          variant="primary"
          className={`custom-spinner-grow ${
            spinnerLarge ? "spinner-grow-large" : ""
          }`}
        />
      </div>
    );
  }
  // spinners off
  //
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/product" Component={ProdukPage} />
        <Route path="/testimoni" Component={TestimoniPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/sk" Component={SKPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
