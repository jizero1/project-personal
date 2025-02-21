import React, { useEffect, useState, useRef } from 'react';
import './Main.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const MainPage = () => {
    const navigate = useNavigate(); // useNavigate()훅을 사용하여 페이지 이동

    const mainTestBtnClick = () => {
        navigate('/Personal');
    }

    return (
        <div className="mainPage-container">
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

