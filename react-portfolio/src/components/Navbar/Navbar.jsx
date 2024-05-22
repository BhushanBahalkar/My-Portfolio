import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { getImageUrl } from "./../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={getImageUrl(nav / menuIcon.png)} />
        <ul className={styles.menuItems}>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Experience</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
