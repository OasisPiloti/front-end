import React from "react";

import styles from "./CommunityPage.module.css";
import communityPage from "../img/CommunityPage/CommunityPage.png";
import banner1 from "../img/CommunityPage/banner1.png";
import banner2 from "../img/CommunityPage/banner2.png";
import banner3 from "../img/CommunityPage/banner3.png";
import Navbar from "../components/Navbar";

function CommunityPage() {
  return (
    <section class="page">
      <img class="background" src={communityPage} />
      <div class={styles.bannerContainer}>
        <img class={styles.banner} src={banner1} />
        <img class={styles.banner} src={banner2} />
        <img class={styles.banner} src={banner3} />
      </div>
      <Navbar />
    </section>
  );
}

export default CommunityPage;
