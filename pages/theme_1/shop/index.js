import React from "react";
import Header from "../../../Components/theme_1/Common/Header";
import Footer from "../../../Components/theme_1/Common/Footer";
import SocialMedia from "../../../Components/theme_1/Common/SocialMedia";
import TinyFooter from "../../../Components/theme_1/Common/TinyFooter";
import MenuBar from "../../../Components/theme_1/Common/Menubar";
import Shop from "../../../Components/theme_1/Shop/shop";

const index = () => {
  return (
    <div>
      <Header></Header>
      <MenuBar/>
      <Shop></Shop>
      <Footer></Footer>
      <SocialMedia></SocialMedia>
      <TinyFooter></TinyFooter>
    </div>
  );
};

export default index;


// export async function getServerSideProps(context) {
//   const { params } = context;
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/1`
//   );
//   const data = await response.json();
//   return {
//     props: {data}
//   }
// }
