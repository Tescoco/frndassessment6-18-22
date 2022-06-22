import React, { useState } from "react";
import BasicModal from "../../utils/modal/modal";
import styles from "./Vote.module.css";

type Props = {};

function Participants({}: Props) {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const addFunc = () => {
    setCount(count + 1);
  };

  const minusFunc = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.PContainer}>
      <div className={styles.PInner}>
        <div className={styles.pImg}></div>
        <div className={styles.pName}>Adewale Akinola</div>
        <div className={styles.pVCount}>750 votes</div>
        <div className={styles.actionBox}>
          <div className={styles.voteBox}>
            <div onClick={minusFunc} className={styles.aBox}>
              -
            </div>
            <div className={styles.count}>{count}</div>
            <div onClick={addFunc} className={styles.aBox}>
              +
            </div>
            <div onClick={handleModal} className={styles.vBox}>
              Vote
            </div>
          </div>
        </div>
      </div>
      <BasicModal
        btnText="Return to voting page"
        text={
          "Thank you for taking the time to vote. We are commited to promoting technology in Africa"
        }
        img="/img/thumbsup.png"
        open={open}
        handleModal={handleModal}
      />
    </div>
  );
}

export default Participants;
