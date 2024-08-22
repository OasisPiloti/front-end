import React from "react";

import styles from "./LoadingPage2.module.css";
import 기본창 from "../img/LoadingPage/기본창.png";
import 한글2 from "../img/LoadingPage/한글2.png";
import 러시아어2 from "../img/LoadingPage/러시아어2.png";
import { useNavigate } from "react-router-dom";

function LoadingPage2() {
  const navigate = useNavigate();

  // 화면 클릭 시 다음 페이지로 이동하는 함수
  const handleClick = () => {
    navigate("/learning"); // 이동할 경로를 설정합니다.
  };

  return (
    <section class="page">
      <img class="background" src={기본창} />
      <div class={styles.textContainer2}>
        <img src={한글2} />
        <img src={러시아어2} />
      </div>
      <div class={styles.grades}>
        <button
          class={styles.grade}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          초등학교
        </button>
        <button
          class={styles.grade}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          중학교
        </button>
        <button
          class={styles.grade}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          고등학교
        </button>
      </div>
    </section>
  );
}

export default LoadingPage2;
