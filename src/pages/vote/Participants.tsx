import React from "react";
import styles from "./Vote.module.css";

type Props = {};

function Participants({}: Props) {
  return (
    <div className={styles.PContainer}>
      <div className={styles.PInner}>
        <div className={styles.pImg}></div>
        <div className={styles.pName}>Adewale Akinola</div>
        <div className={styles.pVCount}>750 votes</div>
        <div className={styles.actionBox}>
          <div className={styles.voteBox}>
            <div className={styles.aBox}>-</div>
            <div className={styles.count}>1</div>
            <div className={styles.aBox}>+</div>
            <div className={styles.vBox}>Vote</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Participants;
