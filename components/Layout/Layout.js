import React, { useState } from "react";
// import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, color, borderBottom, hideHeader }) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
};
export default Layout;
