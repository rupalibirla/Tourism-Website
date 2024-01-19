/** @format */

import React from "react";
import Header from "./../Header/Header";
import Routers from "../../router/Routers";
import Footer from "./../Footer/Footer";
import Services from "../Header/Services";
import Card from "../Header/Card";
import About from "../Header/About";

const Layout = () => {
  return (
    <>
      <Header />

      <Routers />

      <Footer />
    </>
  );
};

export default Layout;
