import Image from "next/image";
import React, { ReactElement } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styles from "./FutureEditions.module.css";

type CategoryProps = {
  title: string;
};

function FutureEditions({}) {
  const FutureEdition = ({ title }: CategoryProps): ReactElement => {
    return (
      <div className={styles.category}>
        <div className={styles.categoryInner}>
          <div className={styles.categoryIcon}>
            <Image
              height={30}
              width={30}
              src="/img/africamap.png"
              alt="category"
            />
          </div>
          <div className={styles.categoryTitle}>{title}</div>
          <div className={styles.feButtonCTA}>Nominate</div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.categoriesInner}>
        <div className={styles.header}>
          <div className={styles.headerText}>Future Editions</div>
          <div className={styles.headerText2}>
            Nominate candidates for future editions
          </div>
        </div>
        <div className={styles.categories}>
          {[
            "East African Edition",
            "South African Edition",
            "North African Edition",
            "West African Edition",
          ].map((item, index) => (
            <FutureEdition title={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FutureEditions;
