import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FitnessGoal from "./components/FitnessGoal";
import AboutUs from "./components/AboutUs";
// import BestOffer from "./components/BestOffer";
import Services from "./components/Services";
import BestPlan from "./components/BestPlan";
import Footer from "./components/Footer";

import Detail from "./components/Detail";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FitnessGoal />
              <AboutUs />
              {/* <BestOffer /> */}
              <Services />
              <BestPlan />
              <Detail />
              <Footer />
            </>
          }
        />
        <Route path="/Detail" element={<Detail />} />
        {/* <Route path="/BestOffer" element={<BestOffer />} /> */}
        <Route path="/BestPlan" element={<BestPlan />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="#"
          element={
            <>
              <Hero />
              <FitnessGoal />
              <AboutUs />
              {/* <BestOffer /> */}
              <Services />
              <BestPlan />
              <Detail />
              <Footer />
            </>
          }
        />

        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
