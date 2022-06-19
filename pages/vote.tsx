import type { NextPage } from "next";
import HomeLayout from "../src/layouts/HomeLayout/HomeLayout";
import Vote from "../src/pages/vote/Vote";

const VotePage: NextPage = () => {
  return (
    <HomeLayout>
      <Vote />
    </HomeLayout>
  );
};

export default VotePage;
