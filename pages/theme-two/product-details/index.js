import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../../Components/ThemePage/ThemeTwo/Common/Footer'
import Menubar from '../../../Components/ThemePage/ThemeTwo/Common/Menubar'
import ProductInfo from '../../../Components/ThemePage/ThemeTwo/SingleProduct/ProductInfo'
import ProductDescription from '../../../Components/ThemePage/ThemeTwo/SingleProduct/ProductDescription'


const index = () => {
  return (
    <div className='ThemeTwo'>

        
      <Menubar></Menubar>
      <ProductInfo/>
      <ProductDescription/>

      <Footer></Footer>

    </div>
  );
};

export default index;
