import React, { useState } from 'react';

import './About.css';

const About = () => {
    // 기본 상태를 'personalMean'으로 하여, '퍼스널컬러의 의미'를 표시하도록 설정
    const [menuView, setMenuView] = useState('personalMean');

    // 메뉴 클릭시 상태를 변경하는 함수
    const menuClick = (menu) => {
        setMenuView(menu);
    }
    return (
        <div className="about">
            <div className="about-top">
                <p className="about-top-text">About</p>
                <hr className="about-top-hr"></hr>
            </div>
            <div className="about-container">
                <nav className="about-nav">
                    <li className="about-nav-li" onClick={() => menuClick('personalMean')}>퍼스널 컬러의 의미</li>
                    <li className="about-nav-li" onClick={() => menuClick('personalType')}>퍼스널 컬러의 종류</li>
                </nav>
                {menuView === 'personalMean' && (
                    <div className="about-box">
                        퍼스널 컬러의 의미 ~~
                    </div>
                )}

                {menuView === 'personalType' && (
                    <div className="about-box">
                        퍼스널 컬러의 종류 ~~
                    </div>
                )}
            </div>
        </div >
    )
}
export default About;