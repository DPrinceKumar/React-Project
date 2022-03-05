import React from "react";

const ResumeContent = () => {
    const education = (degree, year, institution, marks) => {
        return (
            <section className="degree-wrapper">
                <section className="degree-name">
                    <h4>{degree}</h4>
                    <p>{year}</p>
                </section>
                <section className="institution-marks">
                    <h5><b>{institution}</b></h5>
                    <p>{marks}</p>
                </section>
            </section>
        )
    }

    const projects = (name, timePeriod, work) => {
        return (
            <section className="project-function-wrapper">
                <section className="project-name">
                    <h4>{name}</h4>
                    <p><b>{timePeriod}</b></p>
                </section>
                <section className="project-function-list-wrapper">
                    <ul>
                        {work.map((list, index) => <li key={index}>{list}</li>)}
                    </ul>
                </section>
            </section>
        )
    }

    const Interests = () => {
        return (
            <section className="resume-content-interest-wrapper">
                <section><h3>Interests</h3></section>
                <h4>Table Tennis, Chess, Reading books, Reading Technology blog</h4>
            </section>
        )
    }
    return (
        <>
            <div className="resume-content-wrapper">

                {/* Education */}
                <section className="education-wrapper-container">
                    <div className="educations-wrapper">
                        <h3>Education</h3>
                    </div>
                    <div className="education">
                        {education("BTech CSE (Computer Science and Engineering)", "2019-Persuing", "Lovely Professional University, Punjab", "Current 6.82CGPA ")}
                        {education("Senior Secondary School", "2017-2019", "K. N. Memo Academy, Munger", "61.8%")}
                        {education("Seconday School", "2017", "New Era Public School, Munger", "9.2 CGPA")}
                    </div>
                </section>

                {/* Projects */}
                <section className="project-wrapper-container">
                    <div className="projects-wrapper">
                        <h3>Projects</h3>
                    </div>
                    <div className="projects">
                        {projects("To Do", "Jan 2022-Feb 2022", ["This", "That"])}
                        {projects("To Do", "Jan 2022-Feb 2022", ["This", "That"])}
                        {projects("To Do", "Jan 2022-Feb 2022", ["This", "That"])}
                    </div>
                </section>

                {/* Achievement */}
                <section className="achievement-wrapper-container">
                    <div className="achievement-wrapper">
                        <h3>Certifications & Achievement</h3>
                    </div>
                    <div>
                        <ul>
                            <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        </ul>
                    </div>
                </section>

                {/* Interests */}
                {Interests()}


            </div>
        </>);
};

export default ResumeContent;
