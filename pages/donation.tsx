import type { NextPage } from "next";
import HomeLayout from "../src/layouts/HomeLayout/HomeLayout";
import Donation from "../src/pages/donation/Donation";

const DonationPage: NextPage = () => {
  return (
    <HomeLayout>
      <Donation />
    </HomeLayout>
  );
};

export default DonationPage;
