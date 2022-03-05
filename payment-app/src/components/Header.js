import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            {/* main header left side */}

            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start
            order-lg-first order-last">
              <h1 className="display-2">
                Online Payment <br />
                Made Easy For You
              </h1>
              <p className="main-hero-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                magnam cupiditate sunt laborum at natus iure, veritatis commodi
                esse fugit in, neque assumenda nihil atque. Voluptas officiis
                ipsa obcaecati perspiciatis. Maiores nobis eveniet laborum
                tempora repellendus unde, iusto ipsum blanditiis nam et.
              </p>
              <h3>Get arly access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter your email"
                />
                <div className="input-group-button ">Get it now</div>
              </div>
            </div>
            {/* main header right side */}

            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-start main-herosection-images oder-md-first oder-sm-first">
              <img src="./images/hero1.jpg" alt="hero" className="img-fluid" />
              <img
                src="./images/hero2.jpg"
                alt="hero"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
