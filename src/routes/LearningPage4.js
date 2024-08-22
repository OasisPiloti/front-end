import React from "react";

import styles from "./LearningPage4.module.css";
import 학습하기4 from "../img/LearningPage/학습하기4.png";
import 스피커 from "../img/LearningPage/스피커.png";
import 코멘트 from "../img/LearningPage/코멘트.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function LearningPage4() {
  const navigate = useNavigate();

  // 화면 클릭 시 다음 페이지로 이동하는 함수
  const handleClick = () => {
    navigate("/learning5"); // 이동할 경로를 설정합니다.
  };

  return (
    <section className="page">
      <img className="background" src={학습하기4} />
      <img
        className={styles.speaker}
        src={스피커}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <img className={styles.comment} src={코멘트} />
      <Navbar />
    </section>
  );
}

export default LearningPage4;
