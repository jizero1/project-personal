import React, { useState } from 'react';

import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h2 className="about-title-h2">ABOUT</h2>
            </div>
            <nav className="about-nav">
                <li className="about-nav-li">퍼스널컬러의 의미</li>
                <li className="about-nav-li">퍼스널컬러의 종류</li>
                <li className="about-nav-li">퍼스널컬러의 활용</li>
            </nav>
        </div>
    )
}
export default About;