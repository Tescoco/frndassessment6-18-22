import React, { useState } from "react";
import styles from "./Donation.module.css";

type Props = {};

function Donation({}: Props) {
  const [donateAmount, setDonateAmount] = useState("");

  return (
    <div className={styles.donationContainer}>
      <div className={styles.donationInnerDesktop}>
        <div className={styles.header1}>Make a Donation</div>
        <div className={styles.header2}>
          Make a contribution to the growth of technology in Africa
        </div>
        <div className={styles.halfContainer}>
          <div className={styles.half1}>
            <div className={styles.halfInner}>
              <img
                className={styles.donateImg}
                src="/img/donateimage.png"
                alt="donate"
              />
              <div className={styles.half1Text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry s
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </div>
            </div>
          </div>
          <div className={styles.half2}>
            <div className={styles.halfInner}>
              <div className={styles.half2Text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <img
                src="/img/donateimagebook.png"
                className={styles.bookImage}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.halfContainerMobile}>
        <img
          className={styles.donateImg}
          src="/img/donateimage.png"
          alt="donate"
        />
        <div className={styles.donationBox}>
          <div className={styles.dbText}>Enter Donation Amount</div>
          <div className={styles.dBoxMain}>
            <div className={styles.dollarBox}>$</div>
            <div className={styles.textInputBox}>
              <input
                value={donateAmount}
                onChange={(e) =>
                  setDonateAmount(e.target.value.replace(/[^0-9]/g, ""))
                }
                className={styles.input}
                type="text"
              />
            </div>
          </div>
        </div>
        <div className={styles.donateCTA}>Make Donation</div>
        <div className={styles.donateFinePrint}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, when an unknown printer
        </div>
      </div>
    </div>
  );
}

export default Donation;
