import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartPage from "./routes/StartPage";
import LoadingPage from "./routes/LoadingPage";
import LoadingPage2 from "./routes/LoadingPage2";
import MainPage from "./routes/MainPage"

import LearningPage from "./routes/LerningPage";
import RecapPage from "./routes/RecapPage";
import VocaPage from "./routes/VocaPage";
import CommunityPage from "./routes/CommunityPage";
import MyPage from "./routes/MyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/loading2" element={<LoadingPage2 />} />eks
        <Route path="/main" element={<MainPage/>} />
        {/* 세부 페이지 */}
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/recap" element={<RecapPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/voca" element={<VocaPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}
export default App;
