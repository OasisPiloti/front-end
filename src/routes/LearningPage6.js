import React from "react";

import styles from "./LearningPage6.module.css";
import 학습하기6 from "../img/LearningPage/학습하기6.png";
import 점수 from "../img/LearningPage/점수.png";
import 코멘트평가 from "../img/LearningPage/코멘트평가.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function LearningPage4() {
  const navigate = useNavigate();

  // 화면 클릭 시 다음 페이지로 이동하는 함수
  const handleClick = () => {
    navigate("/main"); // 이동할 경로를 설정합니다.
  };

  return (
    <section
      className="page"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img className="background" src={학습하기6} />
      <img className={styles.score} src={점수} />
      <img className={styles.comment} src={코멘트평가} />
      <Navbar />
    </section>
  );
}

export default LearningPage4;
