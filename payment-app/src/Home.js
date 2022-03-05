import React from "react";
import AboutUs from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

const Home = ()=> {
  return (
    <>
      <NavBar />
      <Header />
      <HowItWorks />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
