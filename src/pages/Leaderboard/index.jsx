import React, { useEffect, useState } from 'react';
import { SplashScreen, DocumentTitle, Footer } from 'components/common';
import { Banner, LeaderBoardTable } from 'components/leaderboard';
import { ROUTES } from 'constants';

function LeaderBoard() {
    DocumentTitle('Kết Quả - Bảng Xếp Hạng Light Novel Việt Nam');
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
    return (
        <div>
            <SplashScreen />
            <div>
                <Banner />
                <LeaderBoardTable />
                <Footer text="Trang Chủ" to={ROUTES.HOME} />
                <button
                    id="toTop"
                    onClick={scrollToTop}
                    style={{
                        display: isVisible ? 'block' : 'none',
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default LeaderBoard;
