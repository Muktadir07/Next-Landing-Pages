import Head from "next/head";

// Common CSS
import Header from "../../../Components/theme_1/Common/Header";
import MenuBar from "../../../Components/theme_1/Common/Menubar";
import Delivary from "../../../Components/theme_1/Common/Delivary";
import Footer from "../../../Components/theme_1/Common/Footer";
import SocialMedia from "../../../Components/theme_1/Common/SocialMedia";
import TinyFooter from "../../../Components/theme_1/Common/TinyFooter";
import ChoosePayment from "../../../Components/theme_1/ChoosePayment/ChoosePayment";
import OrderSuccessfull from "../../../Components/theme_1/OrderSuccessfull/OrderSuccessfull";

import { useRouter } from "next/router";

const index = () => {
  
  return (
    <>
      <Head>
        <title>Sales Solution Theme_1</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='frontend_asset/images/Logo.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main>
        <Header></Header>
        <MenuBar></MenuBar>

        <OrderSuccessfull></OrderSuccessfull>

        <Delivary></Delivary>
        <Footer></Footer>
        <SocialMedia></SocialMedia>
        <TinyFooter></TinyFooter>
      </main>

      <footer></footer>
    </>
  );
};

export default index;
