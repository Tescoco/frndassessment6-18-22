import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactElement;
};

function HomeLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
