import React, { useState } from 'react';
import './Main.css';
import { BrowserRouter as useNavigate } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

const MainPage = () => {
    const navigate = useNavigate(); // useNavigate()훅을 사용하여 페이지 이동

    const mainTestBtnClick = () => {
        navigate('/Personal');
    }

    return (
        <div className="mainPage-container common-flex">
            <div className="mainPage-text-container common-flex">
                <h1 className="mainPage-text-h1">What's your Personal Color?</h1>
                <p className="mainPage-text-p">나를 표현하는 퍼스널 컬러가 궁금하다면, 지금 바로 테스트 해보세요!</p>
                <div className="mainPage-text-icon-container common-flex">
                    <FaAngleDown className="mainPage-text-icon" />
                </div>
                <button onClick={mainTestBtnClick}className="mainPage-text-btn">Personal Test</button>
            </div>
        </div>
    )
}
const Main = () => {
    return (
        <div>
            <MainPage />
        </div>
    )
}

export default Main;

