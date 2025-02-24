import React, { useState, useEffect } from 'react';
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
            question: '질문 1. 당신은 어떤 색상의 액세서리가 더 잘 어울리는 편인가요?',
            option1: '골드',
            option2: '실버',
        },
        {
            question: '질문 2. 햇볕에 노출 된 후, 피부 반응은 어떤가요?',
            option1: '피부가 붉어짐',
            option2: '피부가 금방 갈색으로 변함',
        },
        {
            question: '질문 3. 손등의 핏줄 색상은 어떤 색상을 띄고 있나요?',
            option1: '파란색 또는 보라색',
            option2: '녹색 또는 초록색',
        }
    ];
    const [submit, setSubmit] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState([]);

    const nextTest = (e) => {
        setTestNumber(prevTestNumber => {
            const newTestNumber = prevTestNumber + 1;
            if (newTestNumber >= test.length) {
                setSubmit(true);

                return prevTestNumber;
            }
            return newTestNumber;
        });
        // 사용자가 선택한 옵션을 selectedNumber에 저장함
        const click = e.target.innerText;
        const option1 = test[testNumber].option1;
        if (click === option1) {
            setSelectedNumber(prevSelected => ([...prevSelected, 1]));
        } else {
            setSelectedNumber(prevSelected => ([...prevSelected, 2]));
        }
    }
    useEffect(() => {
        console.log("저장된 숫자"+selectedNumber);
    },[selectedNumber]);
    
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