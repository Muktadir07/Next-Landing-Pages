import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
const axios = require("axios");
import { FiPlus } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import ImageSliderComponent from "../ImageSliderComponent";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




const ProductDescription = () => {

  return (

    <>

      <section className='ProductDetails'>

        <Container>

          <Row>

            <Col xs={6}>

              <div className='ProductDetailsLeft'>

                  {/* <h1>Product Detals</h1> */}

                  {/* <h1>{data.data.slug}</h1>
                  <h1>{data.data.product_name}</h1>
                  <h1>{data.data.short_description}</h1> */}

                <div className="ProductDetailsSlider">

                  <ImageSliderComponent></ImageSliderComponent>

                </div>

              </div>

            </Col>

            <Col xs={6}>

              <div className='ProductDetailsRight'>

                <h4>IN STOCK</h4>
                <h3>Seeds of Change Organic Quinoa, Brown</h3>

                <h2>250 TK  <del>34 TK</del> </h2>
                
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>
                
                <div className="Price">

                  <div className="Plus">
                    <FiPlus/>
                  </div>

                  <div className="Minus">
                    <BiMinus/>
                  </div>
                  
                  <input type="text"/>

                </div>

                {/* AddCart */}
                <div className="AddCart">

                  <Link href=''> <AiOutlineShoppingCart/> ADD TO CART</Link>
                  <Link href=''> <BsCart4/> Buy Now</Link>

                </div>

              </div>

            </Col>

          </Row>

          {/* ProductTabs */}
          <div className="ProductTabs">

            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Description" title="Description">
                
                <div className="TabsItem">

                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>

                  <ul>
                    <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
                    <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
                    <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
                  </ul>

                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>

                </div>

              </Tab>

              {/* <Tab eventKey="Additional information" title="Additional information">
                
              <div className="TabsItem">
                
                <div className="TabsItemList d_flex d_justify">
                  <h4>Weight</h4>
                  <h5>1 kg</h5>
                </div>

                 <div className="TabsItemList d_flex d_justify">
                  <h4>Dimensions</h4>
                  <h5>224 × 65 × 564 cm</h5>
                </div>

                 <div className="TabsItemList d_flex d_justify">
                  <h4>Brand</h4>
                  <h5>Evoylink</h5>
                </div>

              </div>

              </Tab> */}

            </Tabs>

          </div>

        </Container>

      </section>
    
    </>

  )

}

export default ProductDescription
