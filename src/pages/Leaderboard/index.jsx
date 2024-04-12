import { Transition, DocumentTitle, Footer } from 'components/common';
import { LeaderBoardTable } from 'components/leaderboard';
import { ROUTES } from 'constants';

function LeaderBoard() {
    DocumentTitle('Kết Quả - Bảng Xếp Hạng Light Novel Việt Nam');
    return (
        <div>
            <Transition />
            <div>
                <LeaderBoardTable />
                <Footer text="Trang Chủ" to={ROUTES.HOME} />
            </div>
        </div>
    );
}

export default LeaderBoard;
