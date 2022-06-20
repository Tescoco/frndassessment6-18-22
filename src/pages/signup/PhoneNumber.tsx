import React from "react";
import styles from "./SignUp.module.css";

type Props = {
  name: string;
  type: string;
  state: string;
  setState: (value: string) => void;
};

function PhoneNumber({ name, type, state, setState }: Props) {
  return (
    <div className={styles.inputMain}>
      <div className={styles.label}>{name}</div>
      <div className={styles.inputContainer}>
        <input
          type={type}
          className={styles.input}
          value={state}
          onChange={(e) => setState(e.target.value.replace(/[^0-9]/g, ""))}
          maxLength={11}
        />
      </div>
    </div>
  );
}

export default PhoneNumber;
