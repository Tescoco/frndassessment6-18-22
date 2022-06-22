import Image from "next/image";
import React, { ReactElement } from "react";
import styles from "./Two.module.css";

type TargetsProps = {
  img: string;
  text: string;
};

function Two({}) {
  const Targets = ({ img, text }: TargetsProps): ReactElement => {
    return (
      <div className={styles.targets}>
        <div className={styles.targetsInner}>
          <div className={styles.image}>
            <Image src={img} alt="awearness" width={100} height={100} />
          </div>
          <div className={styles.targetText}>{text}</div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.twoContainer}>
      <div className={styles.twoTitle}>Our Target</div>
      <div className={styles.targetsContent}>
        <Targets
          text={"Awareness"}
          img={"/img/freepik--character-1--inject-261.png"}
        />
        <Targets
          text={"Competition"}
          img={"/img/freepik--Target--inject-210.png"}
        />
        <Targets
          text={"Entertainment"}
          img={"/img/dices-dice-svgrepo-com.png"}
        />
        <Targets text={"Recognition"} img={"/img/trophy-svgrepo-com.png"} />
      </div>
      <div className={styles.twoImageEmbed}>
        <img src="/img/targetEmbed.png" className={styles.imageEmbed} />
      </div>
    </div>
  );
}

export default Two;
