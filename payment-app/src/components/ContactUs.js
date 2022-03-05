import React, { useState } from "react";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailId: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserdata = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const saveResponse = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phoneNumber, emailId, address, message } =
      userData;
    if (firstName && lastName && phoneNumber && emailId && address && message) {
      const res = await fetch(
        "https://reactpay-f0ee8-default-rtdb.firebaseio.com/userDataResponse.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phoneNumber,
            emailId,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          emailId: "",
          address: "",
          message: "",
        });
        alert("saved");
      } else {
        alert("fill again");
      }
    } else {
      alert("can't leave any value blank");
    } 
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Contact with our <br /> sales team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur,
                    <br /> adipisicing elit. Est dolore explicabo
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="hero 4"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* contact form right side  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserdata}
                          name="firstName"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserdata}
                          name="lastName"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          value={userData.phoneNumber}
                          onChange={postUserdata}
                          name="phoneNumber"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Id"
                          value={userData.emailId}
                          onChange={postUserdata}
                          name="emailId"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          value={userData.address}
                          onChange={postUserdata}
                          name="address"
                        />
                      </div>
                      <div className="col-12 ">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserdata}
                          name="message"
                        />
                      </div>
                      <div className="form-check form-checkbox-style ">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                          checked
                        />
                        <label className="form-check-label main-hero-para">
                          I agree that prince kumar may contact me at email
                          address or phone number above
                        </label>
                        <button
                          type="submit"
                          className="btn btn-style w-100 mt-5"
                          onClick={saveResponse}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
