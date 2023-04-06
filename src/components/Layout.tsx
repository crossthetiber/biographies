import React from "react";
import Banner from "./Banner";
import "../assets/css/layout.css";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode,
  homePageFlag?: boolean
};

const Layout = ({ children, homePageFlag }: Props) => {
  return (
    <div className="layout">
      <Banner homeFlag={homePageFlag} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
