import React from "react";
import { Rate } from 'antd';
import 'antd/dist/antd.min.css';
import { AiOutlineLinkedin, AiOutlinePhone, AiOutlineMail, AiOutlineGithub } from "react-icons/ai";

const ResumeBasicDetail = () => {
    return (<>
        <section>
            <div className="baisc-details-wrapper">
                {/* Identity section */}
                <section>
                    <div className="Identity-wrapper">
                        <img src="https://dprincekumar.github.io/MY-Portfolio/IMG/prince.jpg" alt="Prince Kumar" />
                        <h2>Prince Kumar</h2>
                    </div>
                </section>

                {/* About Wrapper */}
                <section className="about-wrapper-container">
                    <div className="about-wrapper">
                        <h3>About </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate amet numquam perferendis laboriosam vel consectetur quidem esse recusandae, rerum sapiente quisquam, soluta molestiae odit inventore! Ratione tenetur ipsum eos.</p>
                    </div>
                </section>

                <section className="contact-wrapper-container">
                    <h3>Contact with me </h3>
                    <div className="contact-wrpper">
                        <div className="contact-icon">
                            <AiOutlineMail className="icons" />
                            <p>prince2kumar4147@gmail.com</p>
                        </div>
                        <div className="contact-icon">
                            <AiOutlinePhone className="icons phone" />
                            <p>+91 7254962644</p>
                        </div>
                        <div className="contact-icon">
                            <AiOutlineLinkedin className="icons" />
                            <p>https://bit.ly/prince-linkdin</p>
                        </div>
                        <div className="contact-icon">
                            <AiOutlineGithub className="icons" />
                            <p>https://bit.ly/prince-github</p>
                        </div>
                    </div>
                </section>

                <section className="skill-wrapper-container">
                    <h3>Skills</h3>
                    <div className="skill-wrapper">
                        <div className="skill">
                            <h4>Java Script</h4>
                            <Rate className="skill-rating" disabled allowHalf defaultValue={3.5} />
                        </div>
                        <div className="skill">
                            <h4>Html</h4>
                            <Rate className="skill-rating" disabled allowHalf defaultValue={4.5} />
                        </div>
                        <div className="skill">
                            <h4>Java Script</h4>
                            <Rate className="skill-rating" disabled allowHalf defaultValue={3.5} />
                        </div>
                    </div>
                </section>


            </div>
        </section>

    </>);
};

export default ResumeBasicDetail;
