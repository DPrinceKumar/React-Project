import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: true,
    autoplaySpeed:1500,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
    ]
}

const PortfolioCertification = () => {

    const getCarousalCard = (achiveImg, title, description,name) => {
        return (
            <div className="portfolio-achivement-card-wrapper">
                <div className="card-img">
                    <img src={achiveImg} alt={name}/>
                </div>
                <div className="card-body">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>    
            </div>
        )
    }

    return (
        <>
            <section className="portfolio-achivement-wrapper">
                    <div className="portfolio-achivement-title">
                        <h1>Certifications & Achivements</h1>
                    </div>
                    <div className="portfolio-achivement-list">
                        <Slider {...settings}>
                            {getCarousalCard("./images/android-Certificate.png", "Project Completion Certificate By IBM Allsoft", "In this summer Traning me and my teammate's have developed Resturent Management app","android")}
                            {getCarousalCard("./images/react-certi.png", "Front-End Web Development with React By Coursera", "During this course by Coursera, I created a Resturent website using React, Bootstrap","React")}
                            {getCarousalCard("./images/bootstrap-certi.png", "Front-End Web UI Frameworks and Tools: Bootstrap 4 By Coursera", "During this course by Coursera, I created a Resturent website using React, Bootstrap","Bootstrap")}
                            {getCarousalCard("https://graphicsfamily.com/wp-content/uploads/edd/2021/02/Portrait-Vertical-Orange-Certificate.jpg", "Project Completion Certificate--SAMPLE", "During my summer internship I created an E-commerece website using Laravel and SQL","sample")}

                        </Slider>


                    </div>
            </section>
        </>
    )
}
export default PortfolioCertification;