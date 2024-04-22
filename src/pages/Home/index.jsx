import { Header, LargeText, Introduction, Overview, CategoryVote, LastTop10, Comment, Media } from 'components/home';
import { SplashScreen, Footer } from 'components/common';

function Home() {
    return (
        <div style={{ backgroundColor: '#fff7f8' }}>
            <SplashScreen />
            <Header />
            <div className="contentContainer">
                <LargeText />
                <Introduction />
                <Overview />
                <CategoryVote />
                <LastTop10 />
                <Media />
                <Comment />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
