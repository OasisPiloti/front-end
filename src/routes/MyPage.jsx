import React from "react";

import Navbar from "../components/Navbar";
import 마이페이지 from "../img/MyPage/마이페이지.png";

function MyPage() {
  return (
    <section class="page">
      <img class="background" src={마이페이지} />
      <Navbar />
    </section>
  );
}

export default MyPage;
