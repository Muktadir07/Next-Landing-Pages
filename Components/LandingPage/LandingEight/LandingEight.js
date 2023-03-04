// import { StyleSharp } from '@mui/icons-material';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillInstagram, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsInstagram, BsPlayFill, BsTelephone } from 'react-icons/bs';
import { FaFacebookF, FaGooglePlus, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoLocation } from 'react-icons/Go';
import { FiMail } from 'react-icons/Fi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import styles from '../../../styles/landing_eight/landing_eight.module.css';

const LandingEight = () => {
  return (
    <>
    <div className={styles.LandingEight}>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Banner
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <div className={styles.Banner}>

            <div className={styles.Leaf}>

                <Container>

                    <Row className='justify-content-center'>

                        <Col lg={12}>

                        <div className={styles.LogoDiv}>

                                <img className={styles.imgBlack} src="images/landing_8/logo.svg" alt="" />


                        </div>

                        
                        </Col>

                    </Row>

                    <Row>

                        <Col lg={8}>

                            <div className={styles.text}>
                                
                                <h1>

                                    নিয়মিত শরীরকে সতেজ রাখতে স্বাস্থ্য সচেতন প্রতিদিন গ্রীন টি পান করুন সুস্থ থাকুন 
                                </h1>

                                <div className={styles.pricediv}>

                                    <h2> <span>মূল্য: ২০০০টাকা</span> </h2>

                                    <div className={styles.price2}>

                                        <h2>ডিস্কাউন্ট মূল্য:</h2>

                                        <div className={styles.textDecoration}>
                                            <img src="images/landing_8/Frame.png" alt="" />

                                            <div className={styles.PriceBox}>
                                                <h2>১৬৫০ টাকা</h2>
                                                
                                            </div>

                                            

                                        </div>
                                        

                                    </div>
                                    <div className={styles.phoneDiv}>
                                        
                                        <h2>+8801799733234  </h2>
                                        <h6>অর্ডার পেতে কল করুন এই নাম্বারে</h6>

                                    </div>

                                    <div className={styles.btnBox}>
                                    
                                    <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                                </div>
                                    

                                </div>

                                
                            </div>
                        
                        </Col>

                        <Col lg={4}>

                            <div className={styles.DiscountBox}>

                                <img src="images/landing_8/white_egg.svg" alt="" />

                                <div className={styles.text}>

                                    <h2>25% OFF</h2>
                                    <h5>Free Gift</h5>


                                </div>

                            </div>
                        
                        </Col>

                    </Row>

                </Container>

            </div>

        </div>
        

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Service Methods
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <div className={styles.ServiceSection}>

            <Container>

                <Row className='justify-content-spacebetween'>

                    <Col  lg={3} md={6} sm={12}>
                        
                        <div className={styles.Services}>
                            <div className={styles.ServiceBox}>

                                <div className={styles.image}>

                                    <img className='' src="images/landing_8/fast.svg" alt="" />

                                </div>

                                <div className={styles.text}>

                                    <h5>Free Shipping</h5>
                                    <p>For all orders from 100tk</p>

                                </div>

                            </div>
                        </div>

                        
                    </Col>
                    <Col  lg={3} md={6} sm={12}>
                        <div className={styles.Services}>
                            <div className={styles.ServiceBox}>

                                <div className={styles.image}>

                                    <img className='' src="images/landing_8/List.svg" alt="" />

                                </div>

                                <div className={styles.text}>

                                    <h5>Order Online</h5>
                                    <p>Order bouquet Via mobile</p>

                                </div>

                            </div>
                        </div>
                        
                        
                    </Col>
                    <Col  lg={3} md={6} sm={12}>
                            <div className={styles.Services}>
                                <div className={styles.ServiceBox}>

                                    <div className={styles.image}>

                                        <img className='' src="images/landing_8/Flower.svg" alt="" />

                                    </div>

                                    <div className={styles.text}>

                                        <h5>More Freshness</h5>
                                        <p>Bouquet are fresh & blooms</p>

                                    </div>

                                </div>
                            </div>
                       

                        
                    </Col>

                    <Col  lg={3} md={6} sm={12}>
                            <div className={styles.Services}>
                                  <div className={styles.ServiceBox}>

                                    <div className={styles.image}>

                                        <img className='' src="images/landing_8/credit-card.svg" alt="" />

                                    </div>

                                    <div className={styles.text}>

                                        <h5>Secure Payment</h5>
                                        <p>Potect online payment</p>

                                    </div>

                            

                                </div>  
                            </div>

                        
                    
                    </Col>

                </Row>

            </Container>

        </div>

        
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            ProductAbout Section 
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className={styles.ProductAbout}>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={10}>

                        <div className={styles.Title}>
                            <h2>গ্রিন টি কি ?</h2>
                            <p>গ্রিন টি হল এক ধরনের চা যা ক্যামেলিয়া সিনেনসিস পাতা এবং কুঁড়ি থেকে তৈরি করা হয় চীনের বিখ্যাত বাগান থেকে নির্বাচিত কোমল পাতা দিয়ে তৈরি, এই সবুজ চা হাজার হাজার বছর ধরে চীনারা তাদের ত্বক এবং তারুণ্য ধরে রাখতে খেয়ে আসছে।</p>

                        </div>
                    
                    </Col>

                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            YouTube video
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        <section className={styles.YouTubeVid}>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={12}>

                        <img src="images/landing_8/YouTube2.png" alt="" />

                    
                    </Col>

                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Usefullness
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        <section className={styles.Usefullness}>

        <Container>

            <Row className='justify-content-center'>

                <Col lg={8}>

                    <div className={styles.Title}>
                        <h2>গ্রিন টি উপকারীতার সম্পর্কে আর  বিস্তারিত আলোচনা করা হল নীচে</h2>

                    </div>
                
                </Col>

            </Row>

        </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            UsefullNessItems
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        <section className={styles.UsefullnessItems}>

            <div className={styles.left}>
                <img src="images/landing_8/leaf_left.svg" alt="" />
            </div>
            

            <div className={styles.right}>
                <img src="images/landing_8/leaf_right.svg" alt="" />
            </div>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={4} xs={6}>
                        
                        <div className={styles.ItemCards}>

                            <div className={styles.IconBox}>
                                <img src="images/landing_8/capsule.svg" alt="" />

                            </div>
                            <h3>ক্যান্সার প্রতিরোধ করে</h3>


                        </div>
                    
                    </Col>

                    <Col lg={4} xs={6}>
                        
                        <div className={styles.ItemCards}>

                            <div className={styles.IconBox}>
                                <img src="images/landing_8/capsule.svg" alt="" />

                            </div>
                            <h3>শরীরের মেদ কমায়</h3>


                        </div>
                    
                    </Col>

                    <Col lg={4} xs={6}>
                        
                        <div className={styles.ItemCards}>

                            <div className={styles.IconBox}>
                                <img src="images/landing_8/capsule.svg" alt="" />

                            </div>
                            <h3>দাঁত ক্ষয় রোধ করে</h3>


                        </div>
                    
                    </Col>

                    <Col lg={4} xs={6}>
                        
                        <div className={styles.ItemCards}>

                            <div className={styles.IconBox}>
                                <img src="images/landing_8/capsule.svg" alt="" />

                            </div>
                            <h3>উচ্চ রক্তচাপ রোধ করে</h3>


                        </div>
                    
                    </Col>

                    <Col lg={4} xs={6}>
                        
                        <div className={styles.ItemCards}>

                            <div className={styles.IconBox}>
                                <img src="images/landing_8/capsule.svg" alt="" />

                            </div>
                            <h3>রক্তের কোলেস্টেরল কমায়</h3>


                        </div>
                    
                    </Col>

                    <Col lg={4} xs={6}>
                        
                        <div className={styles.ItemCards}>

                            <div className={styles.IconBox}>
                                <img src="images/landing_8/capsule.svg" alt="" />

                            </div>
                            <h3>স্ট্যামিনা বাড়ায়</h3>


                        </div>
                    
                    </Col>

                    <Col lg={4} xs={6}>
                        
                        <div className={styles.ItemCards}>

                            <div className={styles.IconBox}>
                                <img src="images/landing_8/capsule.svg" alt="" />

                            </div>
                            <h3>হ্যাংওভার প্রতিরোধ করে</h3>


                        </div>
                    
                    </Col>

                    <Col lg={4} xs={6}>
                        
                        <div className={styles.ItemCards}>

                            <div className={styles.IconBox}>
                                <img src="images/landing_8/capsule.svg" alt="" />

                            </div>
                            <h3>হালকা মূত্রবর্ধক</h3>


                        </div>
                    
                    </Col>

                    <Col lg={4} xs={6}>
                        
                        <div className={styles.ItemCards}>

                            <div className={styles.IconBox}>
                                <img src="images/landing_8/capsule.svg" alt="" />

                            </div>
                            <h3>ক্লান্তি এবং তন্দ্রা হ্রাস করে</h3>


                        </div>
                    
                    </Col>

                    

                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            DiscountSection
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        <section className={styles.DiscountSection}>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={10}>
                        <h2> <span>পূর্বের  মূল্য : ২০০০টাকা</span> </h2>

                        <h1> <span>ডিস্কাউন্ট মূল্য: ১৬৫০ টাকা</span> </h1>

                    
                    </Col>

                </Row>

                <Row className='justify-content-center my-4'>

                    <Col lg={12}>

                        <div className={styles.ContentBox}>

                            
                            
                            <div className={styles.text}>

                                <h1>সারাদেশে ফ্রি ডেলিভারি পেতে এখনি</h1>

                                <div className={styles.buttonCenter}>
                                    <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>
                                </div>
                                


                            </div>
                            <div className={styles.ImageLayer2}>
                                <img src="images/landing_8/design.png" alt="" />

                            </div> 
                            <div className={styles.ImageLayer}>
                                <img src="images/landing_8/design.png" alt="" />

                            </div> 

                        </div>

                    
                    </Col>

                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            WhyUs
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          {/* Section Gaps */}
          <div className={styles.section_gaps}></div>

          <section className={styles.WhyUs}>

            <div className={styles.left}>
                    <img src="images/landing_8/left_leaf1.svg" alt="" />
                </div>
                

                <div className={styles.right}>
                    <img src="images/landing_8/right_leaf1.svg" alt="" />
                </div>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={9}>

                        <div className={styles.Title}>

                            <h2>আমাদের থেকে কেন নিবেন চা?</h2>

                            <p>আমাদের থেকে চা কেন নিবেন? কারন আমরা আপনাদের জন্য এমন একটি চা সরবরাহ করবো যা বাগানের বাছাইকৃত ফ্রেশ তাজা পাতা থেকে তৈরি। আমরা আপনাকে কেমিক্যাল প্রসেস বিহীন সতেজ চা যা আমরা সরাসরি গ্রাহকদের হাতে পৌছে দিয়ে  থাকি।  আমরা হোম ডেলিভারি দিয়ে থাকি। </p>

                        </div>

                    </Col>

                </Row>

            </Container>

          </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            OnlyOrderBtn
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className={styles.OnlyOrderBtn}>

            <Container>

                <Row>

                    <Col>

                        <div className={styles.buttonCenter}>
                            <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>
                        </div>
                    
                    </Col>

                </Row>
            </Container>

        </section>

            {/* Section Gaps */}
            <div className={styles.section_gaps}></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            OrderConformation Section
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

                    <button> <RiShoppingCart2Line/> Place Order BDT 49.00</button>

                </div>

                </Col>

            </Row>

            </Container>

        </section>


        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Footer
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        <section className={styles.FooterSection}>

            <div className={styles.imgLayer}>
                <img src="images/landing_8/bottom_leaf.svg" alt="" />


            </div>

            <Container>

            <Row >

                <Col lg={4}>

                    <div className={styles.footerMenu}>

                            <ul className=''>

                                <li><Link href="#"><BsTelephone/>
                                01799-733234</Link>
                                </li>

                            </ul>

                    </div>

                </Col>

                <Col lg={4} className=''>

                    <div className={styles.footerMenu}>


                            <ul className=''>

                                <li><Link href="#"><FiMail/>
                                contact@softitcare.com</Link>
                                </li>

                            </ul>

                    </div>

                </Col>

                <Col lg={4} >

                    <div className={styles.footerMenu}>

                        <ul className=''>

                            <li>
                                <div className={styles.footerBox}>
                                    <GoLocation/>

                                    <Link href="#">

                                    Level: 5, Road: 07, Block: C, Niketan, Gulshan– 1, Dhaka – 1212</Link>

                                </div>
                                
                            </li>

                            </ul>

                    </div>

                </Col>


                </Row>

                <Row>

                    <Col lg={12}>

                        <div className={styles.SocialIcons}>

                            <div className={styles.SocialIconsList}>

                                <Link href='' className={styles.Fb} > <FaFacebookF/></Link>

                                <Link href='' className={styles.Yt} > <FaYoutube/></Link>

                                <Link href='' className={styles.InS} > <AiFillInstagram/></Link>

                                <Link href='' className={styles.Tw} > <FaTwitter/></Link>


                            </div>

                        </div>
            
                    </Col>
                    <Col lg={12}>

                        <div className={styles.BottomFooterMenu}>
                            <ul>
                                <li>
                                    <Link href=' ' className=''>Terms & Condition</Link>
                                </li>

                                <li>
                                    <Link href=' ' className=''>Privacy Policy</Link>
                                </li>
                            </ul>

                        </div>
            
                    </Col>

                </Row>

            </Container>

            <hr />

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={12}>

                        <div className={styles.CopyRight}>
                            <p className='text-center'>Copyright © 2022 FR agrances. All rights reserved.</p>

                        </div>

                        
                    
                    </Col>
                </Row>

            </Container>

        </section>


    </div>
    
    </>
  )
}

export default LandingEight