import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Tien Huynh</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                </ul>

                <div className="footer__social">
                <a href="https://www.instagram.com/ryukita_1552/?fbclid=IwAR1UUg-PKJCjHbARxifAZhic6MQmklJVGkj2x1N3HVXjl1uqqkmT2vAgCZM"
                className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-instagram"></i>    
                </a>

                <a href="https://www.facebook.com/tengzine/"
                className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-facebook"></i>    
                </a>

                <a href="https://twitter.com/h_tengzi"
                className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-twitter"></i>    
                </a>
                </div>

                <span className="footer__copy">
                    &#169; Sharktien. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer