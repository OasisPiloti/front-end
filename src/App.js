import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./routes/StartPage";
import Loading from "./routes/LoadingPage";
import Loading2 from "./routes/LoadingPage2";
import Community from "./routes/CommunityPage";
import Mypage from "./routes/MyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/loading2" element={<Loading2 />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
}
export default App;
