import styles from "./Community.module.css";
import 일대일 from "../img/Community/1대1.png";
import banner1 from "../img/Community/banner1.png";
import banner2 from "../img/Community/banner2.png";
import banner3 from "../img/Community/banner3.png";
import Navbar from "../components/Navbar";

function Community() {
  return (
    <section class="page">
      <img class="background" src={일대일} />
      <div class={styles.bannerContainer}>
        <img class={styles.banner} src={banner1} />
        <img class={styles.banner} src={banner2} />
        <img class={styles.banner} src={banner3} />
      </div>
      <Navbar />
    </section>
  );
}

export default Community;
