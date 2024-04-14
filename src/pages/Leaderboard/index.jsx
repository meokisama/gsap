import { SplashScreen, DocumentTitle, Footer } from 'components/common';
import { Banner, LeaderBoardTable } from 'components/leaderboard';
import { ROUTES } from 'constants';

function LeaderBoard() {
    DocumentTitle('Kết Quả - Bảng Xếp Hạng Light Novel Việt Nam');
    return (
        <div>
            <SplashScreen />
            <div>
                <Banner />
                <LeaderBoardTable />
                <Footer text="Trang Chủ" to={ROUTES.HOME} />
            </div>
        </div>
    );
}

export default LeaderBoard;
