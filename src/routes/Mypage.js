import Navbar from "../components/Navbar";
import 마이페이지 from "../img/Mypage/마이페이지.png";

function Mypage() {
  return (
    <section class="page">
      <img class="background" src={마이페이지} />
      <Navbar />
    </section>
  );
}

export default Mypage;
