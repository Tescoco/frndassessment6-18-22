import type { NextPage } from "next";
import HomeLayout from "../src/layouts/HomeLayout/HomeLayout";
import Categories from "../src/pages/categories/Categories";

const CategoriesPage: NextPage = () => {
  return (
    <HomeLayout>
      <Categories />
    </HomeLayout>
  );
};

export default CategoriesPage;
