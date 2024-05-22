import React, { useEffect, useState } from 'react';
import { CaretUpFilled } from '@ant-design/icons';
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
                        display: isVisible ? 'flex' : 'none',
                    }}
                >
                    <CaretUpFilled />
                </button>
            </div>
        </div>
    );
}

export default Home;
