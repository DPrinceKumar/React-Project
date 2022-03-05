import React from 'react';
import { WhatsAppOutlined  } from "@ant-design/icons";

const PortfolioWhoAmI = () => {

    return (
        <>
            <section className="who-am-i-wrapper" id="about">
                <div className="who-am-i-title">
                    <h1>Who Am I!</h1>
                </div>
                <div className="who-am-i-para">
                    <div className="who-am-i-img">
                        <img src="./images/hello.svg" alt="hello" srcset="" />
                    </div>
                    <div className="para">
                        <p>I am a Young Adult computer scientist. From childhood, I'm a technology addict and a person who is fond of travelling. I love to interact with people and work in Team. I’m probably the most passionate growing web developer/web designer you will ever work with. I'm so much passionate about design. I always wanted to create new intersting unique experiences for user, getting into web development changed a lot of things for me, and since then, I try to push my work to new horizons with each project, always putting quality first.</p>
                        <p>I Love to work with techie people and love to contribute to Opensource.</p>
                      
                        <p>I started my career pathway in 2019 and improving day-by-day. Today, I am pursuing B-Tech from India’s fastest-growing university Lovely professional University</p>
                    </div>
                </div>
            </section>

            <section>
                <div onClick={()=>window.open("https://wa.me/917254962644/?text=Hello Prince, I want to talk to you regarding an opening in my company.")}>
                    <WhatsAppOutlined className="whatsapp-icon"/> 
                </div>
            </section>

        </>
    );
}
// https://wa.me/917254962644/?text=Hello Prince, I want to talk to you regarding an opening in my company.
export default PortfolioWhoAmI;