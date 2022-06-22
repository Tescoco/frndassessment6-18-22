import React, { useState } from "react";
import BasicModal from "../../../utils/modal/modal";
import BtnCTA from "../../signup/BtnCTA";
import TextInput from "../../signup/TextInput";
import styles from "./Nominate.module.css";

type SocialInputProps = {
  title: string;
  img: string;
};

function Nominate({}) {
  const SocialInput = ({ title, img }: SocialInputProps) => {
    return (
      <div className={styles.socialInput}>
        <div className={styles.socialIcon}>
          <img src={`/img/${img}.png`} className={styles.socialImg} />
        </div>
        <div className={styles.label}>{title} *</div>
        <TextInput type="text" />
      </div>
    );
  };

  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.nominateContainer}>
      <div className={styles.nominateInner}>
        <div className={styles.nominateMain}>
          <div className={styles.nominateTitle}>
            Nominate a candidate for The Connected Award
          </div>
          <div className={styles.nominateTitle2}>
            Enter The Nominee’s Information below
          </div>
          <TextInput name="Award Category *" type="text" />
          <TextInput name="Full Name *" type="text" />
          <TextInput name="Award Category *" type="text" />
          <div className={styles.socialText}>Social Media Links</div>
          <div className={styles.socials}>
            <SocialInput img={"Group"} title={"Linkedin"} />
            <SocialInput img={"instagram-svgrepo-com"} title={"Instagram"} />
            <SocialInput img={"GroupTwitter"} title={"Twitter"} />
            <SocialInput img={"facebook-svgrepo-com"} title={"Facebook"} />
          </div>
          <div className={styles.finePrint}>
            The First-Ever Tech Personality Awards Recognizing Promising and
            Exceptional African Talents in all Technological Fields. The West
            African Countries include 16 countries of Benin, Burkina Faso,
            Gambia, Ghana, Guinea, Guinea-Bissau, Ivory Coast, Liberia, Mali,
            Mauritania, Niger, Nigeria, Senegal, Sierra Leone, and Togo
            <br />
            <br />
            For questions, partnerships & enquiries, send us a mail via
            <br />
            <span className={styles.email}>connectedawards@gmail.com</span>
          </div>
          <div onClick={handleModal} className={styles.btnCTA}>
            <BtnCTA content={"Submit"} />
          </div>
        </div>
      </div>
      <img
        className={styles.nominateImage}
        src="/img/authimage.png"
        alt="Nominate"
      />
      <BasicModal
        btnText="Return to homepage"
        text={"Your Nomination has been submitted"}
        img="/img/thumbsup.png"
        open={open}
        handleModal={handleModal}
      />
    </div>
  );
}

export default Nominate;
