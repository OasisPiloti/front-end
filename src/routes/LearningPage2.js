import React from "react";

import styles from "./LearningPage2.module.css";
import 학습하기2 from "../img/LearningPage/학습하기2.png";
import 스피커 from "../img/LearningPage/스피커.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function LearningPage2() {
  const navigate = useNavigate();

  // 화면 클릭 시 다음 페이지로 이동하는 함수
  const handleClick = () => {
    navigate("/learning3"); // 이동할 경로를 설정합니다.
  };

  return (
    <section className="page">
      <img className="background" src={학습하기2} />
      <img
        className={styles.speaker}
        src={스피커}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      ></img>
      <Navbar />
    </section>
  );
}

export default LearningPage2;
