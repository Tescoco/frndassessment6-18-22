import Head from "next/head";
import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactElement;
};

function HomeLayout({ children }: Props) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nova+Square&display=swap"
          rel="stylesheet"
        />
        <title>Techtrend Africa</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
