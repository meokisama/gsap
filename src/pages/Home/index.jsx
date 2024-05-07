import React, { useEffect, useState } from 'react';
import {
    Header,
    LargeText,
    Introduction,
    Overview,
    CategoryVote,
    LastTop10,
    Comment,
    Media,
    ResultModal,
} from 'components/home';
import { SplashScreen, Footer } from 'components/common';

function Home() {
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
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);
    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 800);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ backgroundColor: '#fff7f8' }}>
            {isWideScreen && <SplashScreen />}
            <Header />
            <div className="contentContainer">
                <ResultModal />
                <LargeText />
                <Introduction />
                <Overview />
                <CategoryVote />
                <LastTop10 />
                <Media />
                <Comment />
                <Footer />
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

export default Home;
