import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BsArrowRight, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Select from "react-select";
// import axios from "axios";

const LandingOne = () => {
  const baseUrl = "https://funnelliner.com";
  const [product, setProduct] = useState({});
  async function fetchProducts(headers) {
    const response = await fetch(`${baseUrl}/api/v1/customer/products`, {
      headers: headers,
    });
    const data = await response.json();

    setProduct(data.data[data.data.length - 1]);
  }

  useEffect(() => {
    const headers = {
      shop_id: localStorage.getItem('shop_id'),
    };
    fetchProducts(headers).then((r) => console.log());
  }, []);

  //   console.log(product[0]);
  const [quantity, setQuantity] = useState(null);
  const productQuantity = quantity === null ? 1 : quantity.value;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const postBody = {
      shop_id: shopId,
      customer_name: data.customerName,
      customer_phone: data.customerMobile,
      customer_address: data.customerAddress,
      product_id: [product.id],
      product_qty: [productQuantity],
    };
    axios
      .post(
        `${baseUrl}/api/v1/client/orders`,
        {
          headers: headers,
        },
        postBody
      )
      .then((res) => {
        if (res.status === 200) {
          swal(
            "Thank you!",
            "Your order has been successfully placed",
            "success"
          );
        }
      })
      .catch((err) => {
        swal({
          title: "Sorry",
          text: "Something went wrong",
          icon: "warning",
        });
      });
  };

  const options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];
  return (
    <div className='LandingTwo'>
      {/* Banner */}
      <section className='Logo'>
        <img src='images/landing_2/logo.png' alt='' />

        <div className='LogoOverlay'>
          <img src='images/landing_2/top_overlay.png' alt='' />
        </div>
      </section>

      {/* Banner */}
      <section className='Banner'>
        <Container>
          <Row className='d_flex'>
            <Col lg={6}>
              <div className='BannerContent'>
                <h5>বেস্ট সেলিং</h5>
                <h2>
                  শরীরের ঘামের দুর্গন্ধ সরানো জন্য তাজা সুবাস মিষ্টি সুগন্ধি যা
                  মানুষকে আকর্ষণ করে!
                </h2>
                <h4>
                  বর্তমান মূল্যঃ <span>১০০০</span> টাকা{" "}
                  <del>পূর্বের মূল্যঃ ১০৫০ টাকা</del>
                </h4>

                <div className='OrderNow'>
                  <Link href='' className='bg'>
                    অর্ডার করুন <BsArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className='BannerImg'>
                <img src='images/landing_2/banner.png' alt='' />

                <div className='BannerImgOverlay'>
                  <img src='images/landing_2/butterfly.png' alt='' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product */}
      <section className='Product section_gaps'>
        <div className='ProductOverlay'>
          <img src='images/landing_2/product_overlay.png' alt='' />
        </div>

        <Container>
          <Row>
            {/* img */}
            <Col lg={3} sm={6}>
              <div className='ProductItem'>
                <div className='img'>
                  <img src='images/landing_2/product1.png' alt='' />
                </div>

                <div className='text'>
                  <h3>Executive Night 25ml</h3>
                  <p>পারফিউম এটি শুধুমাত্র একটি সুবাস নয় এটি একটি ঐতিহ্য</p>
                </div>
              </div>
            </Col>

            {/* img */}
            <Col lg={3} sm={6}>
              <div className='ProductItem'>
                <div className='img'>
                  <img src='images/landing_2/product2.png' alt='' />
                </div>

                <div className='text'>
                  <h3>Executive Night 25ml</h3>
                  <p>পারফিউম এটি শুধুমাত্র একটি সুবাস নয় এটি একটি ঐতিহ্য</p>
                </div>
              </div>
            </Col>

            {/* img */}
            <Col lg={3} sm={6}>
              <div className='ProductItem'>
                <div className='img'>
                  <img src='images/landing_2/product3.png' alt='' />
                </div>

                <div className='text'>
                  <h3>Executive Night 25ml</h3>
                  <p>পারফিউম এটি শুধুমাত্র একটি সুবাস নয় এটি একটি ঐতিহ্য</p>
                </div>
              </div>
            </Col>

            {/* img */}
            <Col lg={3} sm={6}>
              <div className='ProductItem'>
                <div className='img'>
                  <img src='images/landing_2/product4.png' alt='' />
                </div>

                <div className='text'>
                  <h3>Executive Night 25ml</h3>
                  <p>পারফিউম এটি শুধুমাত্র একটি সুবাস নয় এটি একটি ঐতিহ্য</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video */}
      <section className='Video section_gaps'>
        <div className='VideoOverlay'>
          <img src='images/landing_2/video_overlay.png' alt='' />
        </div>

        <Container>
          <Row>
            <Col lg={12}>
              <div className='header text-center'>
                <h2>কেন আমাদের কাছ থেকে পারফিউম টি কিনবেন?</h2>
              </div>

              {/* Video */}
              <div className='VideoContent'>
                <div className='img'>
                  <img src='images/landing_2/video.png' alt='' />
                </div>

                <Link href='' className='bg'>
                  অর্ডার করুন <BsArrowRight />{" "}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WhyBuy */}
      <section className='WhyBuy section_gaps'>
        <Container>
          <div className='WhyBuyOverlay'>
            <img src='images/landing_2/why_overlay.png' alt='' />
          </div>

          <div className='WhyBuyOverlay2'>
            <img src='images/landing_2/why_overlay2.png' alt='' />
          </div>

          <Row>
            <Col lg={12}>
              <div className='header text-center'>
                <h2>
                  নিচের এই কারণ গুলো যদি আপনার সাথে হয়ে থাকে <br /> তবে পারফিউম
                  টি আপনার জন্য
                </h2>
              </div>
            </Col>
          </Row>

          {/* WhyBuyContent */}
          <div className='WhyBuyContent'>
            <Row>
              {/* item */}
              <Col lg={6} sm={6}>
                <div className='WhyBuyItem'>
                  <div className='img'>
                    <img src='images/landing_2/sign.png' alt='' />
                  </div>

                  <div className='text'>
                    <h4>
                      ট্রাভেল করায় সৃষ্টি হয় ঘাম।যা আপনার গায়ে সৃষ্টি করে
                      দুর্গন্ধ।
                    </h4>
                  </div>
                </div>
              </Col>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className='WhyBuyItem'>
                  <div className='img'>
                    <img src='images/landing_2/sign.png' alt='' />
                  </div>

                  <div className='text'>
                    <h4>
                      ট্রাভেল করায় সৃষ্টি হয় ঘাম।যা আপনার গায়ে সৃষ্টি করে
                      দুর্গন্ধ।
                    </h4>
                  </div>
                </div>
              </Col>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className='WhyBuyItem'>
                  <div className='img'>
                    <img src='images/landing_2/sign.png' alt='' />
                  </div>

                  <div className='text'>
                    <h4>
                      ট্রাভেল করায় সৃষ্টি হয় ঘাম।যা আপনার গায়ে সৃষ্টি করে
                      দুর্গন্ধ।
                    </h4>
                  </div>
                </div>
              </Col>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className='WhyBuyItem'>
                  <div className='img'>
                    <img src='images/landing_2/sign.png' alt='' />
                  </div>

                  <div className='text'>
                    <h4>
                      ট্রাভেল করায় সৃষ্টি হয় ঘাম।যা আপনার গায়ে সৃষ্টি করে
                      দুর্গন্ধ।
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* WhyGood */}
      <section className='WhyGood section_gaps'>
        <Container>
          <div className='WhyGoodOverlay'>
            <img src='images/landing_2/good_overlay1.png' alt='' />
          </div>

          <div className='WhyGoodOverlay2'>
            <img src='images/landing_2/good_overlay2.png' alt='' />
          </div>

          <Row>
            <Col lg={12}>
              <div className='header text-center'>
                <h2>আমাদের পারফিউম কেন ভালো? </h2>
                <p>
                  {" "}
                  FR agrances একটি সুগন্ধি পরিষেবা আমাদের লক্ষ্য হল মানুষের
                  শরীরে দুরগন্ধ ধূর করা এবং ২৪ ঘণ্টা শুগন্ধের মাধ্যমে নিজেদের
                  প্রকাশ করার ক্ষমতা দেওয়া । এটি আমাদের মানুষের আত্মবিশ্বাস
                  বাড়াতেও সাহায্য করে। গ্রাহকরা ভাল গন্ধ পাই তা জেনে
                  অবিশ্বাস্যভাবে আশ্বস্ত হয়ে ১০০% আস্থার সাথে আমাদের থেকে এই
                  পারফিউম ক্রয় করতে পারেন । আমরা সরাসরি গ্রাহকদের হাতে পৌছে
                  দেয়ার চেষ্টা অব্যাহত আছে, আপনি ও নিয়ে দেখতে পারেন।
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Client */}
      <section className='Client section_gaps'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='header text-center'>
                <h2>
                  আমাদের মূল্যবান গ্রাহক যারা <br /> কিনেছেন তাদের মতামত জানুন
                </h2>
              </div>
            </Col>
          </Row>

          {/* ClientContent */}
          <div className='ClientContent'>
            <Row>
              {/* item */}
              <Col lg={6} sm={6}>
                <div className='ClientImg'>
                  <img src='images/landing_2/client_review.png' alt='' />
                </div>
              </Col>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className='ClientImg'>
                  <img src='images/landing_2/client_review.png' alt='' />
                </div>
              </Col>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className='ClientImg'>
                  <img src='images/landing_2/client_review.png' alt='' />
                </div>
              </Col>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className='ClientImg'>
                  <img src='images/landing_2/client_review.png' alt='' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* From Part */}
      <section id='form_part' className='section_gaps'>
        <Container>
          <Row className='justify-content-md-center'>
            <Col lg={6}>
              <div className='header text-center'>
                <h2>অর্ডার কনফার্ম করতে নিচের ফর্মটি পূরণ করুন।</h2>
              </div>
            </Col>
          </Row>

          <div className='form_part_content'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col lg={6} sm={6}>
                  <div className='left_part'>
                    <h3>Billing details</h3>

                    {/* item */}
                    <div className='custome_input'>
                      <label>
                        আপনার নাম লিখুন <span>*</span>
                      </label>
                      <input  {...register("customerName", { required: true })} type='text' placeholder=' আপনার নাম লিখুন' />
                      {errors.customerName && (
                        <span style={{ color: "red" }}>Name is require</span>
                      )}
                    </div>

                    {/* item */}
                    <div className='custome_input'>
                      <label>
                        আপনার মোবাইল নাম্বার লিখুন <span>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder=' আপনার মোবাইল নাম্বার লিখুন'
                        {...register(
                            "customerMobile",
                            { required: true },
                            { min: 11, max: 15 }
                          )}
                      />
                      {errors.customerMobile && (
                        <span style={{ color: "red" }}>
                          Valid Mobile Number require
                        </span>
                      )}
                    </div>

                    {/* item */}
                    <div className='custome_input'>
                      <label>
                        আপনার সম্পূর্ণ ঠিকানা লিখুন <span>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder=' আপনার সম্পূর্ণ ঠিকানা লিখুন'
                        {...register("customerAddress", { required: true })}
                      />
                      {errors.customerAddress && (
                        <span style={{ color: "red" }}>
                          Address require
                        </span>
                      )}
                    </div>

                    <div className='payment'>
                      <h4>Paymet</h4>
                      <div className='custome_input checkbox d_flex'>
                        <input
                          type='checkbox'
                          id='delivary_input'
                          defaultChecked={true}
                          placeholder=''
                        />
                        <label htmlFor='delivary_input'>
                          {" "}
                          ক্যাশ অন ডেলিভারি{" "}
                        </label>
                      </div>

                      <div className='arrow_bg'>
                        <p>Pay with cash on delivery.</p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={6} sm={6}>
                  <div className='right_part'>
                    <h3>Your order</h3>

                    <div className='product_part'>
                      <ul>
                        <li className='d_flex d_justify'>
                          <h3>Product</h3>
                          <p>Subtotal</p>
                        </li>
                        <li className='d_flex d_justify'>
                          {/* left */}
                          <div className='left d_flex'>
                            <div className='img'>
                              <img
                                 style={{ width: "100px" }}
                                 src={`${baseUrl}/public${product?.main_image?.name}`}
                                alt=''
                              />
                            </div>
                            <div className='text'>
                              <h4>{product?.product_name}</h4>
                            </div>
                          </div>
                          {/* middle */}
                          <div className='middle'>
                            <Select
                              onChange={setQuantity}
                              options={options}
                              placeholder='1'
                            />
                          </div>
                          {/* amount */}
                          <div className='amount'>
                            <h3> {product?.price}</h3>
                          </div>
                        </li>
                        <li className='d_flex d_justify'>
                          <h5>Subtotal</h5>
                          <h5>{productQuantity * product?.price}</h5>
                        </li>
                        <li className='d_flex d_justify'>
                          <h3>Total</h3>
                          <h3> {productQuantity* product?.price}</h3>
                        </li>
                      </ul>
                    </div>

                    <div className='dexcription'>
                      <p>
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our
                        <a href='#'>privacy policy</a>.
                      </p>
                      <button className='bg' type='submit'>
                        <i className='fas fa-lock' /> Place Order ৳ TK {productQuantity* product?.price}
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </Container>
      </section>

      {/* Fotoer */}
      <section id='Footer'>
        <div className='footerLeft'>
          <img src='images/landing_1/footer_left.png' alt='' />
        </div>

        <div className='footerRight'>
          <img src='images/landing_1/footer_right.png' alt='' />
        </div>

        <Container>
          <Row>
            <Col lg={4} sm={4}>
              <div className='FooterContent'>
                <h3>প্রয়োজনে কল করুন</h3>

                <ul>
                  <li className='d_flex'>
                    <BiPhoneCall /> <a href='tel:018100-45255'>018100-45255</a>{" "}
                  </li>
                </ul>

                {/* Social Icon */}
                <div className='SocialIcon'>
                  <a href='#' className='fb'>
                    {" "}
                    <FaFacebookF />{" "}
                  </a>
                  <a href='#' className='youtube'>
                    {" "}
                    <AiFillYoutube />{" "}
                  </a>
                  <a href='#' className='instagram'>
                    {" "}
                    <AiOutlineInstagram />{" "}
                  </a>
                  <a href='#' className='twitter'>
                    {" "}
                    <BsTwitter />{" "}
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={4} sm={4}>
              <div className='FooterContent'>
                <h3>Important Links</h3>

                <ul>
                  <li className='d_flex'>
                    <a href='#'>Privacy Policy</a>{" "}
                  </li>
                  <li className='d_flex'>
                    <a href='#'>Terms & Conditions</a>{" "}
                  </li>
                  <li className='d_flex'>
                    <a href='#'>Contact</a>{" "}
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={4} sm={4}>
              <div className='FooterContent'>
                <h3>Email us</h3>

                <ul>
                  <li className='d_flex'>
                    <FiMail />{" "}
                    <a href='mailto:oder@freshen.com'>oder@freshen.com</a>{" "}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Tiny Footer */}
          <div className='tinyFooter'>
            <p>
              2022 All Rights Reserved | Designed by{" "}
              <a href='https://sitc.sitcdev.xyz/'>Soft IT Care</a> Development
              Team
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LandingOne;
