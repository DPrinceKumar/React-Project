import React, { useState } from "react";
import workapi from "../API/WorkAPI";

const HowItWorks = () => {
  const [work, setWorkData] = useState(workapi);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it work</h1>
          <div className="row">
            {work.map((curElement) => {
              const { id, logo, title, info } = curElement;
              return (
                <>
                  <div className="col-12 col-lg-4" key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
