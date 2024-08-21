import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./routes/StartPage";
import LoadingPage from "./routes/LoadingPage";
import LoadingPage2 from "./routes/LoadingPage2";
import CommunityPage from "./routes/CommunityPage";
import MyPage from "./routes/MyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/loading2" element={<LoadingPage2 />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}
export default App;
