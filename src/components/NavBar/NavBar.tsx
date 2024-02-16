"use client";

import { useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };
  return (
    <>
      <nav className={`${styles.navbar} ${isActive ? styles.active : ""}`}>
        <a href="/">
          <p>BlogVerse</p>
        </a>
        <ul>
          <li>
            <a href="/">Dasboard</a>
          </li>
          <li>
            <a href="/post">Posts</a>
          </li>
        </ul>
        <div onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}
