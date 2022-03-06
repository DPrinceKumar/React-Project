import React from 'react';
import { FaEnvelope } from "react-icons/fa";


const ProfileContact = (props) => {
  return (
      <>
          <section className="portfolio-contact-wrapper" id="contact">
                <div className="portfolio-contact-title">
                    <h1>Contact</h1>
                </div>
              <div className="portfolio-contact">
                  <p>Hey thanks for stoping by. I am open for Web Development roles, feel free to contact me on any of the platforms below.
                      You can find my other projects in my github. I hope to hear from you soon.
                  </p>
                  <p>As you have seen I'm putting a lot of effort to help you what you are looking for so,
                      to get the best outcome to form me. can I ask for a favor? Please provide your valuable
                      feedback to improve me, Your small help means a lot to me and it will add so much value to my journey.</p>
                </div>
              <div className="portfolio-feedback">
                  <div className="email-wrapper">
                      <div className="email-icon-wrapper">
                        <FaEnvelope className="email-icon"/> 
                    </div>
                    <div className="email">
                        <p>Email</p>
                        <p>prince2kumar4147@gmail.com</p>
                    </div>
                  </div>
                    
                  <div className="portfolio-feedback-button portfolio-resume-btn"
                      onClick={() => { alert("working on form, it will get added soon")}}>
                      Send Feedback
                      {/* onClick={() => window.open(true)} */}
                  </div>
                </div>
            </section>
      </>
  )
}

export default ProfileContact;