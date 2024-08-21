import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Loading from "./routes/Loading";
import Loading2 from "./routes/Loading2";
import Community from "./routes/Community";
import Mypage from "./routes/Mypage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/loading2" element={<Loading2 />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
}
export default App;
