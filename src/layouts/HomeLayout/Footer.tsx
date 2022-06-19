import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

type Props = {};

type FooterMenuProps = {
  title: string;
  content: string[];
};

function Footer({}: Props) {
  const FooterMenu = ({ title, content }: FooterMenuProps) => {
    return (
      <div className={styles.footerMenu}>
        <div className={styles.footerMenuTitle}>{title}</div>
        {content.map((item, index) => {
          return (
            <div key={index} className={styles.footerMenuContent}>
              {item}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInner}>
        <div className={styles.footerRow1}>
          <FooterMenu
            content={[
              "The Connected Magazine",
              "Past Editions",
              "Celebrate Techies",
            ]}
            title={"About"}
          />
          <FooterMenu
            content={["Terms of Service", "Privacy Policy"]}
            title={"Legal"}
          />
          <FooterMenu content={["Linkedin"]} title={"Social"} />
          <FooterMenu
            content={[
              "+2347057219951",
              "Chat on Whatsapp",
              "connectedawards@gmail.com",
            ]}
            title={"Contact"}
          />
        </div>
        <div className={styles.footerRow2}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Image
                src="/img/logowhite.png"
                alt="logowhite"
                width={160}
                height={97.53}
              />
            </div>
            <div className={styles.logoText}>Celebrating Techies Globally</div>
          </div>
          <div className={styles.creditContainer}>
            © 2022 The Conected Awards - All rights reserved
          </div>
        </div>
      </div>
      <div className={styles.footerEmbedImage}>
        <img
          src="/img/footerimg.png"
          alt="footer"
          className={styles.footerImg}
        />
      </div>
    </div>
  );
}

export default Footer;
