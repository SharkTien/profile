import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/ryukita_1552/?fbclid=IwAR1UUg-PKJCjHbARxifAZhic6MQmklJVGkj2x1N3HVXjl1uqqkmT2vAgCZM"
            className="home__social-icon" target="_blank" rel="noreferrer">
            <i class="uil uil-instagram"></i>    
            </a>

            <a href="https://www.facebook.com/tengzine/"
            className="home__social-icon" target="_blank" rel="noreferrer">
            <i class="uil uil-facebook"></i>    
            </a>

            <a href="https://github.com/SharkTien"
            className="home__social-icon" target="_blank" rel="noreferrer">
            <i class="uil uil-github-alt"></i>    
            </a>
        </div>
    )
}

export default Social