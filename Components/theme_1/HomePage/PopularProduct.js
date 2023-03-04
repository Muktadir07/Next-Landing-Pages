import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Dropdown, Row, Form } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import { baseUrl} from "../../../constant/constant";
import { useRouter } from 'next/router'

import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import Context from "../../../pages/theme_1/context";

const axios = require("axios");
const PopularProduct = ({ title, fontSize }) => {
  const { connectors: { connect, drag }, hasSelectedNode, hasDraggedNode, actions: { setProp } } = useNode((state) => ({
    hasSelectedNode: state.events.selected.size > 0,
    hasDraggedNode: state.events.dragged.size > 0
  }));
  const dispatch = useDispatch();
  const router = useRouter()
  const editActive = useContext(Context);
  const [allProducts, setAllProducts] = useState([]);

  // const headers = {
  //   Authorization:
  //     "Bearer XxqH7Y7HWpELVFW4K8qiND61faP3OIl24gq6cHxn7XmHrFLTFhMQe2d0C4o9NGYh",
  // };
  useEffect(() => {
    const headers = {
      shop_id: localStorage.getItem('shop_id'),
    }
    axios
      .get(`${baseUrl}/api/v1/customer/products`, { headers: headers })
      .then((res) => {
        setAllProducts(res?.data?.data);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow=(product)=>{
    dispatch(addToCart(product));
    router.push("/theme_1/check_out")
  }
console.log("allProducts", allProducts)
  return (
    <section className='PopularProduct'>
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
          </Col>
        </Row>
        <div className='PopularProductContent'>
          {/* total Item */}
          <Row>
            {allProducts.map((pd, index) => {
              return (
                <Col key={pd.id} md={3}>
                  <div className='PopularProductItem'>
                    <div className='img'>
                      <img
                        src={`${baseUrl}/public${pd.main_image?.name}`}
                        alt=''
                      />

                    </div>
                    <div className='text'>
                      <h3>
                        BDT {pd?.price} <del>{pd?.discount}</del>
                      </h3>
                      <p>{pd?.short_description}</p>
                      <div className='duelButton'>
                        <Link
                          href=''
                          onClick={() => handleAddToCart(pd)}
                          className='addToCart'
                        >
                          Add To Cart
                        </Link>
                        {/* <Link >
                          Add To Cart
                        </Link> */}
                        {/* href={`theme_1/product_details/${pd.slug}`} */}
                        <Link onClick={()=>handleBuyNow(pd)} href=''>Buy Now</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PopularProduct;
