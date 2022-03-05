import React, { useState } from "react";
import serviceapi from "../API/services";
const Services = () => {
  const [service, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to send money
          </h1>
          <div className="row">
            {service.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-11 col-lg-3 col-xxl-4 work-container-subdiv" key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="">{title}</h2>
                    <p className="main-hero-para">{info}</p>
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

export default Services;
