import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Vote from './pages/Vote';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path={import.meta.env.VITE_HOMEPATH} element={<Home />} />
                    <Route path={import.meta.env.VITE_VOTEPATH} element={<Vote />} />
                    <Route path="*" element={<Navigate to={import.meta.env.VITE_HOMEPATH} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
