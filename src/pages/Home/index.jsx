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
import sakura_circle from 'assets/sakura_circle.svg';

function Home() {
    return (
        <div style={{ backgroundColor: '#fff7f8' }}>
            <SplashScreen />
            <Header />
            <div className="contentContainer" style={{ backgroundImage: `url(${sakura_circle})` }}>
                <ResultModal />
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
