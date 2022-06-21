import React from "react";
import styles from "./SignUp.module.css";

type Props = {
  name?: string;
  type: string;
};

function TextInput({ name, type }: Props) {
  return (
    <div className={styles.inputMain}>
      <div className={styles.label}>{name}</div>
      <div className={styles.inputContainer}>
        <input type={type} className={styles.input} />
      </div>
    </div>
  );
}

export default TextInput;
