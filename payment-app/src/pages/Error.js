import React from "react";
import Error404 from "../components/Error404";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Error = () => {
  return (
    <>
      <NavBar/>
      <Error404/>
      <Footer/>
    </>
  );
};

export default Error;
