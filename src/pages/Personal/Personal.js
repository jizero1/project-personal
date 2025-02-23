import React, { useState } from 'react';
import './Personal.css';

const Personal = () => {
    const [testStart, setTestStart] = useState(false);
    const personalTestStart = () => {
        setTestStart(!testStart);
        console.log(testStart);
    }

    const [testNumber, setTestNumber] = useState(0);
    const test = [
        {
            question: '질문 1. 당신에게 잘 어울리는 액세서리 색상은?',
            option1: '골드',
            option2: '실버',
        },
        {
            question: '질문 2. ~~~',
            option1: '옵션1',
            option2: '옵션2',
        },
    ];
    const [submit, setSubmit] = useState(false);
    const nextTest = () => {
        setTestNumber(prevTestNumber => {
            const newTestNumber = prevTestNumber + 1;
            if (newTestNumber >= test.length) {
                setSubmit(true);

                return prevTestNumber;
            }
            return newTestNumber;
        });
    }
    return (
        <div className="personal-mainContainer">
            {testStart === false &&
                <div className="personal-test-container">
                    <p>Personal Test</p>
                    <p>하나의 질문당 2가지의 선택지가 주어집니다.</p>
                    <p>선택을 하면 다음 질문으로 넘어갑니다.</p>
                    <p>총 8개의 질문에 선택을 완료하면 결과나 나타납니다.</p>
                    <button onClick={personalTestStart}>시작하기</button>
                </div>
            }
            {testStart && submit === false &&
                <div className="personal-test-container">
                    <p className="personal-test-question">{test[testNumber].question}</p>
                    <div className="personal-test-option">
                        <div className="personal-test" onClick={nextTest}>
                            <p>{test[testNumber].option1}</p>
                        </div>
                        <div className="personal-test" onClick={nextTest}>
                            <p>{test[testNumber].option2}</p>
                        </div>
                    </div>
                </div>
            }
            {submit && 
            <div className="personal-test-container">
                <p>결과가 나왔습니다.</p>
            </div>
            }
        </div>
    )
}

export default Personal;