import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import 메인페이지 from "../img/MainPage/MainPage.png";
import 학습페이지 from "../img/MainPage/학습하기.png";
import 복습페이지 from "../img/MainPage/복습하기.png";
import 단어장 from "../img/MainPage/단어장.png";
import 커뮤니티 from "../img/MainPage/커뮤니티.png";

import "./MainPage.css";

function MyPage() {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션 기능을 가져옵니다.
  
    return (
      <section className="page">
        <img className="background" src={메인페이지} alt="메인 페이지" />
        <div>
          <button onClick={() => navigate('/learning')}>
              <img className='learningBtn' src={학습페이지} alt="학습하기 페이지"/>
          </button>
          <button onClick={() => navigate('/recap')}>
              <img className='recapBtn' src={복습페이지} alt="복습하기 페이지"/>
          </button>
          <button onClick={() => navigate('/voca')}>
              <img className='vocaBtn' src={단어장} alt="단어장 페이지"/>
          </button>
          <button onClick={() => navigate('/community')}>
              <img className='communityBtn' src={커뮤니티} alt="커뮤니티 페이지"/>
          </button>
        </div>
        <Navbar />
      </section>
    );
  }

export default MyPage;