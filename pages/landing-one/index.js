import React, { useState } from "react";
import LandingOne from "../../Components/LandingPage/LandingOne/LandingOne";
import "grapesjs/dist/css/grapes.min.css";
import Context from "./Context";
import { Editor, Frame } from "@craftjs/core";



const index = () => {
  const [editActive, setEditActive] = useState(false);

  return (
    <>
      <button
        style={{ position: "fixed", top: 0, right: 0 }}
        onClick={() => setEditActive(!editActive)}
        className='btn btn-success'
      >
        Edit
      </button>
      <Context.Provider value={editActive}>
        <div className='LandingOne'>
          <Editor resolver={{ LandingOne }}>
            <Frame>
              <LandingOne
              heroContent={"ভালোবাসার উপহারটি মূল্যবান হয়। প্রিয়জনের রাগ ভাঙাতে ফুল Coustomize Chocklet Gift Box কার্ড মুহূর্তের মধ্যে প্রিয়জনের মুখে হাসি ফোটাবে।"}
              orderTitle={"আপনার এবং আপনার প্রিয়জনদের জন্য সেরা উপহার মুল্য- টাকা"}
              orderTitleFontSize={25}
              productPrice={"মুল্য- 1200 টাকা"}
              whyBuyOurProduct={"Customized Chocolet gift box েকন কিনবেন?"}
              whyChooseUsTittleOne={"প্রিয়জনের অভিমান ভাঙ্গাতে"}
              whyChooseUsDecOne={"স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box"}
              whyChooseUsTittleTwo={"প্রিয়জনের অভিমান ভাঙ্গাতে"}
              whyChooseUsDecTwo={"স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box"}
              whyChooseUsTittleThree={"প্রিয়জনের অভিমান ভাঙ্গাতে"}
              whyChooseUsDecThree={"স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box"}
              whyChooseUsTittleFour={"প্রিয়জনের অভিমান ভাঙ্গাতে"}
              whyChooseUsDecFour={"স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box"}
              whyChooseUsTittleFive={"প্রিয়জনের অভিমান ভাঙ্গাতে"}
              whyChooseUsDecFive={"স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box"}
              whyChooseUsTittleSix={"প্রিয়জনের অভিমান ভাঙ্গাতে"}
              whyChooseUsDecSix={"স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box"}
              buttonInnerText = {"অর্ডার করতে এখানে ক্লিক করুন"}
              deliveryType={"সারা দেশে ফ্রি হোম ডেলিভারি"}
              productDescription={"কি কি থাকছে Coustomize Chocolet Gift box"}
              orderConfirmText={"অর্ডার কনফার্ম করতে নিচের ফর্মটি পূরণ করুন।"}
              buttonFontSize={25}
              desFontSize={15}
              fontSize={35}
              sectionFontSize={30}
              productTitleFontSize={25}
              ></LandingOne>
            </Frame>
          </Editor>
        </div>
      </Context.Provider>
    </>
  );
};

export default index;
