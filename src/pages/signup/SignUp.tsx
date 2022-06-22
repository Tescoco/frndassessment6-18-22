import Image from "next/image";
import React, { useState } from "react";
import BtnCTA from "./BtnCTA";
import PhoneNumber from "./PhoneNumber";
import styles from "./SignUp.module.css";
import TextInput from "./TextInput";

type Props = {};

function SignUp({}: Props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className={styles.signupConainer}>
      <div className={styles.signupInner}>
        <div className={styles.signupMain}>
          <div className={styles.header1}>
            Time to vote your favourite Techie, let s make this amazing!
          </div>
          <div className={styles.header2}>Create an Account</div>
          <div className={styles.header3}>
            Have an account? <span className={styles.loginText}>Log in</span>
          </div>
          <div className={styles.google}>
            <div className={styles.googleInner}>
              <Image
                className={styles.googleImg}
                src="/img/google-svgrepo-com.png"
                height={20}
                width={20}
              />
              <div className={styles.googleText}> Continue with google</div>
            </div>
          </div>
          <div className={styles.dashlines}>
            <div className={styles.dashline}></div>
            <div className={styles.daslineText}>OR</div>
            <div className={styles.dashline}></div>
          </div>
          <div className={styles.inputsContainer}>
            <div className={styles.nameContainer}>
              <div className={styles.firstName}>
                <div className={styles.firstNameInner}>
                  <TextInput name={"First Name"} type={"text"} />
                </div>
              </div>
              <div className={styles.lastName}>
                <div className={styles.lastNameInner}>
                  <TextInput name={"Last Name"} type={"text"} />
                </div>
              </div>
            </div>
            <div className={styles.inputContainerMoblie}>
              <TextInput name={"First Name"} type={"text"} />
              <TextInput name={"Last Name"} type={"text"} />
            </div>
            <TextInput name={"Email Address"} type={"text"} />
            <PhoneNumber
              setState={setPhoneNumber}
              state={phoneNumber}
              name={"Phone Number"}
              type={"tel"}
            />
            <TextInput name={"Set Password"} type={"password"} />
            <TextInput name={"Gender"} type={"text"} />
            <div className={styles.agreement}>
              By registering you agree to Techtrend Africa s Terms of Use and
              Privacy Policy
              {/*  <span className={styles.highlight}></span>
              and
              <span className={styles.highlight}>Privacy Policy</span>*/}
            </div>
            <BtnCTA content={"Create my account"} />
          </div>
        </div>
      </div>
      <div className={styles.authImageContainer}>
        <img className={styles.authimage} src="/img/authimage.png" />
      </div>
    </div>
  );
}

export default SignUp;
