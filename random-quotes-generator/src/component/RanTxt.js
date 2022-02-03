import React, { useState, useEffect } from "react";
import FetchQuotes from "./FetchQuotes"

const RanTxt = () => {
    const [quoteTxt, setQuoteText] = useState("");
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        FetchQuotes(setQuoteText);
        // {
        //     darkMode ?
        //     document.body.style.backgroundColor ="#282c34":
        //     document.body.style.backgroundColor = "#EEEEEE";
        // }
    },[]);


    const setQuote = () => {
        return (
            <div className="main-wraper">
                <div className="child-wrapper">
                    <p>{quoteTxt}</p>
                </div>
            </div>
        );
    }
    const refreshButton = () => {
        return (
            <div className="btn">
                <button className="refresh" onClick={() => FetchQuotes(setQuoteText)}>
                    <i className="fas fa-sync-alt"></i>&nbsp; Refresh</button>
            </div>
        );
    }
    const darkModeButton = () => {
        return (
            <div className="btn">{console.log("dark mode is "+darkMode)}
                <button onClick={() => setDarkMode(!darkMode)}
                    className={darkMode ? "dark-mode" : ""}>
                    <i className={`far ${darkMode ? "fa-sun" : "fa-moon"} `}></i>
                    &nbsp; {darkMode ? " Day Mode" : " Night mode"}
                </button>
            </div>
        );
    }
    const getQuote = () => {
        return (<>
            <div className="ref-dark-btn-wrapper">
                {refreshButton()} {/* refresh Button*/}
                {darkModeButton()}    {/* Dark mode Button*/}
            </div>
        </>);
    }

    return (
        <>
            <div className={`parent ${darkMode?"dark-mode-bg":"day-mode-bg"}`}>
                <div className={`child ${darkMode?"":"child-day"}`}>
                    {/* Set quotes called  */}
                    {setQuote()}
                    {/* Button call */}
                    {getQuote()}
                </div>
            </div>
        </>
    );
};

export default RanTxt;
