// VocaPage2.jsx
import React from 'react';

import "./VocaPage2.css";

import 선생님페이지 from "../img/VocaPage/선생님 페이지.png";
import 서치아이콘 from "../img/VocaPage/search.png"
import Navbar from "../components/Navbar";

const VocaPage2 = () => {
  return (
    <section class="page">
`     <div className="search-bar2">
        <input type="text" placeholder="단어를 입력해주세요" />
        <button className="search-button">
            <img src={서치아이콘} />
        </button>
      </div>`
      <img class="background" src={선생님페이지} />
      <Navbar />
    </section>
  );
}

export default VocaPage2;


