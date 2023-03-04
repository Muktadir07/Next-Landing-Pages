import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Nav, Row, Tab, Tabs, Form } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import { baseUrl } from "../../../constant/constant";
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import Context from "../../../pages/theme_1/context";
const axios = require("axios");
import { useRouter } from 'next/router'
const AllProduct = ({ title, fontSize }) => {
  const { connectors: { connect, drag }, hasSelectedNode, hasDraggedNode, actions: { setProp } } = useNode((state) => ({
    hasSelectedNode: state.events.selected.size > 0,
    hasDraggedNode: state.events.dragged.size > 0
  }));
  const dispatch = useDispatch();  
  const router = useRouter()
  const editActive = useContext(Context);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const headers = {
      shop_id: localStorage.getItem('shop_id'),
    }
    axios
      .get(`${baseUrl}/api/v1/customer/products`, { headers: headers })
      .then((res) => {
        setAllProducts(res.data.data);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow=(product)=>{
    dispatch(addToCart(product));
    router.push("/theme_1/check_out")
  }

  return (
    <section className='PopularProduct AllProduct'>
      <Container>
        <Row>
          {/* item */}
          <Col xs={12}>

            {editActive === false && <h2>{title}</h2>}
            {editActive === true && <ContentEditable
              html={title}
              onChange={e =>
                setProp(props =>
                  props.title = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
                )
              }
              tagName="h2"
              style={{ fontSize: `${fontSize}px` }}
            />}
            {editActive === true && <Form.Range min={1} defaultvalue={fontSize} style={{ width: '200px' }}
              max={50} onChange={(e) => {
                setProp(props => props.fontSize = e.target.value);
              }} />}
            <div className='AllProductTabs'>
              <Tabs variant='pills' defaultActiveKey='PackOne'>
                {/* Tab 1  */}
                <Tab eventKey='PackOne' title='Fruits & Vegetables'>
                  <div className='PopularProductContent'>
                    {/* total Item */}
                    <Row>
                      {/* item */}
                      <Col xs={12}>
                        <div className='PopularProductGrid'>
                          {/* item */}
                          {allProducts.map((item, index) => {
                            return (
                              <div className='PopularProductItem'>
                                <div className='img'>
                                  <img
                                    src={`${baseUrl}/public${item.main_image?.name}`}
                                    alt=''
                                    style={{ maxWidth: '250px' }}
                                  />

                                </div>
                                <div className='text'>
                                  <h3>
                                    {item?.price} <del>{item?.discount}</del>
                                  </h3>
                                  <p>
                                    {item?.short_description}
                                  </p>
                                  <div className='duelButton'>
                                    <Link onClick={() => handleAddToCart(item)} href='' className='addToCart'>
                                      Add To Cart
                                    </Link>
                                    <Link onClick={()=>handleBuyNow(item)} href=''>Buy Now</Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>

                {/* Tab 2  */}
                <Tab eventKey='PackTwo' title='Dairy Goods'>
                  <div className='PopularProductContent'>
                    {/* total Item */}
                    <Row>
                      {/* item */}
                      <Col xs={12}>
                        <div className='PopularProductGrid'>
                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>
                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>

                {/* Tab 3  */}
                <Tab eventKey='PackThree' title='Meats'>
                  <div className='PopularProductContent'>
                    {/* total Item */}
                    <Row>
                      {/* item */}
                      <Col xs={12}>
                        <div className='PopularProductGrid'>
                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>

                {/* Tab 4  */}
                <Tab eventKey='PackFour' title='Dairy Goods'>
                  <div className='PopularProductContent'>
                    {/* total Item */}
                    <Row>
                      {/* item */}
                      <Col xs={12}>
                        <div className='PopularProductGrid'>
                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>

                {/* Tab 5  */}
                <Tab eventKey='PackFive' title='Fish & Seafoods'>
                  <div className='PopularProductContent'>
                    {/* total Item */}
                    <Row>
                      {/* item */}
                      <Col xs={12}>
                        <div className='PopularProductGrid'>
                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>

                {/* Tab 6  */}
                <Tab eventKey='PackSix' title='Fruits'>
                  <div className='PopularProductContent'>
                    {/* total Item */}
                    <Row>
                      {/* item */}
                      <Col xs={12}>
                        <div className='PopularProductGrid'>
                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>

                {/* Tab 7  */}
                <Tab eventKey='PackSeven' title='Tea & Coffee'>
                  <div className='PopularProductContent'>
                    {/* total Item */}
                    <Row>
                      {/* item */}
                      <Col xs={12}>
                        <div className='PopularProductGrid'>
                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>

                          {/* item */}
                          <div className='PopularProductItem'>
                            <div className='img'>
                              <img
                                src='/theme_1/images/product-1-1 (2).png'
                                alt=''
                              />
                            </div>

                            <div className='text'>
                              <h3>
                                BDT 1200 <del>1200</del>
                              </h3>
                              <p>
                                Seeds of Change Organic Quinoa, Brown, & Red
                                Rice
                              </p>

                              <div className='duelButton'>
                                <Link href='' className='addToCart'>
                                  Add To Cart
                                </Link>
                                <Link href=''>Buy Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProduct;
