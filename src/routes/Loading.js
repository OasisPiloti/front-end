import styles from "./Loading.module.css";
import 기본창 from "../img/Loading/기본창.png";
import 한글 from "../img/Loading/한글.png";
import 러시아어 from "../img/Loading/러시아어.png";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  // 화면 클릭 시 다음 페이지로 이동하는 함수
  const handleClick = () => {
    navigate("/loading2"); // 이동할 경로를 설정합니다.
  };

  return (
    <section class="page" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img class="background" src={기본창} />
      <div class={styles.textContainer}>
        <img src={한글} />
        <img src={러시아어} />
      </div>
    </section>
  );
}

export default Loading;
