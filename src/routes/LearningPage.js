import React from "react";

import styles from "./LearningPage.module.css";
import 학습하기 from "../img/LearningPage/학습하기.png";
import 전화119 from "../img/LearningPage/전화119.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function LearningPage() {
  const navigate = useNavigate();

  // 화면 클릭 시 다음 페이지로 이동하는 함수
  const handleClick = () => {
    navigate("/learning2"); // 이동할 경로를 설정합니다.
  };

  return (
    <section className="page">
      <img className="background" src={학습하기} />
      <img
        className={styles.learning}
        src={전화119}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      ></img>
      <Navbar />
    </section>
  );
}

export default LearningPage;
