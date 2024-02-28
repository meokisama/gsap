import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Vote from "./pages/Vote";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={process.env.REACT_APP_HOMEPATH} element={<Home />} />
          <Route path={process.env.REACT_APP_VOTEPATH} element={<Vote />} />
          <Route path="*" element={<Navigate to={process.env.REACT_APP_HOMEPATH} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
