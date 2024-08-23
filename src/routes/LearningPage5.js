import React, { useRef, useState, useEffect } from "react";

import styles from "./LearningPage5.module.css";
import 학습하기3 from "../img/LearningPage/학습하기3.png";
import 텍스트1 from "../img/LearningPage/텍스트1.png";
import 재생버튼 from "../img/LearningPage/재생버튼.png";
import 녹음버튼 from "../img/LearningPage/녹음버튼.png";
import 넘어가기버튼 from "../img/LearningPage/넘어가기버튼.png";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TypingEffect from "../components/TypingEffect";

function LearningPage5() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/learning6"); // 이동할 경로를 설정합니다.
  };

  const audioRef = useRef(null);
  const [audioUrl, setAudioUrl] = useState("");

  const getAudio = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/study-cards/2");
      const json = await response.json();
      setAudioUrl(json.data.dialogues[0].audioUrl);
    } catch (error) {
      console.error("Failed to fetch audio data:", error);
    }
  };

  useEffect(() => {
    getAudio();
  }, []);

  useEffect(() => {
    if (audioUrl && audioRef.current) {
      audioRef.current.load();
    }
  }, [audioUrl]);

  const handleImageClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Failed to play the audio:", error);
      });
    }
  };

  return (
    <section className="page">
      <img className="background" src={학습하기3} />
      <img
        className={styles.play}
        src={재생버튼}
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
        alt="재생버튼"
      />
      <img className={styles.text1} src={텍스트1} />
      <div className={styles.answer}>
        <TypingEffect text="집에 불이 나서요." speed={300} maxLength={7} />
      </div>
      <img
        className={styles.record}
        src={녹음버튼}
        style={{ cursor: "pointer" }}
      ></img>
      <img
        className={styles.next}
        src={넘어가기버튼}
        alt="넘어가기 버튼"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <audio ref={audioRef}>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Navbar />
    </section>
  );
}

export default LearningPage5;
