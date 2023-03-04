import Head from "next/head";
import React, { useRef, useState } from "react";

// Common CSS
import Header from "../../../Components/theme_1/Common/Header";
import MenuBar from "../../../Components/theme_1/Common/Menubar";
import Delivary from "../../../Components/theme_1/Common/Delivary";
import Footer from "../../../Components/theme_1/Common/Footer";
import SocialMedia from "../../../Components/theme_1/Common/SocialMedia";
import TinyFooter from "../../../Components/theme_1/Common/TinyFooter";
import CheckOut from "../../../Components/theme_1/CheckOut/CheckOut";

const index = () => {
  return (
    <>
      <Header></Header>
      {/* <MenuBar></MenuBar> */}

      <CheckOut></CheckOut>

      <Delivary></Delivary>
      <Footer></Footer>
      <SocialMedia></SocialMedia>
      <TinyFooter></TinyFooter>

      <footer></footer>
    </>
  );
};

export default index;
