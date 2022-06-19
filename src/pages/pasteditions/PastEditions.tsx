import React from "react";
import styles from "./PastEditions.module.css";

type Props = {};

function PastEditions({}: Props) {
  const PastEdition = () => {
    return (
      <div className={styles.pastEdition}>
        <div className={styles.peImg}></div>
        <div className={styles.peName}>Sarah Olalore</div>
        <div className={styles.peCareer}>Exceptional Visual Designer</div>
      </div>
    );
  };
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutInner}>
        <div className={styles.header}>
          <div className={styles.headerText}>Celebrated Techies</div>
          <div className={styles.headerTextPrimary}>
            A look into some of our past winners
          </div>
        </div>
        <div className={styles.pastEditions}>
          <PastEdition />
          <PastEdition />
          <PastEdition />
          <PastEdition />
          <PastEdition />
          <PastEdition />
          <PastEdition />
          <PastEdition />
        </div>
      </div>
    </div>
  );
}

export default PastEditions;
