import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";

type Props = {};

function Header({}: Props) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Image src="/img/logo.png" alt="logo" width={96} height={59.52} />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuInner}>
            <div className={styles.menuChild}>Categories</div>
            <div className={styles.menuChild}>Past editions</div>
            <div className={styles.menuChild}>Future editions</div>
            <div className={styles.menuChild}>About us</div>
            <div className={styles.menuChild}>Make a donation</div>
          </div>
        </div>
        <div className={styles.cta}>
          <div className={styles.login}>Log In</div>
          <div className={styles.signup}>Create Account</div>
        </div>
      </div>
      <div className={styles.headerDivider}></div>
    </div>
  );
}

export default Header;
