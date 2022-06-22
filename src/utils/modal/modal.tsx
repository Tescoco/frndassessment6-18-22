import * as React from "react";
import Modal from "@mui/material/Modal";
import styles from "./modal.module.css";
import BtnCTA from "../../pages/signup/BtnCTA";
import { GrFormClose } from "react-icons/gr";

interface Props {
  open: boolean;
  handleModal: () => void;
  img: string;
  text: string;
  btnText: string;
}

export default function BasicModal({
  open,
  handleModal,
  img,
  text,
  btnText,
}: Props) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <div className={styles.modalContainer}>
          <div onClick={handleModal} className={styles.closeIcon}>
            <GrFormClose />
          </div>
          <div className={styles.modalInner}>
            <img className={styles.modalImg} src={img} />
            <div className={styles.modalText}>Awesome!</div>
            <div className={styles.modalText2}>{text}</div>
            <BtnCTA content={btnText} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
