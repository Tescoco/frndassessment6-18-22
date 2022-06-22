import React, { useState } from "react";
import BasicModal from "../../utils/modal/modal";
import styles from "./Buy.module.css";

type ListItemsProps = {
  height?: string;
  price: string;
  votes: string;
};

function Buy({}) {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const ListItems = ({ height, price, votes }: ListItemsProps) => {
    return (
      <div style={{ height }} className={styles.listItem}>
        <div className={styles.voteCountContainer}>
          <div className={styles.voteCount}>{votes}</div>
          <div className={styles.voteCountText}>Votes</div>
        </div>
        <div className={styles.half2}>
          <div className={styles.price}>${price}</div>
          <div onClick={handleModal} className={styles.buyButton}>
            Buy
          </div>
        </div>
      </div>
    );
  };
  const ListItemsMobile = ({ price, votes }: ListItemsProps) => {
    return (
      <div className={styles.listItemMobile}>
        <div className={styles.voteCountContainerMobile}>
          <div className={styles.voteCount}>{votes}</div>
          <div className={styles.voteCountText}>Votes</div>
        </div>
        <div className={styles.half2Mobile}>
          <div className={styles.price}>${price}</div>
          <div onClick={handleModal} className={styles.buyButton}>
            Buy
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={styles.buyContainerDesktop}>
        <div className={styles.buyInner}>
          <div className={styles.buyList}>
            <div className={styles.header}>Increase Your Voting Power</div>
            <div className={styles.header2}>
              Cheer Your Favourite Nominee to Success
            </div>
            <div className={styles.listContainer}>
              <ListItems votes={"20"} price={"2.50"} height={"250px"} />
              <ListItems votes={"45"} price={"5"} height={"270px"} />
              <ListItems votes={"70"} price={"7.50"} height={"320px"} />
              <ListItems votes={"100"} price={"10"} height={"350px"} />
            </div>
          </div>
        </div>
        <img src="/img/buycornerimage.png" className={styles.buyCorner} />
      </div>
      <div className={styles.buyContainerMobile}>
        <div className={styles.buyInnerMobile}>
          <div className={styles.header1Mobile}>Increase Your Voting Power</div>
          <div className={styles.header2Mobile}>
            Cheer Your Favourite Nominee to Success
          </div>
          <div className={styles.listContainerMobile}>
            <ListItemsMobile votes={"20"} price={"2.50"} />
            <ListItemsMobile votes={"45"} price={"5"} />
            <ListItemsMobile votes={"70"} price={"7.50"} />
            <ListItemsMobile votes={"100"} price={"10"} />
          </div>
        </div>
      </div>
      <BasicModal
        btnText="Go to voting page"
        text={
          "You have successfully Increased your voting power. Go and make your favorite candidate win!"
        }
        open={open}
        handleModal={handleModal}
        img="/img/rocket.png"
      />
    </>
  );
}

export default Buy;
