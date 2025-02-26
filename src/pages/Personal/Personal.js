import React, { useState, useEffect } from 'react';
import './Personal.css';

const Personal = () => {

    // 테스트 시작 상태 저장
    const [testStart, setTestStart] = useState(false);

    // 최종 결과 화면 상태 저장 (true가되면, 최종 결과화면 보여줌)
    const [submit, setSubmit] = useState(false);

    // 웜/쿨 구분 테스트 넘기기 + 선택 option 저장
    const [testNumber, setTestNumber] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState([]); // option1 / option2 중 선택 옵션 저장

    // 웜톤의 세부 테스트 테스트 넘기기 + 선택 option 저장 (봄웜 or 가을웜)
    const [warmTestNumber, setWarmTestNumber] = useState(0);
    const [warmSelectedNumber, setWarmSelectedNumber] = useState([]);

    // 쿨톤의 세부 테스트 테스트 넘기기 + 선택 option 저장 (여름쿨 or 겨울쿨)
    const [coolTestNumber, setCoolTestNumber] = useState(0);
    const [coolSelectedNumber, setCoolSelectedNumber] = useState([]);

    // 웜/쿨 구분 테스트 완료시, false로 바꿔서 창 숨김
    const [test1, setTest1] = useState(true);

    // 웜/쿨 세부 테스트로 '이동'하기 위한 상태 저장
    const [warmTest, setWarmTest] = useState(false); // 웜톤 세부 테스트 상태 저장
    const [coolTest, setCoolTest] = useState(false); // 쿨톤 세부 테스트 상태 저장

    // 결과화면에서 어떤 텍스트를 보여줄지 저장 (웜/쿨 세부테스트 결과에 따라 다름)
    const [submitWarmCool, setSubmitWarmCool] = useState('');
    // 테스트 시작
    const personalTestStart = () => {
        setTestStart(!testStart);
    }

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
        },
    ];

    const nextWarmTest = [
        {
            question: '질문 4. 웜 질문 1',
            option1: '골드',
            option2: '실버',
        },
        {
            question: '질문 5. 웜 질문 2',
            option1: '골드',
            option2: '실버',
        },
        {
            question: '질문 6. 웜 질문 3',
            option1: '골드',
            option2: '실버',
        },
    ];

    const nextCoolTest = [
        {
            question: '질문 4. 쿨 질문 1',
            option1: '골드',
            option2: '실버',
        },
        {
            question: '질문 5. 쿨 질문 2',
            option1: '골드',
            option2: '실버',
        },
        {
            question: '질문 6. 쿨 질문 3',
            option1: '골드',
            option2: '실버',
        },
    ];

    // 웜/쿨 구분 테스트 진행
    const nextTest = (e) => {
        // 사용자가 클릭한 option의 텍스트 찾기
        const click = e.target.innerText;

        // 클릭한 option의 텍스트와 option1의 텍스트를 비교
        if (click === test[testNumber].option1) {
            setSelectedNumber(prevSelected => ([...prevSelected, 1]));
            // 클릭한 option의 텍스트와 option2의 텍스트를 비교
        } else if (click === test[testNumber].option2) {
            setSelectedNumber(prevSelected => ([...prevSelected, 2]));
        }

        // 그다음 선택지로 이동하기 위해 setTestNumber을 +1씩 증가
        setTestNumber(prevTestNumber => {
            const newTestNumber = prevTestNumber + 1;
            // 1번 ~ 3번까지 웜/쿨 구분테스트 완료되면, setTest1을 false로 바꿔서 웜/쿨 구분테스트 창 닫음
            if (newTestNumber >= test.length) {
                setTest1(false);
                return prevTestNumber;
            }
            return newTestNumber;
        });
    }

    // 웜톤의 세부 테스트 진행
    const nextTest2 = (e) => {
        const click = e.target.innerText;

        if (click === nextWarmTest[warmTestNumber].option1) {
            setWarmSelectedNumber(prevSelected => ([...prevSelected, 1]));
        } else if (click === nextWarmTest[warmTestNumber].option2) {
            setWarmSelectedNumber(prevSelected => ([...prevSelected, 2]));
        }

        setWarmTestNumber(prevTestNumber => {
            const newTestNumber = prevTestNumber + 1;
            if (newTestNumber >= nextWarmTest.length) {
                setSubmit(true);
                return prevTestNumber;
            }
            return newTestNumber;
        });
    }

    // 쿨톤의 세부 테스트 진행
    const nextTest3 = (e) => {
        const click = e.target.innerText;

        if (click === nextCoolTest[coolTestNumber].option1) {
            setCoolSelectedNumber(prevSelected => ([...prevSelected, 1]));
        } else if (click === nextCoolTest[coolTestNumber].option2) {
            setCoolSelectedNumber(prevSelected => ([...prevSelected, 2]));
        }

        setCoolTestNumber(prevTestNumber => {
            const newTestNumber = prevTestNumber + 1;
            if (newTestNumber >= nextCoolTest.length) {
                setSubmit(true);
                return prevTestNumber;
            }
            return newTestNumber;
        });
    }


    // 웜/쿨 구분 테스트시, 사용자가 선택한 option이 뭔지에 따라 웜or쿨 세부테스트로 이동
    useEffect(() => {
        if (testNumber === 2) {
            if (JSON.stringify(selectedNumber) === JSON.stringify([1, 2, 2]) ||
                JSON.stringify(selectedNumber) === JSON.stringify([1, 2, 1]) ||
                JSON.stringify(selectedNumber) === JSON.stringify([1, 1, 2]) ||
                JSON.stringify(selectedNumber) === JSON.stringify([2, 2, 2])) {
                console.log("웜톤 입니다.");
                setWarmTest(true);
            } else if (JSON.stringify(selectedNumber) === JSON.stringify([2, 1, 1]) ||
                JSON.stringify(selectedNumber) === JSON.stringify([2, 1, 2]) ||
                JSON.stringify(selectedNumber) === JSON.stringify([2, 2, 1]) ||
                JSON.stringify(selectedNumber) === JSON.stringify([1, 1, 1])) {
                console.log("쿨톤 입니다.");
                setCoolTest(true);
            }
        }
    }, [testNumber, selectedNumber]);

    // 웜톤의 세부 테스트시, 사용자가 선택한 option에 따라 결과가 달라짐
    useEffect(() => {
        if (warmTestNumber === 2) {
            if (JSON.stringify(warmSelectedNumber) === JSON.stringify([1, 2, 2]) ||
                JSON.stringify(warmSelectedNumber) === JSON.stringify([1, 2, 1]) ||
                JSON.stringify(warmSelectedNumber) === JSON.stringify([1, 1, 2]) ||
                JSON.stringify(warmSelectedNumber) === JSON.stringify([2, 2, 2])) {
                console.log("봄웜톤 입니다.");
                setSubmitWarmCool("봄웜톤 입니다.");
            } else if (JSON.stringify(warmSelectedNumber) === JSON.stringify([2, 1, 1]) ||
                JSON.stringify(warmSelectedNumber) === JSON.stringify([2, 1, 2]) ||
                JSON.stringify(warmSelectedNumber) === JSON.stringify([2, 2, 1]) ||
                JSON.stringify(warmSelectedNumber) === JSON.stringify([1, 1, 1])) {
                console.log("가을웜톤 입니다.");
                setSubmitWarmCool("가을웜톤 입니다.");
            }
        }
    }, [warmTestNumber, warmSelectedNumber]);

    // 쿨톤의 세부 테스트시, 사용자가 선택한 option에 따라 결과가 달라짐
    useEffect(() => {
        if (coolTestNumber === 2) {
            if (JSON.stringify(coolSelectedNumber) === JSON.stringify([1, 2, 2]) ||
                JSON.stringify(coolSelectedNumber) === JSON.stringify([1, 2, 1]) ||
                JSON.stringify(coolSelectedNumber) === JSON.stringify([1, 1, 2]) ||
                JSON.stringify(coolSelectedNumber) === JSON.stringify([2, 2, 2])) {
                console.log("여름쿨톤 입니다.");
                setSubmitWarmCool("여름쿨톤 입니다.");
            } else if (JSON.stringify(coolSelectedNumber) === JSON.stringify([2, 1, 1]) ||
                JSON.stringify(coolSelectedNumber) === JSON.stringify([2, 1, 2]) ||
                JSON.stringify(coolSelectedNumber) === JSON.stringify([2, 2, 1]) ||
                JSON.stringify(coolSelectedNumber) === JSON.stringify([1, 1, 1])) {
                console.log("겨울쿨톤 입니다.");
                setSubmitWarmCool("겨울쿨톤 입니다.");
            }
        }
    }, [coolTestNumber, coolSelectedNumber]);



    return (
        <div className="personal-mainContainer">
            {/* ----------------- 시작 화면 ----------------- */}
            {testStart === false &&
                <div className="personal-test-container">
                    <p>Personal Test</p>
                    <p>하나의 질문당 2가지의 선택지가 주어집니다.</p>
                    <p>선택을 하면 다음 질문으로 넘어갑니다.</p>
                    <p>총 8개의 질문에 선택을 완료하면 결과나 나타납니다.</p>
                    <button onClick={personalTestStart}>시작하기</button>
                </div>
            }
            {/* ----------------- 웜/쿨 구분 테스트 화면 ----------------- */}
            {testStart && submit === false && test1 === true &&
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
            {/* ----------------- 웜톤 세부 테스트 화면 ----------------- */}
            {testStart && submit === false && test1 === false && warmTest === true &&
                <div className="personal-test-container">
                    <p className="personal-test-question">{nextWarmTest[warmTestNumber].question}</p>
                    <div className="personal-test-option">
                        <div className="personal-test" onClick={nextTest2}>
                            <p>{nextWarmTest[warmTestNumber].option1}</p>
                        </div>
                        <div className="personal-test" onClick={nextTest2}>
                            <p>{nextWarmTest[warmTestNumber].option2}</p>
                        </div>
                    </div>
                </div>
            }
            {/* ----------------- 쿨톤 세부 테스트 화면 ----------------- */}
            {testStart && submit === false && test1 === false && coolTest === true &&
                <div className="personal-test-container">
                    <p className="personal-test-question">{nextCoolTest[coolTestNumber].question}</p>
                    <div className="personal-test-option">
                        <div className="personal-test" onClick={nextTest3}>
                            <p>{nextCoolTest[coolTestNumber].option1}</p>
                        </div>
                        <div className="personal-test" onClick={nextTest3}>
                            <p>{nextCoolTest[coolTestNumber].option2}</p>
                        </div>
                    </div>
                </div>
            }
            {/* ----------------- 결과 화면 ----------------- */}
            {submit &&
                <div className="personal-test-container">
                    <p>{submitWarmCool}</p>
                </div>
            }
        </div>
    )
}

export default Personal;