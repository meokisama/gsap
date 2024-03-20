import { Header, LargeText, Introduction, Overview, CategoryVote, LastTop10, Comment, Media } from './components';
import { SplashScreen, Footer } from 'components';

import 'fonts/DTPhudu-Black.otf';

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
