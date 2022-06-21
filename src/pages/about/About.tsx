import React from "react";
import styles from "./About.module.css";

type Props = {};

function About({}: Props) {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutInner}>
        <div className={styles.header}>
          <div className={styles.headerText}>The Connected Awards</div>
          <div className={styles.headerTextPrimary}>Learn about us</div>
        </div>
        <div className={styles.banner}>
          <img
            className={styles.bannerImg}
            src="/img/about-banner.png"
            alt="banner"
          />
        </div>
        <div className={styles.row}>
          <div className={styles.section1}>
            <div className={styles.s1Header}>Connecting Techies Globally</div>
            <div className={styles.s1Text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the indus standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
          <div className={styles.section2}>
            <img
              className={styles.s2Img}
              src="/img/threeimage.png"
              alt="threeimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
