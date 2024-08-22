import React from "react";

import styles from "./LearningPage3.module.css";
import 학습하기3 from "../img/LearningPage/학습하기3.png";
import 텍스트1 from "../img/LearningPage/텍스트1.png";
import 텍스트2 from "../img/LearningPage/텍스트2.png";
import 재생버튼 from "../img/LearningPage/재생버튼.png";
import 녹음버튼 from "../img/LearningPage/녹음버튼.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function LearningPage3() {
  const navigate = useNavigate();

  // 화면 클릭 시 다음 페이지로 이동하는 함수
  const handleClick = () => {
    navigate("/learning4"); // 이동할 경로를 설정합니다.
  };

  return (
    <section className="page">
      <img className="background" src={학습하기3} />
      <img className={styles.play} src={재생버튼} />
      <img className={styles.text1} src={텍스트1} />
      <img className={styles.text2} src={텍스트2} />
      <img
        className={styles.record}
        src={녹음버튼}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      ></img>
      <Navbar />
    </section>
  );
}

export default LearningPage3;
