import { useState, useEffect } from 'react';
import { Steps } from 'antd';
import { SendOutlined, CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
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

    const [show, setShow] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = scrollPos > currentScrollPos;
            setShow(visible);
            setScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);

    useEffect(() => {
        const handleClick = (event) => {
            const excludedSelectors = [
                '.series-cover-item',
                '.ranobe-item',
                '.publisher-item',
                '.filter-container input',
                '.filter-container button',
                '.btn-container button',
                '.result-publisher',
                '.result-item',
                '.step-bar',
                '.series-column-search',
                '.ant-popover',
                '.ant-checkbox',
            ];

            const isExcluded = excludedSelectors.some((selector) => event.target.closest(selector));
            if (!isExcluded) {
                setShow((prevShow) => !prevShow);
            }
        };
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [show]);

    return (
        <div className={`step-bar ${show ? '' : 'hidden'}`}>
            <div className="control-button">
                <button className={currentComponent === 0 ? 'inactivate' : ''} id="btnPrev" onClick={handlePrevious}>
                    <CaretLeftFilled />
                </button>
                <div className="control-step">
                    <Steps
                        type="navigation"
                        current={currentComponent}
                        onChange={onChange}
                        items={[{}, {}, {}, {}, { icon: <SendOutlined /> }]}
                        responsive={false}
                        size={isMobile ? 'small' : 'default'}
                    />
                </div>
                <button className={isLastComponent ? 'inactivate' : ''} id="btnNext" onClick={handleNext}>
                    <CaretRightFilled />
                </button>
            </div>
        </div>
    );
}

export default StepBar;
