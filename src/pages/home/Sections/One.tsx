import React from "react";
import styles from "./One.module.css";
import SearchRow from "./SearchRow";

type Props = {};

function One({}: Props) {
  return (
    <div className={styles.oneContainer}>
      <div className={styles.oneInner}>
        <div className={styles.row1}>
          First Ever Tech Personality <br />
          Award For Africans in Europe
        </div>
        <div className={styles.row2}>
          <SearchRow />
          <div className={styles.viewAllCategory}>View all categories #</div>
        </div>
      </div>
    </div>
  );
}

export default One;
