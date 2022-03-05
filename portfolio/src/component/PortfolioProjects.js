import React from 'react'
import { FaGithub,FaExternalLinkSquareAlt } from "react-icons/fa";

const PortfolioProjects = () => {

    const getProjectName = (name) => {
        return (
            <>
                <div className="project-title">
                    <h3>{name}</h3>
                </div>
            </>
        );
    }

    const getProjectDes = (para,list,giturl,pageurl) => {
        return (<>
            <div className="project-body-para">
                <p>{para}</p>
                <ul>
                    <li>{list[0][0]}</li>
                    <li>{list[0][1]}</li>
                    <li>{list[0][2]}</li>
                </ul>

                <div className="project-body-para-btn">
                    <a href={giturl} target="_blank"  rel="noreferrer">
                        <button className="portfolio-resume-btn"> <FaGithub /> View on GitHub </button>
                    </a>
                    <a href={pageurl} target="_blank"  rel="noreferrer">
                        <button className="portfolio-resume-btn"> <FaExternalLinkSquareAlt/> View Full Screen</button>
                    </a>
                </div>
            </div>
        </>);
    }

    const getProject = (name, direction,src,para,list,giturl) => {
        return (
            <>
                <div className="portfolio-project-wrapper">
                    {getProjectName(name)}
                    <div className={`${direction? "project-para-row-reverse": "project-para"}`}>
                        <div className={`${direction? "project-main-right": "project-main-left"}`}>
                            <iframe src={src} frameborder="0" title={name}></iframe>
                        </div>

                        <div className="project-body">
                            {getProjectDes([para], [list],giturl,src)}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <section id="project">
                <div className="project">
                    <div className="header-project">
                        <h1>Project</h1>
                    </div>
                    
                    
                    {getProject("Random Quotes Generator", true, "https://random-quotes-generator-d859e.web.app", ["This project fetches and displays random quotes Using Quotable API. The refresh button fetches new quote everytime clicked. The Day mode/Night Mode button changes the appearance"], [" The quotes are fetched from API https://api.quotable.io/random using axios and displays the output in json format.", " Every time refresh button is clicked an api call is made and data is recived, then eseEffect hook updates data.", " UseSate hook handles the mode and changes accordingly."],"https://github.com/DPrinceKumar/React-Project/tree/main/random-quotes-generator")}
                    
                    {getProject("Digital Clock", false, "https://clock-2aa77.web.app", ["This digital clock behaves like any other clock and updates time every second. The time is represented in a string. The time string is placed in a div and made beautiful using CSS."], [" I have used date object which helped to fetch date and time of browser.", " I have made a functional component which has useEffect hook which runs after render and tells DOM to perform updates.", " The first component of useEffect hook calls the function which fetches time and the other argument takes the time after which it updates."],"https://github.com/DPrinceKumar/React-Project/tree/main/clock")}
                    
                    {getProject("To do Application", true, "https://todowithoutlocalstorage.web.app/", ["This is a todo list project. User can add his task in the list and can tick the task when completed. User can also star the important task."], [" I have used useState hook which constantly checks if a user has inputted something and if yes then it updates and displays it to list.", " The tasks are stored in an unordered list which is placed in a wrapper which gives it effect of a card.","--IMPORTANT :Please prefer Using in full screen mode for better ecperience "],"https://github.com/DPrinceKumar/React-Project/tree/main/todo")}
                    
                    {/* {getProject("Digital Clock", false,"https://clock-2aa77.web.app", ["This digital clock behaves like any other clock and updates time every second. The time is represented in a string. The time string is placed in a div and made beautiful using CSS."], [" I have used date object which helped to fetch date and time of browser.", " I have made a functional component which has useEffect hook which runs after render and tells DOM to perform updates.", " The first component of useEffect hook calls the function which fetches time and the other argument takes the time after which it updates."])} */}
                    

                </div>
            </section>
        </>
    );
}

export default PortfolioProjects;