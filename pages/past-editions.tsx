import type { NextPage } from "next";
import HomeLayout from "../src/layouts/HomeLayout/HomeLayout";
import PastEditions from "../src/pages/pasteditions/PastEditions";

const PastEditionsPage: NextPage = () => {
  return (
    <HomeLayout>
      <PastEditions />
    </HomeLayout>
  );
};

export default PastEditionsPage;
