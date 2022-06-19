import Image from "next/image";
import React from "react";
import styles from "./Four.module.css";

type Props = {};

function Four({}: Props) {
  return (
    <div className={styles.fourContainer}>
      <div className={styles.fourInner}>
        <div className={styles.section1}>
          <div className={styles.header}>Celebrated Techies</div>
          <div className={styles.divider}></div>
          <div className={styles.content}>
            The connected is.....It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
          </div>
          <div className={styles.learnMoreCTA}>Learn more</div>
        </div>
        <div className={styles.section2}>
          <div className={styles.imageContainer}>
            <Image
              height={390}
              width={450}
              src="/img/fourImage.png"
              className={styles.imageEmbed}
            />
          </div>
        </div>
      </div>
      <div className={styles.fourVector}>
        <img src="/img/fourVector.png" className={styles.vector} />
      </div>
    </div>
  );
}

export default Four;
