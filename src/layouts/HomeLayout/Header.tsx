import Image from "next/image";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { RiMenuLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import LinearDeterminate from "../../utils/Progress/lineprogress";
import Router from "next/router";

type MenuMobileChildProps = {
  content: string;
  url: string;
};

function Header({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const handleNav = (url: string) => {
    if (`/${url}` != Router.asPath) {
      setShowProgress(true);
      Router.push(url);
    }
    setIsOpen(false);
  };

  const MenuMobileChild = ({ content, url }: MenuMobileChildProps) => {
    return (
      <div
        onClick={() => {
          handleNav(url);
        }}
        className={styles.mmChild}
      >
        <div className={styles.mmChildItem}>{content}</div>
        <div className={styles.headerDivider}></div>
      </div>
    );
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerInner}>
        <div
          onClick={() => {
            handleNav("/");
          }}
          className={styles.logo}
        >
          <Image src="/img/logo.png" alt="logo" width={96} height={59.52} />
        </div>
        <div className={styles.menuDesktop}>
          <div className={styles.menuInner}>
            <div
              onClick={() => {
                handleNav("categories");
              }}
              className={styles.menuChild}
            >
              Categories
            </div>
            <div
              onClick={() => {
                handleNav("past-editions");
              }}
              className={styles.menuChild}
            >
              Past editions
            </div>
            <div
              onClick={() => {
                handleNav("future-editions");
              }}
              className={styles.menuChild}
            >
              Future editions
            </div>
            <div
              onClick={() => {
                handleNav("about-us");
              }}
              className={styles.menuChild}
            >
              About us
            </div>
            <div
              onClick={() => {
                handleNav("donation");
              }}
              className={styles.menuChild}
            >
              Make a donation
            </div>
          </div>
        </div>
        <div className={styles.menuMobile}>
          {isOpen ? (
            <GrClose onClick={() => setIsOpen(false)} size={28} />
          ) : (
            <RiMenuLine onClick={() => setIsOpen(true)} size={28} />
          )}
        </div>
        {isOpen && (
          <div className={styles.menuMobileContainer}>
            <div className={styles.menuMobileInner}>
              <MenuMobileChild url="categories" content="Categories" />
              <MenuMobileChild url="past-editions" content="Past editions" />
              <MenuMobileChild
                url="future-editions"
                content="Future editions"
              />
              <MenuMobileChild url="about-us" content="About us" />
              <MenuMobileChild url="donation" content="Make a donation" />
              <MenuMobileChild url="login" content="Log In" />
              <MenuMobileChild url="signup" content="Create account" />
            </div>
          </div>
        )}

        <div className={styles.ctaDesktop}>
          <div
            onClick={() => {
              handleNav("login");
            }}
            className={styles.login}
          >
            Log In
          </div>
          <div
            onClick={() => {
              handleNav("signup");
            }}
            className={styles.signup}
          >
            Create Account
          </div>
        </div>
      </div>
      <div className={styles.headerDivider}></div>
      {showProgress && <LinearDeterminate />}
    </div>
  );
}

export default Header;
