import React from 'react'
import PortfolioCertification from './PortfolioCertification';
import PortfolioHeader from "./PortfolioHeader";
import PortfolioProjects from './PortfolioProjects';
import PortfolioWhoAmI from "./PortfolioWhoAmI";
import ProfileContact from './ProfileContact';


import "./style/style.css";

const Home = () => {
  


  return (
    <>

      <PortfolioHeader />
      <PortfolioWhoAmI />
      <PortfolioProjects />
      <PortfolioCertification />
      <ProfileContact />
    </>
  )
}

export default Home;