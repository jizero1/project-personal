import React, { useState, useEffect, useReducer } from 'react';
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
            question: '질문 4. 일상에서 좋아하는 액세서리 색상은 무엇인가요?',
            option1: '밝은 금색 또는 연한 로즈골드',
            option2: '짙은 금색, 브론즈 또는 구리 색상',
        },
        {
            question: '질문 5. 자주 입는 옷의 색상은 어떤 톤인가요?',
            option1: '깊고 어두운 색(예: 다크그린, 머스타드, 다홍)',
            option2: '화사하고 밝은 색(예: 베이지, 코랄, 연보라',
        },
        {
            question: '질문 6. 햇살 아래에서 피부톤은 어떤가요?',
            option1: '부드럽고 따뜻한 갈색 톤',
            option2: '따듯하고 밝은 금빛 톤',
        },
    ];

    const nextCoolTest = [
        {
            question: '질문 4. 피부 톤을 어떻게 설명 할 수 있나요?',
            option1: '차가운 핑크 또는 푸른 기운이 감도는 피부',
            option2: '매우 하얗고 차가운 피부톤 또는 어둡지만 차가운 기운이 감도는 피부톤',
        },
        {
            question: '질문 5. 여름에 가장 좋아하는 옷 색상은 무엇인가요?',
            option1: '강렬한 색의 여름 의상 (예: 선명한 빨간색, 쨍한 네이비 블루)',
            option2: '가벼운 느낌에 색감있는 여름 색상 (예: 라이트 블루, 라이트그린, 옅은 핑크)',
        },
        {
            question: '질문 6. 어떤 액세서리 색이 더 잘어울리나요?',
            option1: '흑마, 차가운 금속 소재의 액세서리',
            option2: '실버, 화이트 골드, 화이트 베이스의 주얼리',
        },
    ];

    // 웜/쿨을 구분하고, 웜/쿨의 세부테스트 진행 및 선택옵션 저장 함수입니다.
    // 클릭된 옵션에 따라 상태를 업데이트하고, 모든 테스트가 끝났을때 지정된 상태(trueOrFalse)를 설정합니다.
    const handleTestSelection = (e, testName, testNumberState, selectedNumberState, setSelectedNumberState, setTestState, trueOrFalse) => {
        const click = e.target.innerText;
        // 선택한 옵션 저장
        if (click === testName[testNumberState].option1) {
            selectedNumberState(pervSelected => ([...pervSelected, 1]));
        } else if (click === testName[testNumberState].option2) {
            selectedNumberState(prevSelected => ([...prevSelected, 2]));
        }
        // 옵션 선택후, 다음 질문지로 이동
        setSelectedNumberState(prevTestNumber => {
            const newTestNumber = prevTestNumber + 1;
            if (newTestNumber >= testName.length) {
                setTestState(trueOrFalse);
                return prevTestNumber;
            }
            return newTestNumber;
        })
    }
    // 웜/쿨 구분 테스트 진행
    const handleWarmCoolTest = (e) => {
        handleTestSelection(e, test, testNumber, setSelectedNumber, setTestNumber, setTest1, false);
    }
    // 웜톤의 세부 테스트 진행
    const handleWarmToneTest = (e) => {
        handleTestSelection(e, nextWarmTest, warmTestNumber, setWarmSelectedNumber, setWarmTestNumber, setSubmit, true)
    }
    // 쿨톤의 세부 테스트 진행
    const handleCoolToneTest = (e) => {
        handleTestSelection(e, nextCoolTest, coolTestNumber, setCoolSelectedNumber, setCoolTestNumber, setSubmit, true)
    }


    // 웜/쿨 구분 테스트 및 세부 테스트시, 사용자가 선택한 옵션에 따라 테스트 결과를 저장합니다.
    const testConfig = {
        patterns1: [
            [1, 2, 2], [1, 2, 1], [1, 1, 2], [2, 2, 2]
        ],
        patterns2: [
            [2, 1, 2], [2, 1, 1], [2, 2, 1], [1, 1, 1]
        ]
    }

    // 웜/쿨 구분 테스트
    useEffect(() => {
        const isPatterns1 = testConfig.patterns1.some(pattern => JSON.stringify(pattern) === JSON.stringify(selectedNumber));
        const isPatterns2 = testConfig.patterns2.some(pattern => JSON.stringify(pattern) === JSON.stringify(selectedNumber));

        if (testNumber === 2) {
            if (isPatterns1) {
                console.log("웜톤 입니다.");
                setWarmTest(true);
            } else if (isPatterns2) {
                console.log("쿨톤 입니다.");
                setCoolTest(true);
            }
        }
    }, [testNumber, selectedNumber]);


    // 웜톤 세부 테스트
    useEffect(() => {

        const isPatterns1 = testConfig.patterns1.some(pattern => JSON.stringify(pattern) === JSON.stringify(warmSelectedNumber));
        const isPatterns2 = testConfig.patterns2.some(pattern => JSON.stringify(pattern) === JSON.stringify(warmSelectedNumber));

        if (warmTestNumber === 2) {
            if (isPatterns1) {
                console.log("봄웜톤 입니다.");
                setSubmitWarmCool("spring");
            } else if (isPatterns2) {
                console.log("가을웜톤 입니다.");
                setSubmitWarmCool("fall");
            }
        }
    }, [warmTestNumber, warmSelectedNumber]);

    // 쿨톤 세부 테스트
    useEffect(() => {
        const isPatterns1 = testConfig.patterns1.some(pattern => JSON.stringify(pattern) === JSON.stringify(coolSelectedNumber));
        const isPatterns2 = testConfig.patterns2.some(pattern => JSON.stringify(pattern) === JSON.stringify(coolSelectedNumber));

        if (coolTestNumber === 2) {
            if (isPatterns1) {
                console.log("여름쿨톤 입니다.");
                setSubmitWarmCool("summer");
            } else if (isPatterns2) {
                console.log("겨울쿨톤 입니다.");
                setSubmitWarmCool("winter");
            }
        }
    }, [coolTestNumber, coolSelectedNumber]);

    // --------------------- 퍼스널 컬러 테스트 시작 화면 -------------------
    // 퍼스널 컬러 테스트 진행방법과 '시작하기' 버튼을 보여줍니다.
    // '시작하기'버튼을 누르면 테스트가 시작됩니다.
    const TestStart = () => {
        return (
            <div className="personal-test-container">
                <p className="personal-start">Personal Test</p>
                <p className="personal-start-text">하나의 질문당 2가지의 선택지가 주어집니다.
                    <br /> 선택지 중 한가지를 선택하면 다음 질문으로 넘어갑니다.
                    <br /> 총 6개의 질문에 선택을 완료하면, 결과 확인이 가능합니다.
                </p>
                <button className="personal-start-btn" onClick={personalTestStart}>시작하기</button>
            </div>
        )
    }

    // -------------------- 웜/쿨 구분 테스트 화면 -----------------------
    // 웜/쿨 큰 틀을 구분하기 위한 테스트 화면입니다.
    const PersonalTest = () => {
        return (
            <div className="personal-test-container">
                <p className="personal-test-question">{test[testNumber].question}</p>
                <div className="personal-test-option">
                    <div className="personal-test" onClick={handleWarmCoolTest}>
                        <p>{test[testNumber].option1}</p>
                    </div>
                    <p className="personal-test-vs">vs</p>
                    <div className="personal-test" onClick={handleWarmCoolTest}>
                        <p>{test[testNumber].option2}</p>
                    </div>
                </div>
            </div>
        )
    }

    //-------------------- 웜톤 세부 테스트 화면 --------------------
    // 웜톤의 세부 테스트를 위한 테스트 화면입니다.
    const PersonalWarmTest = () => {
        return (
            <div className="personal-test-container">
                <p className="personal-test-question">{nextWarmTest[warmTestNumber].question}</p>
                <div className="personal-test-option">
                    <div className="personal-test" onClick={handleWarmToneTest}>
                        <p>{nextWarmTest[warmTestNumber].option1}</p>
                    </div>
                    <p className="personal-test-vs">vs</p>
                    <div className="personal-test" onClick={handleWarmToneTest}>
                        <p>{nextWarmTest[warmTestNumber].option2}</p>
                    </div>
                </div>
            </div>
        )
    }

    //-------------------- 쿨톤 세부 테스트 화면 --------------------
    // 쿨톤의 세부 테스트를 위한 테스트 화면입니다.
    const PersonalCoolTest = () => {
        return (
            <div className="personal-test-container">
                <p className="personal-test-question">{nextCoolTest[coolTestNumber].question}</p>
                <div className="personal-test-option">
                    <div className="personal-test" onClick={handleCoolToneTest}>
                        <p>{nextCoolTest[coolTestNumber].option1}</p>
                    </div>
                    <p className="personal-test-vs">vs</p>
                    <div className="personal-test" onClick={handleCoolToneTest}>
                        <p>{nextCoolTest[coolTestNumber].option2}</p>
                    </div>
                </div>
            </div>
        )
    }



    // ---------------------------- 퍼스널 컬러 테스트 결과화면 ---------------------------
    // 퍼스널 컬러 테스트가 완료되면 결과를 보여주는 화면입니다.
    const ColorDetail = ({ tone }) => {
        const toneDetails = {
            'spring': {
                yourTone: "봄웜톤 (Spring Warm Tone)",
                yourTone2: "봄 웜톤",
                explain: "봄웜톤은 밝고 따뜻한 색조가 특징입니다. 피부 톤은 보통 매우 밝고, 황금빛이나 복숭아색이 돌며, 주로 피부가 따뜻하고 생기 있는 느낌을 줍니다. 이 톤의 사람들은 자연스럽게 밝고 따뜻한 느낌을 가집니다.",
                colors: ['spring-color-1', 'spring-color-2', 'spring-color-3', 'spring-color-4'],
                clothes: "코랄, 피치, 아이보리, 베이지, 연한 노랑, 연한 녹색 같은 밝고 따듯한 색조의 의류를 입으면, 자연스럽고 생기있어 보일 수 있습니다.",
                makeup: "코랄핑크, 살몬핑크, 피치핑크 같은 따뜻한 색조의 메이크업을 추천",
                celebrities: "박보영 / 수지 / 아이유 / 이제훈 / 이종석 / 정해인",
            },
            'summer': {
                yourTone: "여름쿨톤 (Summer Cool Tone)",
                yourTone2: "여름 쿨톤",
                explain: "여름쿨톤은 차가운, 부드러운 색조가 특징입니다. 피부 톤은 아주 밝고 차가운 느낌을 주며, 붉거나 핑크색이 감도는 경우가 많습니다. 여름쿨톤은 여름의 시원하고 차가운 느낌을 주는 색상을 잘 소화합니다.",
                colors: ['summer-color-1', 'summer-color-2', 'summer-color-3', 'summer-color-4'],
                clothes: "파스텔 블루, 라벤더, 라이트 핑크, 쿨 블루같은 부드러우면서 차갑고 청량한 색상을 강조하면 더욱 세련된 느낌을 줄 수 있습니다.",
                makeup: "소프트핑크, 베리핑크 같은 핑크 컬러 메이크업을 추천", 
                celebrities: "손예진 / 태연 / 장원영 / 송강 / 조인성 / 송중기",
            },
            'fall': {
                yourTone: "가을웜톤 (Fall Warm Tone)",
                yourTone2: "가을 웜톤",
                explain: "가을웜톤은 풍성하고 따뜻한 색조가 특징입니다. 피부는 대체로 황금빛 또는 붉은빛이 감도는 톤을 가집니다. 주로 자연에서 볼 수 있는 가을의 색상들이 잘 어울리며, 깊고 따뜻한 느낌을 강조합니다.",
                colors: ['fall-color-1', 'fall-color-2', 'fall-color-3', 'fall-color-4'],
                clothes: "딥 오렌지, 카키, 브라운, 다크그린, 버건디, 카멜과 같은 깊이있는 따듯한 컬러가 피부톤과 잘 어울리며, 브라운과 다크그린, 카멜 컬러는 고급스러우면서도 안정감 있는 느낌을 주고, 버건디는 풍부한 느낌을 더해주어 가을 시즌에 어울리는 완벽한 색상입니다.",
                makeup: "브릭레드, 다크오렌지, 코랄레드 같은 메이크업 컬러를 추천",
                celebrities: "제니 / 한예슬 / 김유정 / 공유 / 하정우 / 서강준",
            },
            'winter': {
                yourTone: "겨울쿨톤 (Winter Cool Tone)",
                yourTone2: "겨울 쿨톤",
                explain: "겨울쿨톤은 강렬하고 차가운 색조가 특징입니다. 피부는 차갑고 밝은 색조가 도는 경우가 많으며, 피부 톤이 매우 밝고 거의 투명한 느낌을 줍니다. 겨울쿨톤은 강한 색상들이 잘 어울립니다.",
                colors: ['winter-color-1', 'winter-color-2', 'winter-color-3', 'winter-color-4'],
                clothes: "다크블루, 블랙, 차가운 레드, 화이트, 차콜그레이, 네이비 블루 컬러 추천. 차갑고 강렬한 색상은 겨울쿨톤의 차갑고 밝은 피부 톤과 강한 대비를 만들어 피부가 더욱 돋보이게 합니다. 이 색상들은 피부의 선명함과 고급스러움을 강조하며, 스타일링 시 세련되고 모던한 느낌을 줍니다.",
                makeup: "강렬한 레드, 체리레드, 플럼 컬러의 메이크업 컬러를 추천",
                celebrities: "카리나 / 임지연 / 김혜수 / 김수현 / 이수혁 / 우도환",
            }
        }

        return (
            <div className="submit-container">
                <div className="personal-test-submit">
                    <p>당신의 퍼스널 컬러는 <span>{toneDetails[tone]?.yourTone}</span> 입니다.</p>
                </div>
                {toneDetails[tone] &&
                    <div className="personal-detail">
                        <p className="color-explain">{toneDetails[tone]?.explain}</p>
                        <div className="color-container">
                            <p className="color-best">추천하는 컬러 팔레트</p>
                            {toneDetails[tone]?.colors.map((color, index) => (
                                <div key={index} className={`color ${color}`}></div>
                            ))}
                        </div>
                        <p className="color-styleTip">스타일링 팁</p>
                        <div className="color-styleContainer">
                            <div className="color-style color-style-1">
                                <p className="color-style-sort">의류</p>
                                <p className="color-style-text">{toneDetails[tone]?.clothes}</p>
                            </div>
                            <div className="color-style color-style-2">
                                <p className="color-style-sort">메이크업</p>
                                <p className="color-style-text">{toneDetails[tone]?.makeup}</p>
                                <p className="color-style-sort">참고하면 좋은 "{toneDetails[tone]?.yourTone2}" 연예인</p>
                                <p className="color-style-text">{toneDetails[tone]?.celebrities}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>

        )
    }
    return (
        <div className="personal-mainContainer">
            {/* ----------------- 퍼스널 컬러 테스트 시작 화면 -----------------  */}
            {testStart === false &&
                <TestStart></TestStart>
            }

            {/* ----------------- 웜/쿨 구분 테스트 화면 ----------------- */}
            {testStart && submit === false && test1 === true &&
                <PersonalTest></PersonalTest>
            }
            {/* ----------------- 웜톤 세부 테스트 화면 ----------------- */}
            {testStart && submit === false && test1 === false && warmTest === true &&
                <PersonalWarmTest></PersonalWarmTest>
            }
            {/* ----------------- 쿨톤 세부 테스트 화면 ----------------- */}
            {testStart && submit === false && test1 === false && coolTest === true &&
                <PersonalCoolTest></PersonalCoolTest>
            }
            {/* ----------------- 결과 화면 ----------------- */}
            {submit &&
                <ColorDetail tone={submitWarmCool}></ColorDetail>
            }
        </div>

    )
}

export default Personal;