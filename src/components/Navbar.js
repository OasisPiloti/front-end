import React from "react";

import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.icons}>
        <NavLink
          to="/main"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : undefined
          }
        >
          <i className="fa-solid fa-house" style={{ color: "#2f363e" }}></i>
          <span>홈</span>
        </NavLink>
        <NavLink
          to="/learning"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : undefined
          }
        >
          <i class="fa-solid fa-school" style={{ color: "#2f363e" }}></i>
          <span>학습</span>
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : undefined
          }
        >
          <i class="fa-solid fa-people-roof" style={{ color: "#2f363e" }}></i>
          <span>코료</span>
        </NavLink>
        <NavLink
          to="/mypage"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : undefined
          }
        >
          <i className="fa-solid fa-user" style={{ color: "#2f363e" }}></i>
          <span>내 정보</span>
        </NavLink>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}

export default Navbar;
