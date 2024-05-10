import { useState, useEffect } from 'react';
import { Steps } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import './StepBar.scss';

function StepBar({ currentComponent, onChange, isLastComponent, handlePrevious, handleNext }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="step-bar">
            <div className="control-button">
                <button className={currentComponent === 0 ? 'inactivate' : ''} id="btnPrev" onClick={handlePrevious}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <div className="control-step">
                    <Steps
                        type="navigation"
                        current={currentComponent}
                        onChange={onChange}
                        items={[{}, {}, {}, {}, {}, {}, { icon: <SendOutlined /> }]}
                        responsive={false}
                        size={isMobile ? 'small' : 'default'}
                    />
                </div>
                <button className={isLastComponent ? 'inactivate' : ''} id="btnNext" onClick={handleNext}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default StepBar;
