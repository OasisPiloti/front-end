import React, { useRef, useState, useEffect } from "react";

import styles from "./LearningPage5.module.css";
import 학습하기3 from "../img/LearningPage/학습하기3.png";
import 텍스트1 from "../img/LearningPage/텍스트1.png";
import 재생버튼 from "../img/LearningPage/재생버튼.png";
import 녹음버튼 from "../img/LearningPage/녹음버튼.png";
import 넘어가기버튼 from "../img/LearningPage/넘어가기버튼.png";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function LearningPage5() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/learning6"); // 이동할 경로를 설정합니다.
  };

  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const [audioUrls, setAudioUrls] = useState({ audioUrl1: "", audioUrl2: "" });

  const getAudio = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/study-cards/2");
      const json = await response.json();
      setAudioUrls({
        audioUrl1: json.data.dialogues[0].audioUrl,
        audioUrl2: json.data.dialogues[1].audioUrl,
      });
    } catch (error) {
      console.error("Failed to fetch audio data:", error);
    }
  };

  useEffect(() => {
    getAudio();
  }, []);

  useEffect(() => {
    if (audioUrls.audioUrl1 && audioRef1.current) {
      audioRef1.current.load();
    }
    if (audioUrls.audioUrl2 && audioRef2.current) {
      audioRef2.current.load();
    }
  }, [audioUrls]);

  const handleImageClick = () => {
    if (audioRef1.current) {
      audioRef1.current.play().catch((error) => {
        console.error("Failed to play the first audio:", error);
      });

      // 첫 번째 오디오가 끝나고 1초 후 두 번째 오디오 재생
      audioRef1.current.onended = () => {
        setTimeout(() => {
          if (audioRef2.current) {
            audioRef2.current.play().catch((error) => {
              console.error("Failed to play the second audio:", error);
            });
          }
        }, 1000); // 1초 대기
      };
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
      <div className={styles.answer} />
      <img
        className={styles.record}
        src={녹음버튼}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      ></img>
      <img
        className={styles.next}
        src={넘어가기버튼}
        alt="넘어가기 버튼"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <Navbar />
    </section>
  );
}

export default LearningPage5;
