import React from 'react';

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
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : undefined
          }
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#2f363e" }}
          ></i>
          <span>Search</span>
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : undefined
          }
        >
          <i className="fa-solid fa-inbox" style={{ color: "#2f363e" }}></i>
          <span>Inbox</span>
        </NavLink>
        <NavLink
          to="/mypage"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : undefined
          }
        >
          <i className="fa-solid fa-user" style={{ color: "#2f363e" }}></i>
          <span>My Page</span>
        </NavLink>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}

export default Navbar;
