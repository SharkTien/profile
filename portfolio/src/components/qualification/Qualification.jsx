import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
        const [toggleState, setToggleState] = useState(1);
        const toggleTab = (index) => {
            setToggleState(index);
        }
    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IELTS 6.5</h3>
                                <span className="qualification__subtitle">Vietnam - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    23/3/2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Bronze Prize - Vietnam National Informatics Olympiad</h3>
                                <span className="qualification__subtitle">VAIP & Ministry of Education and Training</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2021
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Silver Prize - Youth Creativity Competition</h3>
                                <span className="qualification__subtitle">Thua Thien Hue Province - Ho Chi Minh Communist Youth Union</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UI Designer</h3>
                                <span className="qualification__subtitle">High School Team</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2020 - 2021
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification