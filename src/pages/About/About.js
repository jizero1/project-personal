import React, { useState } from 'react';

import './About.css';
import { FaDotCircle, FaTags, FaAdjust, FaBuffer, FaBook } from "react-icons/fa";

const About = () => {
    
    return (
        <div className="about">
            <div className="about-title">
                <h2 className="about-title-h2">ABOUT</h2>
            </div>
            <div className="about-text-container">
                <div className="about-text-innerContainer about-1">
                    <div className="about-text-iconContainer">
                        <FaBook className="about-text-icon" />
                    </div>
                    <p className="about-text-p-subject">퍼스널컬러의 의미</p>
                    <p className="about-text-p-explan">퍼스널컬러는 개인의 피부톤, 눈동자, 머리카락 색에 어울리는 색상을 찾아 그 사람의 이미지를 더욱 돋보이게 하는 컬러 컨설팅입니다. 자신에게 어울리는 색상을 찾아 스타일링에 활용할 수 있습니다.</p>
                </div>
                <div className="about-text-innerContainer about-2">
                    <div className="about-text-iconContainer">
                        <FaBuffer className="about-text-icon" />
                    </div>
                    <p className="about-text-p-subject">퍼스널컬러의 종류</p>
                    <p className="about-text-p-explan">봄 웜톤, 여름 쿨톤, 가을 웜톤, 겨울 쿨톤으로 크게 나뉘며, 각각의 톤은 더 세분화된 특징을 가집니다. 각 유형별로 어울리는 색상과 스타일링 방법이 다릅니다.</p>
                    <div className="about-color-Container">
                        <p className="about-color-text">봄 웜톤</p>
                        <div className="color spring-color-1"></div>
                        <div className="color spring-color-2"></div>
                        <div className="color spring-color-3"></div>
                        <div className="color spring-color-4"></div>
                    </div>
                    <div className="about-color-Container">
                        <p className="about-color-text">여름 쿨톤</p>
                        <div className="color summer-color-1"></div>
                        <div className="color summer-color-2"></div>
                        <div className="color summer-color-3"></div>
                        <div className="color summer-color-4"></div>
                    </div>
                    <div className="about-color-Container">
                        <p className="about-color-text">가을 웜톤</p>
                        <div className="color fall-color-1"></div>
                        <div className="color fall-color-2"></div>
                        <div className="color fall-color-3"></div>
                        <div className="color fall-color-4"></div>
                    </div>
                    <div className="about-color-Container">
                        <p className="about-color-text">겨울 쿨톤</p>
                        <div className="color winter-color-1"></div>
                        <div className="color winter-color-2"></div>
                        <div className="color winter-color-3"></div>
                        <div className="color winter-color-4"></div>
                    </div>
                </div>
                <div className="about-text-innerContainer about-3">
                    <div className="about-text-iconContainer">
                        <FaAdjust className="about-text-icon" />
                    </div>
                    <p className="about-text-p-subject">퍼스널컬러의 활용</p>
                    <p className="about-text-p-explan">의류 선택, 메이크업, 헤어 스타일링 등 다양한 분야에서 활용할 수 있습니다. 자신에게 맞는 퍼스널컬러를 알면 쇼핑 시간을 줄이고 더 효율적인 스타일링이 가능합니다.</p>
                </div>
            </div>
        </div>
    )
}
export default About;