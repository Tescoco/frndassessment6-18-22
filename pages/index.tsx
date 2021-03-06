import type { NextPage } from "next";
import HomeLayout from "../src/layouts/HomeLayout/HomeLayout";
import Homepage from "../src/pages/home/Homepage";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Homepage />
    </HomeLayout>
  );
};

export default Home;
