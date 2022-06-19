import React from "react";
import styles from "./One.module.css";

type Props = {};

function SearchRow({}: Props) {
  return (
    <div className={styles.searchRow}>
      <div className={styles.textInput}>
        <div className={styles.searchIcon}>#</div>
        <input
          type={"text"}
          placeholder="Nominees Name, Nominees Category"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.searchCTA}>Search</div>
    </div>
  );
}

export default SearchRow;
