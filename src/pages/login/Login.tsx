import Image from "next/image";
import React from "react";
import TextInput from "../signup/TextInput";
import styles from "./Login.module.css";

type Props = {};

function SignUp({}: Props) {
  return (
    <div className={styles.signupConainer}>
      <div className={styles.signupInner}>
        <div className={styles.signupMain}>
          <div className={styles.header1}>
            Let’s pick up where we left off yeah?
          </div>
          <div className={styles.header2}>Log in to your account</div>
          <div className={styles.header3}>
            Don’t have an account?{" "}
            <span className={styles.loginText}>Sign Up</span>
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
            <TextInput type="text" name={"Email Address"} />
            <TextInput type="password" name="Password" />
            <div className={styles.btnCTA}>Log In</div>
            <div className={styles.forgotPassword}>Forgot Password</div>
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
