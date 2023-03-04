import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const axios = require("axios");
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import ReactPaginate from "react-paginate";
import { baseUrl} from "../../../constant/constant";

const shop = () => {
  const searchString = useSelector((state) => state.searchInput.searchString);
  const router = useRouter();
  const queryData = router?.query?.data;
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/customer/products`)
      .then((res) => {
        setAllProducts(res.data.data);
      });
  }, [searchString]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <section>
      <Container>
        <Row>
          {/* item */}
          <Col xs={12}>
            <div className='PopularProductGrid'>
              {allProducts.map((item, index) => {
                return (
                  <div key={index} className='PopularProductItem'>
                    <div className='img'>
                      <img
                        style={{ maxWidth: "250px" }}
                        src={`${baseUrl}/public${item.main_image?.name}`}
                        alt=''
                      />
                    </div>
                    <div className='text'>
                      <h3>
                        BDT {item?.price} <del>{item?.discount}</del>
                      </h3>
                      <p>{item?.short_description}</p>
                      <div className='duelButton'>
                        <Link
                          onClick={() => handleAddToCart(item)}
                          href=''
                          className='addToCart'
                        >
                          Add To Cart
                        </Link>
                        <Link
                          href={`/theme_1/product_details/${item.slug}`}
                          passHref={true}
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default shop;
