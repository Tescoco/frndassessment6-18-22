import type { NextPage } from "next";
import HomeLayout from "../src/layouts/HomeLayout/HomeLayout";
import Buy from "../src/pages/buy/Buy";
import Vote from "../src/pages/vote/Vote";

const BuyPage: NextPage = () => {
  return (
    <HomeLayout>
      <Buy />
    </HomeLayout>
  );
};

export default BuyPage;
