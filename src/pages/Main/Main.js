import React, { useEffect, useState } from 'react';
import './Main.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const MainTop = () => {
    const navigate = useNavigate(); // useNavigate()훅을 사용하여 페이지 이동

    const mainTestBtnClick = () => {
        navigate('/Personal');
    }
    return (
        <div className="mainTop common-flex">
            <div className="mainBoxAni"></div>
            <div className="mainBoxAni"></div>
            <div className="mainBoxAni"></div>
            <div className="mainBoxAni"></div>
            <div className="main-test-container common-flex">

                <p className="main-test-text">What's your Personal Color?</p>
                <button className="main-test-Btn" onClick={mainTestBtnClick}>Personal Test</button>
            </div>
        </div>
    )
}
const MainBottom = () => {
    return (
        <div className="mainBottom">

        </div>
    )
}
const Main = () => {

    return (
        <div>
            <MainTop></MainTop>
            <MainBottom></MainBottom>
        </div>
    )
}
export default Main;