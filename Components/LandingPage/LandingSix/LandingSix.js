import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillInstagram, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsInstagram, BsPlayFill } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiShoppingCart2Line } from 'react-icons/ri';
import styles from '../../../styles/landing_six/landing_six.module.css';

const LandingSix = () => {
  return (

    <div className={styles.LandingSix}>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Banner
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className={styles.Banner}>

            <Container>

                <Row>

                    <Col lg={6}>

                        <div className={styles.BannerContent}>

                            <div className={styles.Logo}>

                                <img className={styles.imgBlack} src="images/landing_6/bike_logo.svg" alt="" />
                                <img className={styles.imgWhite} src="images/landing_6/logo-2.svg" alt="" />
                                

                            </div>

                            <div className={styles.text}>

                                <h3>পৃথিবী সেরা ইলেক্ট্রিক স্কুটার <br /> এখন বাংলাদেশে</h3>


                                <div className={styles.titleHeader}>

                                    <h1>Electrica </h1>

                                    <h1 className='text-white'> Sc<span>oo</span>ter</h1>

                                </div>

                                <div className={styles.btnBox}>
                                    
                                    <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                                </div>

                                
                                


                            </div>

                        </div>

                    
                    </Col>

                </Row>

            </Container>

        </section>

        

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Specifications
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className={styles.Specification}>
            <Container>

            <Row>

                <Col lg={12}>

                    <div className={styles.Spec}>

                        <ul>
                            <li>
                                <div className={styles.item}>

                                    <img src="images/landing_6/cil_bike.svg" alt="" />
                                    <p>Semi-Auto Pilot <br /> Technology</p>

                                </div>
                            </li>

                            <li>
                                <div className={styles.item}>

                                    <img className='mb-1' src="images/landing_6/battery_charge.svg" alt="" />
                                    <p>Two-way port <br /> charging options</p>

                                </div>
                            </li>

                            <li>

                                <div className={styles.item}>

                                        <img src="images/landing_6/cloud.svg" alt="" />
                                        <p>Segway Function <br /> Cloud System</p>

                                </div>

                            </li>
                            <li>

                                <div className={styles.item}>

                                        <img src="images/landing_6/ep_setting.svg" alt="" />
                                        <p>Low operation & <br /> maintenance</p>

                                </div>

                            </li>
                            <li>

                                <div className={styles.item}>

                                        <img className='mb-xl-3' src="images/landing_6/charge_battery.svg" alt="" />
                                        <p>Day Long Battery <br /> Performance</p>

                                </div>

                            </li>
                            
                        </ul>

                    </div>

                </Col>

                </Row>
            </Container>


        </section>
        
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Feature
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>


        <section className={styles.Features}>

            <Container>

                <Row>

                    <Col lg={6}>

                        <div className={styles.imageScooter}>

                            <img src="images/landing_6/scooty_img.png" alt="" />

                        </div>

                    </Col>

                    <Col lg={6}>

                        <h2>স্কুটারের বিশেষ ফিচার</h2>
                        <div className={styles.hLine}></div>

                        <div className={styles.text}>

                            <p>স্কুটার মডেলগুলি এখানে বৈশিষ্ট্য, সর্বশেষ ডিজাইন, বাজারের খ্যাতি,
                                জনপ্রিয়তা, নির্ভরযোগ্যতা, কর্মক্ষমতা, ব্র্যান্ড ইমেজ, বিক্রয়োত্তর পরিষেবা
                                ইত্যাদি বিবেচনা করে কালানুক্রমিকভাবে সাজানো হয়েছে৷ বাংলাদেশের এই
                                সেরা স্কুটার পৃষ্ঠায়, আমরা বিভিন্ন দামের রেঞ্জের গাড়িগুলিকে রেখেছি৷</p>

                        </div>

                        <div className={styles.FeatureList}>

                            <ul>
                                <li><p><BsPlayFill/> বর্তমানে বাংলাদেশের সবচেয়ে শক্তিশালী স্কুটার</p></li>
                                <li><p><BsPlayFill/> ২ বছরের ওয়ারেন্টি (পার্টস ও ইঞ্জিন)</p></li>
                                <li><p><BsPlayFill/> দেশজুড়ে ৩০+ সার্ভিস সেন্টার</p></li>
                                <li><p><BsPlayFill/> স্পেয়ার পার্টস এভেইলেবল গ্যারান্টি</p></li>
                                <li><p><BsPlayFill/> ২৫ টি দেশে সুনামের সাথে চলছে</p></li>
                                <li><p><BsPlayFill/> মানিব্যাক গ্যারান্টি</p></li>
                            </ul>

                        </div>
                    
                    </Col>

                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            OurStories
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        <section className={styles.OurStories}>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={9}>

                        <h2>স্কুটারের বিশেষ ফিচার</h2>
                        <div className={styles.hLine}></div>

                        <p>স্কুটার মডেলগুলি এখানে বৈশিষ্ট্য, সর্বশেষ ডিজাইন, বাজারের খ্যাতি, জনপ্রিয়তা, নির্ভরযোগ্যতা, কর্মক্ষমতা, ব্র্যান্ড ইমেজ, বিক্রয়োত্তর পরিষেবা ইত্যাদি বিবেচনা করে কালানুক্রমিকভাবে সাজানো হয়েছে৷ বাংলাদেশের এই সেরা স্কুটার পৃষ্ঠায়, আমরা বিভিন্ন দামের রেঞ্জের গাড়িগুলিকে রেখেছি৷</p>
                    
                    </Col>

                </Row>

            </Container>

        </section>


        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            YouTube Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
 
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        <section className={styles.YouTubeVid}>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={12}>

                        <img src="images/landing_6/youtube.png" alt="" />

                    
                    </Col>

                </Row>

                <Row className='justify-content-center'>

                    <Col lg={12}>

                        <div className={styles.buttonGroup}>

                            <Link href='' className={styles.bg}>  অর্ডার করুন</Link>
                            <Link href='' className={styles.bg}>  যোগাযোগ করুন</Link>

                        </div>

                        

            
                    </Col>

                </Row>

            </Container>

        </section>
 
 
 
 
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Checkout Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        <section className={styles.OrderSection}>

            <Container>

                <Row>

                    <Col lg={12}>

                        <div className={styles.OrderDiv}>

                            <h1 className='text-white'>অর্ডার করতে নিচের ফর্মটি পূরণ করে সাবমিট করুন !</h1>



                        </div>
                    
                    </Col>

                </Row>

            </Container>

        </section>

 
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Checkout Form
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

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

                        <button> <RiShoppingCart2Line/> Place Order  BDT 49.00</button>

                    </div>

                    </Col>

                </Row>

            </Container>

        </section>

        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Footer Widget
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className={styles.SocialIcons}>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={12}>

                        <div className={styles.SocialIconsList}>
                            <Link href='' className={styles.Fb} > <FaFacebookF/></Link>
                            <Link href='' className={styles.Yt} > <FaYoutube/></Link>
                            <Link href='' className={styles.InS} > <AiFillInstagram/></Link>
                            <Link href='' className={styles.Tw} > <FaTwitter/></Link>


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

            <Container>

                <Row>

                    <Col md={6}>

                        <div className={styles.Logo}>

                            <img src="images/landing_6/bike_logo.svg" alt="" />

                        </div>
                    
                    </Col>

                    <Col md={6}>

                        <div className={styles.FooterMenu}>
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

        </section>

        

        

    
    
    </div>

  )
}

export default LandingSix