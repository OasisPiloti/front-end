import styles from "./Login.module.css";
import 로그인페이지 from "../img/Login/로그인 페이지.png";
import 구글버튼 from "../img/Login/구글 로그인 버튼.png";
import 카카오버튼 from "../img/Login/카카오 로그인 버튼.png";
import 네이버버튼 from "../img/Login/네이버 로그인 버튼.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // 화면 클릭 시 다음 페이지로 이동하는 함수
  const handleClick = () => {
    navigate("/loading"); // 이동할 경로를 설정합니다.
  };

  return (
    <section
      className="page"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img className="background" src={로그인페이지} alt="로그인 페이지 배경" />
      <div className={styles.login}>
        <img className={styles.google} src={구글버튼} alt="구글 로그인 버튼" />
        <img
          className={styles.kakao}
          src={카카오버튼}
          alt="카카오 로그인 버튼"
        />
        <img
          className={styles.naver}
          src={네이버버튼}
          alt="네이버 로그인 버튼"
        />
        <a className={styles.join} href="ddd">
          회원가입
        </a>
      </div>
    </section>
  );
}

export default Login;
