import React from "react";
import SearchRow from "../home/Sections/SearchRow";
import Participants from "./Participants";
import styles from "./Vote.module.css";

function Vote() {
  return (
    <div className={styles.voteContainer}>
      <div className={styles.voteInner}>
        <div className={styles.header}>
          <div className={styles.headerText}>Exceptional Data Analyst</div>
        </div>
        <div className={styles.row1}>
          <SearchRow />
        </div>
        <div className={styles.row2}>
          <div className={styles.voteCount}>
            You have <span className={styles.voteHighLight}>70</span> votes left
          </div>
          <div className={styles.topup}>
            Increase your voting power
            <span className={styles.hereHighlight}>Here</span>
          </div>
        </div>
        <div className={styles.votes}>
          <Participants />
          <Participants />
          <Participants />
          <Participants />
          <Participants />
          <Participants />
          <Participants />
          <Participants />
          <Participants />
          <Participants />
          <Participants />
          <Participants />
        </div>
      </div>
    </div>
  );
}

export default Vote;
