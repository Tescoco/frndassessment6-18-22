import React, { ReactElement } from "react";
import styles from "./Five.module.css";

type FiveContentProps = {
  img: string;
  title: string;
  content: string;
};

function Five({}) {
  const FiveContent = ({
    img,
    title,
    content,
  }: FiveContentProps): ReactElement => {
    return (
      <div className={styles.fiveContent}>
        <div className={styles.fiveContentInner}>
          <div className={styles.fcImage}>
            <img className={styles.fcImageMain} src={img} alt="img" />
          </div>
          <div className={styles.fcTitle}>{title}</div>
          <div className={styles.fcContent}>{content}</div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.fiveContainer}>
      <div className={styles.fiveInner}>
        <FiveContent
          content={
            "Promising Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills."
          }
          title={"Promising Talent"}
          img={"/img/ribbon-svgrepo-com.png"}
        />
        <FiveContent
          content={
            "Intermediate Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills."
          }
          title={"Exceptional Talent"}
          img={"/img/star.png"}
        />
        <FiveContent
          content={
            "Exceptional Talent is an individual with more than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills."
          }
          title={"Promising Talent"}
          img={"/img/thirplestars.png"}
        />
      </div>
    </div>
  );
}

export default Five;
