import React from "react";
import styles from "./SignUp.module.css";

type Props = {
  content: string;
};

function BtnCTA({ content }: Props) {
  return <div className={styles.btnCTA}>{content}</div>;
}

export default BtnCTA;
