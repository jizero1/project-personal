import React from 'react';
import './Personal.css';

const Personal = () => {
    return (
        <div className="personal-mainContainer">
            <div className="personal-test-container">
                <p className="personal-test-question">질문 1. 당신은 어떤색상의 액세서리가 더 잘 어울리나요?</p>
                <div className="personal-test-option">
                    <div className="personal-test">
                        <p>골드</p>
                    </div>
                    <div className="personal-test">
                        <p>실버</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal;