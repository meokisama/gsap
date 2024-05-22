import React, { useEffect, useState } from 'react';
import { CaretUpFilled } from '@ant-design/icons';
import { SplashScreen, DocumentTitle, Footer } from 'components/common';
import { Banner, LeaderBoardTable } from 'components/leaderboard';
import { ROUTES } from 'constants';

function LeaderBoard() {
    DocumentTitle('Bảng Tổng - Bảng Xếp Hạng Light Novel Việt Nam');
    //Scroll to top
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => setIsVisible(window.scrollY > 400);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //Hide Splash Screen on small screen
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1000);
    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isWideScreen && <SplashScreen />}
            <div>
                <Banner />
                <LeaderBoardTable />
                <Footer text="Trang Chủ" to={ROUTES.HOME} />
                <button
                    id="toTop"
                    onClick={scrollToTop}
                    style={{
                        display: isVisible ? 'flex' : 'none',
                    }}
                >
                    <CaretUpFilled />
                </button>
            </div>
        </div>
    );
}

export default LeaderBoard;
