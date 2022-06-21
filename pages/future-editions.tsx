import type { NextPage } from "next";
import HomeLayout from "../src/layouts/HomeLayout/HomeLayout";
import Categories from "../src/pages/categories/Categories";
import FutureEditions from "../src/pages/future-editions/FutureEditions";

const FutureEditionsPage: NextPage = () => {
  return (
    <HomeLayout>
      <FutureEditions />
    </HomeLayout>
  );
};

export default FutureEditionsPage;
