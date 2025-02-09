import React, { useState } from 'react';

import './About.css';

const About = () => {
    // 기본 상태를 'personalMean'으로 하여, '퍼스널컬러의 의미'를 표시하도록 설정
    const [menuView, setMenuView] = useState('personalMean');

    // 메뉴 클릭시 상태를 변경하는 함수
    const menuClick = (menu) => {
        setMenuView(menu);
    }
    return (
        <div className="about">
            <div className="about-top">
                <p className="about-top-text">About</p>
                <hr className="about-top-hr"></hr>
            </div>
            <div className="about-container">
                <nav className="about-nav">
                    <li className="about-nav-li" onClick={() => menuClick('personalMean')}>퍼스널 컬러의 의미</li>
                    <li className="about-nav-li" onClick={() => menuClick('personalImportant')}>퍼스널 컬러의 중요성</li>
                    <li className="about-nav-li" onClick={() => menuClick('personalType')}>퍼스널 컬러의 종류</li>
                    <li className="about-nav-li" onClick={() => menuClick('personalEx')}>퍼스널 컬러의 활용 예</li>
                </nav>
                {menuView === 'personalMean' && (
                    <div className="about-box">
                        <p>퍼스널 컬러의 의미</p>
                        <hr></hr>
                        <p>
                            퍼스널 컬러는 개인의 자연적인 특성에 맞는 색을 의미합니다. <br />
                            사람마다 어울리는 색이 다르고, 이는 피부 톤, 눈동자 색, 머리카락 색 등 자연적인 특성에 따라 결정 됩니다.<br />
                            퍼스널 컬러는 단순하게 '색상'이 아니라 자신을 더 돋보이게 하고, 조화를 이루는 색을 찾는 과정 입니다<br />
                        </p>
                    </div>
                )}

                {menuView === 'personalImportant' && (
                    <div className="about-box">
                        <p>퍼스널 컬러의 중요성</p>
                        <hr></hr>
                        <p>(이모티콘)자기 표현</p>
                        <p>자신에게 어울리는 색을 활용하면, 외모가 더욱 돋보이게 되고 자신감을 높일 수 있습니다.</p>
                        <p>(이모티콘)스타일링</p>
                        <p>의상, 메이크업, 액세서리 등에서 자신에게 맞는 색을 사용 함으로써 더욱 스타일리시하게 보일 수 있습니다.</p>
                        <p>(이모티콘)인상 관리</p>
                        <p>특정 색은 특정 이미지를 전달하는데, 퍼스널컬러를 잘 활용하면 첫인상을 개선하는 데 도움이 됩니다.</p>
                    </div>
                )}
                {menuView === 'personalType' && (
                    <div className="about-box">
                        <p>퍼스널 컬러의 종류</p>
                        <hr></hr>
                        <div>
                            <div><p>봄</p></div>
                            <p>
                                따듯한 햇살처럼 밝고 경쾌한 느낌의 색<br />
                                ex. 밝은 핑크, 옅은 블루
                            </p>
                        </div>
                        <div>
                            <div><p>봄</p></div>
                            <p>
                                따듯한 햇살처럼 밝고 경쾌한 느낌의 색<br />
                                ex. 밝은 핑크, 옅은 블루
                            </p>
                        </div>
                        <div>
                            <div><p>여름</p></div>
                            <p>
                                시원하고 부드러운 색<br />
                                ex. 라벤더, 민트, 연청색
                            </p>
                        </div>
                        <div>
                            <div><p>봄</p></div>
                            <p>
                                따듯한 금빛과 자연의 색<br />
                                ex. 카멜, 브라운, 올리브
                            </p>
                        </div>
                        <div>
                            <div><p>봄</p></div>
                            <p>
                                강렬하고 선명한 색<br />
                                ex. 블랙, 화이트, 차콜 그레이
                            </p>
                        </div>
                    </div>
                )}
                {menuView === 'personalEx' && (
                    <div className="about-box">
                        <p>퍼스널 컬러의 활용 예</p>
                        <hr></hr>
                        <p>
                            퍼스널 컬러는 패션 뿐만 아니라, 화장품, 홈 인테리어, 마케팅 등 다양한 분야에서 활용 됩니다. <br />
                            예를들어, 마케팅 에서는 브랜드의 이미지를 강화하기 위해 특정 색을 선택하는 데 퍼스널 컬러의 이론을 이용하기도 합니다.
                        </p>
                    </div>
                )}
            </div>
        </div >
    )
}
export default About;