import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { BsCheck2Circle, BsCheckCircleFill, BsTelephone } from 'react-icons/bs';
import { FaFacebookF, FaGooglePlus, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import styles from '../../../styles/landing_eleven/landing_eleven.module.css';

const LandingEleven = () => {
  return (
    <div className={styles.LandingEleven}>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Banner
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className={styles.Banner}>

            <div className={styles.img_center}>

                <img className='' src="images/landing_11/dashed-circle.svg" alt="" />

            </div>

            <div className={styles.img_right}>

                <img className='' src="images/landing_11/bannerdesign.svg" alt="" />

            </div>
            <div className={styles.img_bottom_right}>

                <img className='' src="images/landing_11/cross.svg" alt="" />

            </div>

            <Container>

                <Row>

                    <Col lg={5}>

                        <div className={styles.Logo}>

                            <img className='' src="images/landing_11/logo.svg" alt="" />

                        </div>

                        <div className={styles.text}>

                            <h1>অরজিনাল <span>চামড়ার লেদার</span>  মানিব্যাগ টিকবে বছরের পর বছর </h1>

                            <div className={styles.textBox}>

                                <h2>ডিস্কাউন্ট মূল্য:</h2>

                                <div className={styles.textCircle}>

                                <img className='' src="images/landing_11/textCircle.svg" alt="" />

                                <h2>২৫৫০</h2>

                                </div>

                                <h2>টাকা</h2>

                            </div>

                        </div>
                                        
                    </Col>

                    <Col lg={7} className='d-flex justify-content-center'>

                        <div className={styles.bannerBG}>
                            <img className={styles.backgroundOne} src="images/landing_11/circle-yellowbg.png" alt="" />


                            <img className={styles.wallet} src="images/landing_11/wallet.png" alt="" />

                        </div>
                    
                    </Col>

                </Row>

                <Row className='justify-content-start'>
                    
                    <Col lg={8}>

                        <div className={styles.btnBox}>
                                        
                            <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                            <h2>ডেলিভারী চার্জ ফ্রি</h2>


                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            WhyUs From Us
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        

        <section className={styles.WhyUs}>

            <div className={styles.LeftImage}>

                <img className={styles.imgBlack} src="images/landing_11/dotted.svg" alt="" />

            </div>

            <div className={styles.RightImage}>

                <img className={styles.imgBlack} src="images/landing_11/dotted.svg" alt="" />

            </div>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={10} xs={12}>

                    <div className={styles.headerTitle}>

                        <h2>আমাদের থেকে কেন কিনবেন?</h2>

                    </div>

                    <div className={styles.text}>

                        <p>আমরা আপনাকে দিচ্ছে ১০০% অরজিনাল চামড়ার লেদার মানিব্যাগ। মানিব্যাগটি টেকসই এবং আরামদায়ক এবং কমফোর্টেবল পায় ব্যবহার করার সময়। মাঝারি থেকে বড় সাইজ ফ্যাশনেবলভাবে আসল চামড়া বা কৃত্রিম ব্যবহার করে ডিজাইন করা হয়। স্টাইলটি চটকদার এবং রঙটি ট্রেন্ডি। মানিব্যাগটি দীর্ঘস্থায়ী এবং দেখতে সুন্দর</p>
                        

                    </div>
                    
                    </Col>

                </Row>

            </Container>

        </section>

        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Wallets Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className={styles.Wallets}>

            <div className={styles.RightImage}>

                <img className={styles.imgBlack} src="images/landing_11/dotted_square.svg" alt="" />

            </div>
                    
            <Container>

                <Row>

                <Col lg={3} xs={6}>
                    <div className={styles.Image}>

                    <img className={styles.imgItem} src="images/landing_11/wallet1 (2).png" alt="" />

                    </div>
                
                </Col>

                <Col lg={3} xs={6}>
                    <div className={styles.Image}>

                    <img className={styles.imgItem} src="images/landing_11/wallet2.png" alt="" />

                    </div>
                
                </Col>

                <Col lg={3} xs={6}>
                    <div className={styles.Image}>

                    <img className={styles.imgItem} src="images/landing_11/wallet3.png" alt="" />

                    </div>
                
                </Col>

                <Col lg={3} xs={6}>
                    <div className={styles.Image}>

                    <img className={styles.imgItem} src="images/landing_11/wallet4.png" alt="" />

                    </div>
                
                </Col>

                </Row>

                <Row className='justify-content-center'>
                        
                    <Col lg={8}>

                        <div className={styles.btnBox}>
                                        
                            <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>


                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Specification
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className={styles.Specification}>

            <div className={styles.LeftImage}>

                <img className={styles.imgBlack} src="images/landing_11/wave.svg" alt="" />

            </div>

            <div className={styles.LeftImage2}>

                <img className={styles.imgBlack} src="images/landing_11/quarter_circle.svg" alt="" />

            </div>
            <div className={styles.RightImage}>

                <img className={styles.imgBlack} src="images/landing_11/Ellipse.svg" alt="" />

            </div>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={10} xs={12}>
                    <h1>কেন এই স্টাইলিশ 100%<br/> <span> চামড়া মানিব্যাগ</span> ওয়ালেট ব্যবহার করবেন?</h1>
                    
                    </Col>

                </Row>

                <Row className='mt-lg-5 mt-2 row-eq-height'>

                    <Col lg={4} md={6}>
                        <div className={styles.IconBox}>
                            <div className={styles.icon}>
                                <BsCheck2Circle/>

                            </div>
                        <div className={styles.text}>

                            <p>প্রিমিয়াম কোয়ালিটি 100% আসল চামড়া</p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={styles.IconBox}>
                            <div className={styles.icon}>
                                <BsCheck2Circle/>

                            </div> 
                        <div className={styles.text}>

                            <p>খাঁটি চামড়া দিয়ে তৈরি মানিব্যাগ আপনার ব্যক্তিত্বের বহি:প্রকাশ ঘটাবে।</p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={styles.IconBox}>
                            <div className={styles.icon}>
                                <BsCheck2Circle/>

                            </div>
                        <div className={styles.text}>

                            <p>টেকসই স্টাইলটি চটকদার উচ্চ গুনসম্পন্ন মানিব্যাগ </p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>
                    <Col lg={4} md={6}>
                        <div className={styles.IconBox}>
                            <div className={styles.icon}>
                                <BsCheck2Circle/>

                            </div>
                        <div className={styles.text}>

                            <p>আমাদের থেকে জেনুইন লেদার মানি ব্যাগ কিনুন সেরা দামে </p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={styles.IconBox}>
                            <div className={styles.icon}>
                                <BsCheck2Circle/>

                            </div>
                        <div className={styles.text}>

                            <p>আপনি বন্ধু, বিবাহ, ইভেন্টের বা অফিসের সহকর্মীকে উপহার দিতে পারেন। </p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={styles.IconBox}>
                            <div className={styles.icon}>
                                <BsCheck2Circle/>

                            </div>
                        <div className={styles.text}>

                            <p>এতে 20টি পকেট রয়েছে। ক্রেডিট কার্ড, নগদ, চাবি, ড্রাইভার লাইসেন্স দৈনন্দিন জিনিসপত্র বহন করা সহজ </p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>

                </Row>

            </Container>


        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Phone Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        

        <section className={styles.PhoneSection}>

        <Container>

            <Row className='justify-content-center'>

              <Col>

                <div className={styles.btnBox}>
                                        
                <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                </div>

                

                <div className={styles.text}>

                  <h2>+8801799733234</h2>

                  <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5>

                </div>
              
              </Col>

            </Row>
            
          </Container>



        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Form Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        <section className="OrderConfirmFrom">

            <Container>

              <Row className='justify-content-center'>

                <Col lg={8}>
                    <div className={styles.headerTitle}>

                        <h2>অর্ডার কনফার্ম করতে নিচের ফর্মটি পূরণ করুন।</h2>

                      </div>
                
                </Col>
                
              </Row>

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
            Footer Icon Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className={styles.Info}>

            <Container>

                <Row className='mt-5 justify-content-between'>

                    <Col xs={4} lg={3}>
                        <div className={styles.IconBox}>
                            <div className={styles.icon}>

                                <img className={styles.imgBlack} src="images/landing_11/original.png" alt="" />


                            </div>
                        <div className={styles.text}>

                            <h4>১০০% অরিজিনাল</h4>
                        
                        </div>
                            
                        </div>

                    </Col>
                    <Col xs={4} lg={3}>
                        <div className={styles.IconBox}>
                            <div className={styles.icon}>

                                <img className={styles.imgBlack} src="images/landing_11/box.png" alt="" />


                            </div>
                        <div className={styles.text}>

                            <h4>৭ দিনের মধ্যে রিটার্ন</h4>
                        
                        </div>
                            
                        </div>

                    </Col>
                    <Col xs={4} lg={3}>
                        <div className={styles.IconBox}>
                            <div className={styles.icon}>

                                <img className={styles.imgBlack} src="images/landing_11/secured.png" alt="" />


                            </div>
                        <div className={styles.text}>

                            <h4>ওয়ারেন্টি আছে </h4>
                        
                        </div>
                            
                        </div>

                    </Col>
                </Row>
            </Container>

        </section>

         {/* Section Gaps */}
         <div className={styles.section_gaps}></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Order Button Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className={styles.OrderBtn}>

            <Container>

                <Row>

                    <Col lg={12}>

                        <div className={styles.DisplayBox}>

                                <div className={styles.LeftImage}>

                                    <img className={styles.imgBlack} src="images/landing_11/rays.svg" alt="" />

                                </div>

                                
                                <div className={styles.RightImage}>

                                    <img className={styles.imgBlack} src="images/landing_11/rays.svg" alt="" />

                                </div>

                                <h1>৩০% ডিস্কাউন্ট এর পর মূল্যেঃ ১৬৯০ টাকা</h1>

                                <h2>অর্ডার করতে নিচের বাটনে ক্লিক করুন</h2>

                                <div className={styles.btnBox}>
                                        
                                    <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>


                                </div>
                        </div>

                    </Col>

                </Row>

            </Container>
            
        </section>

        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Footer Widget Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className={styles.FooterWidget}>

        

        <Container className=''>


            <Row className='front my-3 '>

                <Col lg={4} xl={4}>

                    <div className={styles.footerMenu}>

                        <h5>Contact Us</h5>

                            <ul className=''>

                                <li><Link href="#"><BsTelephone/>
                                    00 0392 96 32</Link>
                                </li>

                                <li><Link href="#"><FiMail/>
                                    oder@freshen.com</Link>
                                </li>

                            </ul>

                    </div>

                </Col>

                <Col lg={3} xl={4} className=''>

                    <div className={styles.footerMenu}>

                        <h5>Important Link</h5>

                            <ul className=''>

                                <li>
                                    <Link href="#">Refund Policy </Link>
                                </li>

                                <li>
                                    <Link href="#">Privacy Policy</Link>
                                </li>

                                <li>
                                    <Link href="#">Terms and Conditions</Link>
                                </li>

                            </ul>

                    </div>

                </Col>

                <Col lg={5} xl={4}>

                    <div className={styles.footerMenu}>

                        

                        <h2 className='text-lg-end'>+8801799733234</h2>
                        <h5 className='text-lg-end text-center'>অর্ডার পেতে কল করুন এই নাম্বারে</h5>

                    </div>

                </Col>
                <hr className='mt-4' />


            </Row>

            <Row>

                <Col lg={6}>
                    <div className={styles.socialBox}>

                        <ul className={styles.social}>

                            <li>
                                <Link href="#"><FaFacebookF/></Link>
                            </li>

                            <li>
                                <Link href="#"><FaTwitter/></Link>
                            </li>

                            <li>
                                <Link href="#"><FaGooglePlus/></Link>
                            </li>

                            <li>
                                <Link href="#"><FaLinkedinIn/></Link>
                            </li>

                        </ul>
                    </div>

                    
                
                </Col>

                <Col lg={6} className='d-flex justify-content-lg-end justify-content-center'>

                    <p>2022 All Rights Reserved | Designed by Soft IT Care Development Team</p>
                </Col>
            </Row>

        </Container>

</section>





    </div>
  )
}

export default LandingEleven