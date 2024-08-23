import React, { useRef } from "react";

import styles from "./LearningPage2.module.css";
import 학습하기2 from "../img/LearningPage/학습하기2.png";
import 스피커 from "../img/LearningPage/스피커.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function LearningPage2() {
  const navigate = useNavigate();

  // 화면 클릭 시 다음 페이지로 이동하는 함수
  const handleClick = () => {
    navigate("/learning3"); // 이동할 경로를 설정합니다.
  };

  // 근호 서버에서 api로 데이터 받아오기
  const [audio, setAudio] = useState([]);
  const getAudio = async () => {
    const json = await (
      await fetch("http://localhost:8080/api/study-cards/{studyCardId}")
    ).json();
    setAudio(json.data.words[0].audioUrl);
  };
  useEffect(() => {
    getAudio();
  }, []);

  // 오디오 버튼 만들기
  const audioRef = useRef(null);

  const handleImageClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <section className="page">
      <img className="background" src={학습하기2} />
      <img
        className={styles.speaker}
        src={스피커}
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      ></img>
      <audio ref={audioRef}>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Navbar />
    </section>
  );
}

export default LearningPage2;
