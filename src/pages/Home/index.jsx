import Header from './Header';
import Comment from './Comment';
import Media from './Media';
import LargeText from './LargeText';
import LastTop10 from './LastTop10';
import CategoryVote from './CategoryVote';
import Introduction from './Introduction';
import Overview from './Overview';
import { SplashScreen, Footer } from '../../components';

import '../../fonts/DTPhudu-Black.otf';

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
