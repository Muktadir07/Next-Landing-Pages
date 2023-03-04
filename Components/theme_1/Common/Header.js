import Image from "next/image";
import Link from "next/link";
import {  useContext,useState, useEffect, useRef } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCentos } from "react-icons/fa";
// import { useSelector } from "react-redux";
// const axios = require("axios");
// import store from "../../../redux/store";
// import { SetSearchInput } from "../../../redux/stateSlices/SearchInputSlice";

import { useRouter } from 'next/router'
import Context from "../../../pages/theme_1/context";
// import Images from "/frontend_asset/img/logo.png";

const Header = () => {
  const cartlength = useSelector((state) => state.cart?.cartItems.length);
  const [cart, setCart] = useState(0);
  const [logo, setLogo] = useState();
  useEffect(() => {
    setCart(cartlength);
  }, [cartlength]);
	const editActive = useContext(Context); 

  const router = useRouter()
  const inputFile = useRef(null)
  const [searchString, setSearchString] = useState("");
  const handleChange = (e) => {
    // console.log(e.target.value)
    setSearchString(e.target.value)
    store.dispatch(SetSearchInput(searchString))
  }
  const handleSearchBtn = () => {
    router.push({
      pathname: '/theme_1/shop',
      // query: { data: searchString}
    })
    // searchString when daynamic
    // axios.get("https://jsonplaceholder.typicode.com/todos/1")
    // .then((result) => {
    //     if (result.status === 200) {
    //         return result;
    //     } else {
    //         return "something went wrong"
    //     }
    // })
  }
  const searchText = useSelector(
    (state) => state.searchInput.searchString
  );
  const onButtonClick = () => {
   inputFile.current.click();
  };
  const handleChangeLogo = (e)=>{
    setLogo(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <section className='Header'>
      <Container>
        <Row className='d_flex'>
          {/* left  */}
          <Col>
            <div className='HeaderLeftLogo'>
              <Link href="/"><img src={logo === undefined?'/theme_1/images/logo.png':logo} alt='' /></Link>
            {editActive === true && <> <input type='file' id='file' onChange={handleChangeLogo} ref={inputFile} style={{display: 'none'}}/>
              <span style={{marginLeft: '4px',cursor: 'pointer'}}  onClick={onButtonClick}>
                <svg
                  fill="#000"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 306.637 306.637"
                  xmlSpace="preserve"
                >
                  <path d="M12.809 238.52L0 306.637l68.118-12.809 184.277-184.277-55.309-55.309L12.809 238.52zm47.981 41.423l-41.992 7.896 7.896-41.992L197.086 75.455l34.096 34.096L60.79 279.943zM251.329 0l-41.507 41.507 55.308 55.308 41.507-41.507L251.329 0zm-20.294 41.507l20.294-20.294 34.095 34.095-20.294 20.294-34.095-34.095z" />
                </svg>
              </span>
              </>}
            </div>
          </Col>

          <Col xs={6}>
            <div className='HeaderMiddle'>
              <input defaultValue={searchText} onChange={handleChange} type='text' name='' placeholder='Search here...' />
              <div onClick={handleSearchBtn} className='svg' style={{ cursor: "pointer" }}>
                <AiOutlineSearch />
              </div>
            </div>
          </Col>

          <Col>
            <div className='HeaderRight'>
              <ul>
                <li>
                  <a href='' className='d_flex'>
                    <div className='svg'>
                      <AiOutlineHeart />
                    </div>
                    Wishlist
                    <span>2</span>
                  </a>
                </li>

                <li>
                  <Link href='/theme_1/check_out' className='d_flex'>
                    <div className='svg'>
                      <AiOutlineShoppingCart />
                    </div>
                    Cart
                    <span>{cart}</span>
                  </Link>
                </li>

                <li>
                  <a href='' className='d_flex'>
                    <div className='svg'>
                      <AiOutlineUser />
                    </div>
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
