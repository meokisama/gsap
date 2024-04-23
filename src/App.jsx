import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from 'constants';
import { Home, Vote, LeaderBoard } from 'pages';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.VOTE} element={<Vote />} />
                    <Route path={ROUTES.LEADERBOARD} element={<LeaderBoard />} />
                    <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
