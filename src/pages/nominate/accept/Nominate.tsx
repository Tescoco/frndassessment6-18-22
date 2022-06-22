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
            Accept your nomination for The Connected Awards
          </div>
          <div className={styles.nominateTitle2}>
            Enter The Nominee’s Information below
          </div>
          <div className={styles.nominateTitle3}>Upload Nominee’s Photo *</div>
          <div className={styles.roumdCirle}>
            <label className={styles.fileLabel}>
              <div className={styles.roumdCircleInner}>
                <img src="/img/imageicon.png" />
                <div className={styles.roumdCircleText}>
                  <input className={styles.fileLabelInput} type={"file"} />
                  Drop your image here
                  <br /> or
                  <br />
                  <span className={styles.browse}>Browse your files</span>
                </div>
              </div>
            </label>
          </div>
          <TextInput name="Full Name *" type="text" />
          <TextInput name="Email address *" type="text" />
          <TextInput name="Award Category *" type="text" />
          <TextInput name="Years of Experience *" type="text" />
          <TextInput name="Country of Origin *" type="text" />
          <TextInput name="Country of Residence *" type="text" />
          <div className={styles.socialText}>Social Media Links</div>
          <div className={styles.socials}>
            <SocialInput img={"Group"} title={"Linkedin"} />
            <SocialInput img={"instagram-svgrepo-com"} title={"Instagram"} />
            <SocialInput img={"GroupTwitter"} title={"Twitter"} />
            <SocialInput img={"facebook-svgrepo-com"} title={"Facebook"} />
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
