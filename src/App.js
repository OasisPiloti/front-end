import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartPage from "./routes/StartPage";
import LoadingPage from "./routes/LoadingPage";
import LoadingPage2 from "./routes/LoadingPage2";

import MainPage from "./routes/MainPage";

import VocaPage from "./routes/VocaPage";
import VocaPage2 from "./routes/VocaPage2"

import CommunityPage from "./routes/CommunityPage";
import MyPage from "./routes/MyPage";

import LearningPage from "./routes/LearningPage";
import LearningPage2 from "./routes/LearningPage2";
import LearningPage3 from "./routes/LearningPage3";
import LearningPage4 from "./routes/LearningPage4";
import LearningPage5 from "./routes/LearningPage5";
import LearningPage6 from "./routes/LearningPage6";
import RecapPage from "./routes/RecapPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/loading2" element={<LoadingPage2 />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/recap" element={<RecapPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/learning2" element={<LearningPage2 />} />
        <Route path="/learning3" element={<LearningPage3 />} />
        <Route path="/learning4" element={<LearningPage4 />} />
        <Route path="/learning5" element={<LearningPage5 />} />
        <Route path="/learning6" element={<LearningPage6 />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/voca" element={<VocaPage />} />
        <Route path="/voca2" element={<VocaPage2/>} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}
export default App;
