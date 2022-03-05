import React from "react";
import "./style/style.css"
import ResumeBasicDetail from "./ResumeBasicDetail";
import ResumeContent from "./ResumeContent";
import { AiOutlineDownload,AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";



const Resume = () => {
    return (<>
        <div className="resume">
            <div className="go-back">
                 <Link className="resume-go-back" to="/"> <AiOutlineRollback/> Go Back</Link>
            </div>
            <div className="resume-wrapper">
                <div className="ResumeBasicDetail">
                    <ResumeBasicDetail />
                </div>
                <div className="ResumeContent">
                    <ResumeContent />
                </div>
            </div>
            <div className="download-resume" onClick={() => { alert("This feature will get added soon") }}>
                    <button> <AiOutlineDownload /> Download</button>
                </div>
        </div>

    </>);
};

export default Resume;
