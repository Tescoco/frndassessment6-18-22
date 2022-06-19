import type { NextPage } from "next";
import HomeLayout from "../src/layouts/HomeLayout/HomeLayout";
import About from "../src/pages/about/About";

const AboutPage: NextPage = () => {
  return (
    <HomeLayout>
      <About />
    </HomeLayout>
  );
};

export default AboutPage;
