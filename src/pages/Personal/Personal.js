import React, { useState, useEffect } from 'react';
import './Personal.css';

const Personal = () => {
    const [testStart, setTestStart] = useState(false);
    const personalTestStart = () => {
        setTestStart(!testStart);
        console.log(testStart);
    }

    const [testNumber, setTestNumber] = useState(0);
    // 사용자가 선택한 option을 번호로 저장하기위한 변수
    const [selectedNumber, setSelectedNumber] = useState([]);
    const test = [
        {
            id: 0,
            question: '질문 1. 당신은 어떤 색상의 액세서리가 더 잘 어울리는 편인가요?',
            option1: '골드',
            option2: '실버',
        },
        {
            id: 1,
            question: '질문 2. 햇볕에 노출 된 후, 피부 반응은 어떤가요?',
            option1: '피부가 붉어짐',
            option2: '피부가 금방 갈색으로 변함',
        },
        {
            id: 2,
            question: '질문 3. 손등의 핏줄 색상은 어떤 색상을 띄고 있나요?',
            option1: '파란색 또는 보라색',
            option2: '녹색 또는 초록색',
        },
        {
            id: 3,
            question: '질문 4. 웜',
            option1: '파란색 또는 보라색',
            option2: '녹색 또는 초록색',
        },
        {
            id: 4,
            question: '질문 5. 쿨',
            option1: '파란색 또는 보라색',
            option2: '녹색 또는 초록색',
        },
    ];

    const [submit, setSubmit] = useState(false);
    const nextTest = (e) => {
        // 현재 질문의 id
        const testId = test[testNumber].id;
        // 현재 질문에서 사용자가 선택한 option이 뭔지 찾기
        const click = e.target.innerText;
        // localStorage.setItem(testId,click); // 클릭한거 저장

        // -------------------------------------------------
        // 클릭한 선택지가 option1일경우, 로컬스토리지에 testId와 1 저장
        // 클릭한 선택지가 option2일경우, 로컬스토리지에 testId와 2 저장
        // testId가 2가 되면, 로컬스토리지에서 testId를 꺼냄
        // 꺼낸 데이터가 1,2,2 면 웜톤이니까 웜톤 선택지로 이동
        // 이런식으로 꺼낸 데이터에 따라 웜,쿨로 선택지로 이동함
        //---------------------------------------------------
        
        // 클릭한게 첫번째 옵션일경우,
        // if (click === test[testNumber].option1) {
        //     // setSelectedNumber(prevSelected => ([...prevSelected, 1]));
        //     localStorage.setItem('testId',click); // 클릭한거 저장
        //     // 클릭한게 두번째 옵션일경우,
        // } else if (click === test[testNumber].option2) {
        //     setSelectedNumber(prevSelected => ([...prevSelected, 2]));
        // }

        console.log("selectedNumber" + selectedNumber);
        // 사용자가 선택지에서 옵션 클릭시, 다음 선택지로 이동
        setTestNumber(prevTestNumber => {
            const newTestNumber = prevTestNumber + 1;
            // 모든 질문이 끝나면, submit을 true로 변경하여 결과창을 보여줌
            if (newTestNumber >= test.length) {
                setSubmit(true);
                return prevTestNumber;
            }
            return newTestNumber;
        });
    }


    //       // 1번부터 3번까지의 질문으로 웜 vs 쿨을 구분함.

    // if (testNumber === 2) {
    //     if (JSON.stringify(selectedNumber) === JSON.stringify([1, 2, 2]) ||
    //         JSON.stringify(selectedNumber) === JSON.stringify([1, 2, 1]) ||
    //         JSON.stringify(selectedNumber) === JSON.stringify([1, 1, 2]) ||
    //         JSON.stringify(selectedNumber) === JSON.stringify([2, 2, 2])) {
    //         console.log("웜톤 입니다.");
    //         // setTestNumber(4);
    //     } else if (JSON.stringify(selectedNumber) === JSON.stringify([2, 1, 1]) ||
    //         JSON.stringify(selectedNumber) === JSON.stringify([2, 1, 2]) ||
    //         JSON.stringify(selectedNumber) === JSON.stringify([2, 2, 1]) ||
    //         JSON.stringify(selectedNumber) === JSON.stringify([1, 1, 1])) {
    //         console.log("쿨톤 입니다.");
    //     }
    // }

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
                            <p>{test[testNumber].option1}</p>
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