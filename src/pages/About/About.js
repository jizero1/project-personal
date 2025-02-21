import React, { useState } from 'react';

import './About.css';
import { FaDotCircle } from "react-icons/fa";

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h2 className="about-title-h2">ABOUT</h2>
            </div>
            <div className="about-text-container">
            <div className="about-text-innerContainer">
                <div className="about-text-iconContainer">
                    <FaDotCircle className="about-text-icon" />
                </div>
                <p className="about-text-p-container">퍼스널컬러의 의미</p>
            </div>
            <div className="about-text-innerContainer">
                <div className="about-text-iconContainer">
                    <FaDotCircle className="about-text-icon"/>
                </div>
                <p className="about-text-p-container">퍼스널컬러의 의미</p>
            </div>
            <div className="about-text-innerContainer">
                <div className="about-text-iconContainer">
                    <FaDotCircle className="about-text-icon"/>
                </div>
                <p className="about-text-p-container">퍼스널컬러의 의미</p>
            </div>
            </div>
        </div>
    )
}
export default About;