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
        <div className="mainPage common-flex">
            <div className="main-test-container common-flex">
                <p className="main-test-text">What's your Personal Color?</p>
                <p className="main-test-text2">나를 더욱 돋보여줄 나만의 퍼스널 컬러가 궁금하다면, 아래 버튼을 클릭하여 확인 해보세요!</p>
                <button className="main-test-Btn" onClick={mainTestBtnClick}>Personal Test</button>
            </div>
        </div>
    )
}

const MainSecondPage = () => {

    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);

    // spring이 화면에 보이면 애니메이션 시작
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
            }
        }, { threshold: 0.5 });

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        }
    }, [])

    return (
        <div className="mainSecond common-flex">
            <div className="mainSecond-text-box">
                <p className="mainSecond-text">Personal Color</p>
                <p>계절별로 나뉘는 퍼스널 컬러를 확인 해보세요.</p>
            </div>
            <div className="common-flex">
                <motion.div
                    ref={divRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    className="mainSecond-box common-flex"
                >

                    <div className="mainSecond-box-inner">

                        <div><button>go</button></div>
                        <p>Spring</p>
                    </div>
                </motion.div>

                <motion.div
                    ref={divRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mainSecond-box common-flex"
                >
                    <p>Summer</p>
                </motion.div>

                <motion.div
                    ref={divRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mainSecond-box common-flex"
                >
                    <p>Fall</p>
                </motion.div>

                <motion.div
                    ref={divRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mainSecond-box common-flex"
                >
                    <p>Winter</p>
                </motion.div>
            </div>
        </div>
    )
}

const Main = () => {
    return (
        <div>
            <MainPage />
            <MainSecondPage />
        </div>
    )
}

export default Main;

