import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar} data-test="navbarComponent">
      <div className={style.title} data-test="title">
        SuperHeroes
      </div>
      <div>
        {/* <ul className={style.navLinks}>
          <li>Favourites</li>
        </ul> */}
      </div>
    </div>
  );
}
