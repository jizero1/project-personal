import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Personal from '../Personal/Personal';

const Main = () => {
    const navigate = useNavigate(); // useNavigate()훅을 사용하여 페이지 이동

    const mainTestBtnClick = () => {
        navigate('/Personal');
    }
    const mainCircleClick = () => {
        navigate('/About');
    }
    return (
        <div className="main common-flex">
            <div className="main-test-container common-flex">
                <p className="main-test-text">What's your Personal Color?</p>
                <button className="main-test-Btn" onClick={mainTestBtnClick}>Personal Test</button>
            </div>
            <div className="main-circle-outContainer common-flex">
            <div className="main-circle-innerContainer">
                <div className="main-circle main-circle-leftup common-flex" onClick={mainCircleClick}>
                    <p className="main-circle-text">봄</p>
                </div>
                <div className="main-circle main-circle-leftdown common-flex" onClick={mainCircleClick}>
                    <p className="main-circle-text">가을</p>
                </div>
                <div className="main-circle main-circle-rightup common-flex" onClick={mainCircleClick}>
                    <p className="main-circle-text">여름</p>
                </div>
                <div className="main-circle main-circle-rightdown common-flex" onClick={mainCircleClick}>
                    <p className="main-circle-text">겨울</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Main;