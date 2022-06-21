import React from "react";
import styles from "./One.module.css";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

function SearchRow({}: Props) {
  return (
    <div className={styles.searchRow}>
      <div className={styles.textInput}>
        <div className={styles.searchIcon}>
          <AiOutlineSearch size={22} />
        </div>
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
