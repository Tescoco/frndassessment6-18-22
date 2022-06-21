import Image from "next/image";
import React, { ReactElement } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SearchRow from "../home/Sections/SearchRow";
import styles from "./Categories.module.css";

type CategoryProps = {
  title: string;
};

function Categories({}) {
  const Category = ({ title }: CategoryProps): ReactElement => {
    return (
      <div className={styles.category}>
        <div className={styles.categoryInner}>
          <div className={styles.categoryIcon}>
            <Image
              height={30}
              width={30}
              src="/img/categoryimg.png"
              alt="category"
            />
          </div>
          <div className={styles.categoryTitle}>{title}</div>
          <div className={styles.categoryArrow}>
            <HiOutlineArrowNarrowRight fontSize={22} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.categoriesInner}>
        <div className={styles.header}>
          <div className={styles.headerText}>Voting Categories</div>
        </div>
        <div className={styles.row1}>
          <SearchRow />
        </div>
        <div className={styles.categories}>
          {[
            "Exceptional Data Analyst",
            "Promising Data Analyst",
            "Exceptional Data Scientist",
            "Promising Data Scientist",
            "Exceptional Visual Designer",
            "Promising Visual Designer",
            "Exceptional DevOps Expert",
            "Exceptional Data Analyst",
            "Exceptional Data Analyst",
            "Promising Data Analyst",
            "Exceptional Data Scientist",
            "Promising Data Scientist",
          ].map((item, index) => (
            <Category title={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
