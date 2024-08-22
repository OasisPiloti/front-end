import React from "react";
import { useNavigate } from "react-router-dom";

import "./VocaPage.css";

import 단어장페이지 from "../img/VocaPage/VocaPage.png";
import 서치아이콘 from "../img/VocaPage/search.png"
import Navbar from "../components/Navbar";

const VocaPage = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/voca2');
  };

    return (
      <section class="page">
        <div className="search-bar">
          <input type="text" placeholder="단어를 입력해주세요" />
          <button className="search-button" onClick={handleSearchClick}>
              <img src={서치아이콘} />
          </button>
        </div>
        <img class="background" src={단어장페이지} />
        <Navbar />
    </section>
    );
  }

export default VocaPage;