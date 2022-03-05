import React, { useState } from "react";
import howToUseApp from "../API/howToUseApp";

const AboutUs = () => {
  const [howToUse, sethowToUse] = useState(howToUseApp);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
              <img src="./images/hero3.jpg" alt="aboutus" />
            </div>
            {/* Right side img data */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                --Available @ google play and ios store only
              </h3>
              <h1 className="main-heading">How to use app?</h1>

              {howToUse.map((currElement) => {
                const { id, title, info } = currElement;
                return (
                  <>
                    <div className="row our-services-info" key={currElement.id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* second container */}
      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* Right side img data */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title"> --Support in any language</h3>
              <h1 className="main-heading">
                world class support is <br />
                available 24/7
              </h1>

              {howToUse.map((currElement) => {
                const { id, title, info } = currElement;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
            <div className="col-12 col-lg-5 our-services-leftside-img">
              <img src="./images/callcenter.jpg" alt="aboutus"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
