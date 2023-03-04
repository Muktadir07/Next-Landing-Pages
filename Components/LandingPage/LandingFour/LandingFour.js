import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../styles/landing_four/landing_four.module.css';
import { AiOutlineShoppingCart, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { style } from '@mui/system';





const LandingFour = () => {



  return (


    <div className={styles.LandingFour}>


      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <section className={styles.Banner}>

        <Container>

          <Row>

            <Col lg={6}>
            
              <div className={styles.BannerContent}>

                <div className={styles.Logo}>
                  <img src="images/landing_4/logo.svg" alt="" />
                </div>

                <div className={styles.text}>

                  <h1>শত  ভেজাল  ভিড়ে একমাত্র আমরাই আপনাকে দিচ্ছি খাঁটি ফরমালীন মুক্ত আম</h1>
                  <h3>বাজারে আমের দাম উঠা-নামা করতে পারে, <br /> তাই ফোন করে আমের দাম কনফার্ম হোন</h3>

                  <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                </div>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        About
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className={styles.About}>

        <div className={styles.AboutText_left}>
          <img src="images/landing_4/About_left.png" alt="" />
        </div>

        <div className={styles.AboutText_right}>
          <img src="images/landing_4/About_right.png" alt="" />
        </div>

        <Container>

          <Row className="justify-content-md-center">

            <Col lg={6}>
            
              <div className={styles.AboutContent}>

                <div className={styles.AboutLogo}>

                  <img src="images/landing_4/about.svg" alt="" />

                  <div className={styles.AboutOverlay}>

                    <h3>গোপালভোগ - ৫ মন </h3>
                    <h4>পূর্বের মূল্যঃ ১০৫০ টাকা</h4>
                    <h2>মূল্যঃ ১০০০ টাকা</h2>

                  </div>

                </div>

              </div>

            </Col>

            <Col lg={8}>

              {/* whyBuy */}
              <div className={styles.AboutText}>

                <h2>আমাদের এই আম কেন খাবেন?</h2>
                <p>আমরা হলাম কেমিক্যাল মুক্ত, উৎকৃষ্ট মানের রকমারি আমের একটি জায়গা।আমরা বিশেষত রাজশাহীর আমাদের নিজেস্ব বাগানের উৎকৃষ্ট মানের সম্পূর্ণ কেমিক্যাল মুক্ত আম। আম খেতে ভালোবাসেন না, এমন মানুষ পাওয়া খুব কম আছে। আমাদের এই আম স্বাদে ও গন্ধে অতুলনীয় পাকা ও কাঁচা আমে রয়েছে অনেক পুষ্টিগুণ তা শরীরের জন্য ভালো। গ্রাহকরা ভাল অবিশ্বাস্যভাবে আশ্বস্ত হয়ে ১০০% আস্থার সাথে আমাদের থেকে কাঁচা বা পাকা আম ক্রয় করতে পারেন । আমরা পাইকারি বিক্রয় সেবাও দিয়ে থাকি। আমরা সরাসরি গ্রাহকদের হোম ডেলিভারী দিয়ে থাকি এবং গ্রাহকদের হাতে পৌছে দেয়ার চেষ্টা অব্যাহত আছে, আপনি ও নিয়ে দেখতে পারেন।</p>

              </div>

            </Col>

          </Row>

        </Container>

      </section>


      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        WhyUs
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className={styles.WhyUs}>

        <div className={styles.WhyUsImg}>

          <img src="images/landing_4/why_us.svg" alt="" /> 
        
          <div className={styles.WhyOverlay}>

            <Container>

              <Row>

                {/* header */}
                <Col lg={12}>
                  <h2>আমের উপকারিতা  ও পুষ্টিগুণ কি কি?</h2>
                </Col>

                {/* item */}
                <Col lg={4}>
                
                  <div className={styles.WhyUsItem}>

                    <div className={styles.img}>
                      <img src="images/landing_4/why_us_img.png" alt="" />
                    </div>

                    <div className={styles.text}>
                      <p>প্রাকৃতিক ফলে বিদ্যমান ক্যারোটিন গ্রহণ করলে সেগুলো ফুসফুস ও মুখের ক্যানসারের ঝুঁকি কমায়।</p>
                    </div>

                  </div>

                </Col>

                {/* item */}
                <Col lg={4}>
                
                  <div className={styles.WhyUsItem}>

                    <div className={styles.img}>
                      <img src="images/landing_4/why_us_img.png" alt="" />
                    </div>

                    <div className={styles.text}>
                      <p>প্রাকৃতিক ফলে বিদ্যমান ক্যারোটিন গ্রহণ করলে সেগুলো ফুসফুস ও মুখের ক্যানসারের ঝুঁকি কমায়।</p>
                    </div>

                  </div>

                </Col>

                {/* item */}
                <Col lg={4}>
                
                  <div className={styles.WhyUsItem}>

                    <div className={styles.img}>
                      <img src="images/landing_4/why_us_img.png" alt="" />
                    </div>

                    <div className={styles.text}>
                      <p>প্রাকৃতিক ফলে বিদ্যমান ক্যারোটিন গ্রহণ করলে সেগুলো ফুসফুস ও মুখের ক্যানসারের ঝুঁকি কমায়।</p>
                    </div>

                  </div>

                </Col>

                {/* item */}
                <Col lg={4}>
                
                  <div className={styles.WhyUsItem}>

                    <div className={styles.img}>
                      <img src="images/landing_4/why_us_img.png" alt="" />
                    </div>

                    <div className={styles.text}>
                      <p>প্রাকৃতিক ফলে বিদ্যমান ক্যারোটিন গ্রহণ করলে সেগুলো ফুসফুস ও মুখের ক্যানসারের ঝুঁকি কমায়।</p>
                    </div>

                  </div>

                </Col>

                {/* item */}
                <Col lg={4}>
                
                  <div className={styles.WhyUsItem}>

                    <div className={styles.img}>
                      <img src="images/landing_4/why_us_img.png" alt="" />
                    </div>

                    <div className={styles.text}>
                      <p>প্রাকৃতিক ফলে বিদ্যমান ক্যারোটিন গ্রহণ করলে সেগুলো ফুসফুস ও মুখের ক্যানসারের ঝুঁকি কমায়।</p>
                    </div>

                  </div>

                </Col>

                {/* item */}
                <Col lg={4}>
                
                  <div className={styles.WhyUsItem}>

                    <div className={styles.img}>
                      <img src="images/landing_4/why_us_img.png" alt="" />
                    </div>

                    <div className={styles.text}>
                      <p>প্রাকৃতিক ফলে বিদ্যমান ক্যারোটিন গ্রহণ করলে সেগুলো ফুসফুস ও মুখের ক্যানসারের ঝুঁকি কমায়।</p>
                    </div>

                  </div>

                </Col>

              </Row>

            </Container>

          </div>

        </div>

      </section>

      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        FreeDelivary
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className={styles.FreeDelivary}>

        <Container>

          <Row className='d_flex'>

            <Col lg={6}>

              <div className={styles.FreeDelivaryText}>

                <ul>

                  <li> <img src="images/landing_4/tick.svg" alt="" /> ঐতিহ্যবাহী রাজশাহীর আমাদের নিজেস্ব বাগানের আসল সেরা আম</li>
                  <li> <img src="images/landing_4/tick.svg" alt="" /> কীটনাশক  ও কেমিক্যাল মুক্ত  আমের নির্ভরযোগ্য জায়গা</li>
                  <li> <img src="images/landing_4/tick.svg" alt="" /> বাছাইকৃত বাগানের সেরা মানের সুস্বাধু আম</li>
                  <li> <img src="images/landing_4/tick.svg" alt="" /> হাতের নিকটে ঘরে বসে পাচ্ছেন ভেজাল মুক্ত আম</li>

                </ul>

                <h3>সারাদেশে ফ্রি ডেলিভারি পেতে এখনি</h3>

                <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

              </div>

            </Col>

            <Col lg={6}>

              <div className={styles.FreeDelivaryImg}>
                <img src="images/landing_4/delivary_img.png" alt="" />
              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Client
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className={styles.Client}>

        <Container>

          <Row>
            <Col lg={12}>
              <div className='header text-center'>
                <h2>
                  আমাদের মূল্যবান গ্রাহকদের <br /> মতামত গুলো জানুন
                </h2>
              </div>
            </Col>
          </Row>

          {/* ClientContent */}
          <div className={styles.ClientContent}>

            <Row>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className={styles.ClientImg}>
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

      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      
      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        OrderNow
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className={styles.OrderNow}>

        <div className={styles.OrderLeft}>
          <img src='images/landing_4/order_left.png' alt='' />
        </div>

        <div className={styles.OrderRight}>
          <img src='images/landing_4/order_right.png' alt='' />
        </div>

        <Container>

          <Row className="justify-content-md-center">

            <Col lg={8}>

              <div className={styles.OrderNowtext}>

                <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                <Link href='tel:8801799733234'> +8801799733234 </Link>

                <h3>অর্ডার পেতে কল করুন এই নাম্বারে</h3>

              </div>

            </Col>

          </Row>

        </Container>

      </section>
      
      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        FormPart
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className="OrderConfirmFrom">

        <Container>

          <Row>

            {/* left */}
            <Col lg={7}>

              <div className="OrderConfirmLeft">

                <h3>Billing details</h3>

                <div className="CustomeInput">
                  <input type="text" name="" placeholder='আপনার নাম লিখুন *' />
                </div>

                <div className="CustomeInput">
                  <input type="text" name="" placeholder='আপনার মোবাইল নাম্বার লিখুন *' />
                </div>

                <div className="CustomeInput">
                  <input type="text" name="" placeholder='আপনার সম্পূর্ণ ঠিকানা লিখুন *' />
                </div>

                {/* Payment */}
                <div className="Payment">

                  <h3>Paymet</h3>

                  <div className="CustomeInput d_flex">
                    <input type="checkbox" name="" id='CashOn'/>
                    <label htmlFor="CashOn">ক্যাশ অন ডেলিভারি</label>
                  </div>

                  <div className="ArrowBg">
                    <p>Pay with cash on delivery.</p>
                  </div>

                </div>

              </div>

            </Col>

            {/* right */}
            <Col lg={5}>

              <div className="OrderConfirmRight">

                <h3>Your order</h3>

                <ul>

                  <li>
                    <h4>Product</h4>
                    <h5>Subtotal</h5>
                  </li>

                  <li>

                    <div className="left d_flex">
                      
                      <div className="img">
                        <img src="images/product.svg" alt="" />
                      </div>

                      <p>Flower Of Story Men’s Perfume Set Boss</p>

                    </div>

                    <div className="right d_flex">

                      <input type="number" />

                      <h5>BDT 1,690.00</h5>

                    </div>

                  </li>

                  <li>
                    <h5>Subtotal</h5>
                    <h5>1,690.00</h5>
                  </li>

                  <li>
                    <h4>Total</h4>
                    <h4>1,690.00</h4>
                  </li>
                  
                </ul>

                <button> <RiShoppingCart2Line/> Place Order  $49.00</button>

              </div>

            </Col>

          </Row>

        </Container>

      </section>
      
      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Footer
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className={styles.Footer}>

        <div className={styles.FooterLeft}>
          <img src="images/landing_4/footer_left.png" alt="" />
        </div>

        <div className={styles.FooterRight}>
          <img src="images/landing_4/footer_right.png" alt="" />
        </div>

        <Container>

          <Row>

            <Col lg={4}>

              <div className={styles.FooterItem}>
                
                <div className={styles.Logo}>
                  <img src="images/landing_4/logo.svg" alt="" />
                </div>

                <div className={styles.SocialLink}>

                  <Link href=''> <FaFacebookF/> </Link>
                  <Link href=''> <AiOutlineTwitter/> </Link>
                  <Link href=''> <FaLinkedinIn/> </Link>
                  <Link href=''> <FaInstagram/> </Link>
                  <Link href=''> <AiFillYoutube/> </Link>

                </div>

              </div>

            </Col>

            <Col lg={4}>

              <div className={styles.FooterItem}>

                <h3>Contact Us</h3>
                
                <ul>

                  <li> <Link href='tel:01799-733234'> <FiPhoneCall /> 01799-733234 </Link> </li>
                  <li> <Link href='mailto:contact@softitcare.com'> <BsEnvelope /> contact@softitcare.com </Link> </li>

                </ul>

              </div>

            </Col>

            <Col lg={4}>

              <div className={styles.FooterItem}>

                <h3>Contact Us</h3>
                
                <ul>

                  <li> <Link href=''>Refund Policy </Link> </li>
                  <li> <Link href=''>Privacy Policy</Link> </li>
                  <li> <Link href=''>Terms and Conditions</Link> </li>

                </ul>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


    
    </div>


  )
}

export default LandingFour