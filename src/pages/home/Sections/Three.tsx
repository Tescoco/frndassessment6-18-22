import Image from "next/image";
import React from "react";
import styles from "./Three.module.css";

type Props = {};

function Three({}: Props) {
  return (
    <div className={styles.threeContainer}>
      <div className={styles.threeInner}>
        <div className={styles.section1}>
          <div className={styles.imageContainer}>
            <Image
              height={390}
              width={450}
              src="/img/threeimage.png"
              className={styles.imageEmbed}
            />
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.header}>The Connected Awards</div>
          <div className={styles.divider}></div>
          <div className={styles.content}>
            The connected is.....It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            Content here, content here , making it look like readable English.
          </div>
          <div className={styles.learnMoreCTA}>Learn more</div>
        </div>
      </div>
      <div className={styles.threeVector}>
        <img src="/img/threeVector.png" className={styles.vector} />
      </div>
    </div>
  );
}

export default Three;
