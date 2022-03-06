import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const PortfolioHeader = () => {
    const [menu, setMenu] = useState(false);

    const getNavBarIcon = () => {
        return (
            <div className="logo-wrapper">
                <div className="nav-bar-image">
                    <img src="./images/prince.jpg" alt="nav-icon-prince" />
                </div>
                <div className="nav-bar-title">
                    <p>Prince Kumar</p>
                </div>
                <div className="menu-wrapper">
                    {
                        menu ?
                            <AiOutlineClose onClick={() => setMenu(!menu)} /> :
                            <AiOutlineMenu onClick={() => setMenu(!menu)} />
                    }
                </div>
            </div>
        );
    }
    const getNavList = () => {
        return (
            <div className={`nav-list ${menu ? "show" : "hide"}`}>
                <ul>
                    <li><a href='#home'>Home</a> </li>
                    <li><a href="#project">Project</a> </li>
                    <li><a href="#about">About</a> </li>
                    <li><a href="#contact">Contact</a> </li>
                </ul>
            </div>
        );
    }
    const getNavBar = () => {
        return (
            <div className="navbar">
                {getNavBarIcon()}
                {getNavList()}

                <Link to="/resume">
                    <button className="portfolio-resume-btn">Resume</button>
                </Link>
            </div>
        );
    }
    const getHeaderBody = () => {
        return (
            <>
                <div className="hey-body-wrapper">
                    <div className="intro-wrapper">
                        <h3>Hey!<span> 👋 </span>&nbsp;There</h3>
                        <h1>
                            <span>P</span>
                            <span>R</span><span>I</span><span>N</span><span>C</span><span>E</span>&nbsp;
                            <span>K</span><span>U</span><span>M</span><span>A</span><span>R</span>
                        </h1>
                    </div>
                    <div className="social-link">
                        <div className="link-list">
                            <ul>
                                <li> <a href="https://bit.ly/p-linkedin"><FaLinkedinIn /></a></li>
                                <li> <a href="https://bit.ly/p-github"><FaGithub /></a></li>
                                <li> <a href="https://bit.ly/p-twitter"><FaTwitter /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div className="download-btn">
                    <button className="portfolio-resume-btn" ><Link to="/resume">Download Resume</Link></button>
                </div>
            </>
        );
    }
    const getBlob = () => {
        return (<>
                <div className="blob-img-wrapper">
                    <img className="blue-blob" src="./images/Blob-blue.svg" alt="vector" />
                    <img className="yellow-blob" src="./images/Blob-yellow.svg" alt="vector-2" />
                    <img className="gradient-blob" src="./images/Blob-gradient.svg" alt="Vector-3" />
                </div>
                <div className="picture">
                    <img src="./images/prince-Without-Bg.svg" alt="Prince Kumar" />
                </div>
        </>);
    }
    return (
        <>
            <div className="header" id="home">
                <div className="navbar-wrapper">
                    {getNavBar()}
                </div>
                <div className="header-body">
                    <div className="left-body-wrapper">
                        {getHeaderBody()}
                    </div>
                    <div className="right-body-wrapper">
                        {getBlob()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioHeader;



