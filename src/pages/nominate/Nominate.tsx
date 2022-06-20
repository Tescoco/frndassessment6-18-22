import React from "react";
import TextInput from "../signup/TextInput";
import styles from "./Nominate.module.css";

type Props = {};

function Nominate({}: Props) {
  return (
    <div className={styles.nominateContainer}>
      <div className={styles.nominateInner}>
        <div className={styles.nominateMain}>
          <div className={styles.nominateTitle}>
            Accept your nomination for The Connected Awards
          </div>
          <div className={styles.nominateTitle2}>
            Enter The Nominee’s Information below
          </div>
          <div className={styles.nominateTitle3}>Upload Nominee’s Photo *</div>
          <div className={styles.roumdCirle}>
            <div className={styles.roumdCircleInner}></div>
          </div>
          <TextInput name="Full Name *" type="text" />
          <TextInput name="Email address *" type="text" />
          <TextInput name="Award Category *" type="text" />
          <TextInput name="Years of Experience *" type="text" />
          <TextInput name="Country of Origin *" type="text" />
          <TextInput name="Country of Residence *" type="text" />
        </div>
      </div>
      <img
        className={styles.nominateImage}
        src="/img/authimage.png"
        alt="Nominate"
      />
    </div>
  );
}

export default Nominate;
