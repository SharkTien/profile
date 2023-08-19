import React, { useState } from "react";
import "./services.css";

const Services = () => {
        const [toggleState, setToggleState] = useState(0);
        const toggleTab = (index) => {
            setToggleState(index);
        }
    return (
     <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">I am passionate about providing quality work to my clients. <br />
                         I am always willing to go the extra mile to make sure that my clients are satisfied.</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web <br /> Developer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Web Developer</h3>
                        <p className="services__modal-description"></p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I develop the user interface.</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Web page development.</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I create ux element interactions.</p>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Product <br /> Tester</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Product Tester</h3>
                        <p className="services__modal-description">I have years of experience finding and fixing bugs in a variety
                        of software applications</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I am a highly skilled problem solver with a keen eye for detail.</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I am proficient in using debugging tools and techniques to quickly
                                and efficiently identify and resolve bugs</p>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Teaching <br /> Assistant</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(3)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Teaching Assistant</h3>
                        <p className="services__modal-description"></p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I have years of experience teaching students.</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I have efficient skills in MS Word & Excel.</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I create professional documents, format them effectively.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I speak fluent in English.</p>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
     </section>   
    )
}

export default Services