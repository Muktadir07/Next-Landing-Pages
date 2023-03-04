import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import { RiShoppingCart2Line } from 'react-icons/ri';
import styles from '../../../styles/landing_thirteen/landing_thirteen.module.css';

const LandingThirteen = () => {
  return (
    <div className={styles.LandingThirteen}>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Top Bar
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
       <section className={styles.topBar}>

            <div className={styles.LogoDiv}>

                <img className='' src="images/landing_13/logo_milk.svg" alt="" />

            </div>


       </section>

       {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Banner Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      
        <section className={styles.Banner}>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={10}>
                        <div className={styles.headerTitle}>

                            <h1> শিশুদের নিয়মিত দুধ খাওয়ার ফলে <span> মস্তিষ্কের বিকাশ হাড় ও দাঁত </span>শক্তিশালী করে।</h1>

                        </div>

                        <div className={styles.LogoDiv}>

                            <img className='milkImg' src="images/landing_13/milk_container.png" alt="" />

                        </div>
                    </Col>


                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Discount Price
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      

        <section className={styles.DiscountPrice}>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={10}>

                        <div className={styles.bluebg}>

                            <div className={styles.imageBox}>

                                <img className='' src="images/landing_13/bubble.svg" alt="" />

                            </div>

                            <div className={styles.text}>

                                <h1>ডিস্কাউন্ট মূল্য: ১৬৯০ টাকা</h1>

                                <h2>অর্ডার করতে নিচের বাটনে ক্লিক করুন</h2>

                            </div>

                            <div className={styles.btnBox}>
                                        
                                <Link href='' className={styles.bg}> অর্ডার করুন</Link>

                            </div>
                                

                        </div>
                    
                    </Col>

                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Importance Price
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className={styles.Importance}>

            <Container>

                <Row className='justify-content-center'>

                    <Col>

                        <div className={styles.headerTitle}>

                            <h1> আমাদের এই দুধ কেন স্বাস্থ্যের পক্ষে উপকারি ?</h1>

                        </div>
                    
                    </Col>

                </Row>

                <Row>

                    <Col lg={3} xs={6}>
                        <div className={styles.cardBox}>
                            <div className={styles.iconCard}>
                                <div className={styles.icon}>
                                    <FaCheckCircle/>

                                </div>
                                <div className={styles.text}>

                                    <h3>হাড় ও পেশিকে শক্তিশালী করতে</h3>

                                </div>

                            </div>

                        </div>
                    
                    </Col>
                    <Col lg={3} xs={6}>
                        <div className={styles.cardBox}>

                            <div className={styles.iconCard}>

                                <div className={styles.icon}>

                                    <FaCheckCircle/>

                                </div>
                                <div className={styles.text}>

                                    <h3>দৃষ্টি এবং মস্তিষ্কের বিকাশে জোরদার করে </h3>

                                </div>

                            </div>

                        </div>
                    
                    </Col>

                    <Col lg={3} xs={6}>
                        <div className={styles.cardBox}>

                            <div className={styles.iconCard}>

                                <div className={styles.icon}>

                                    <FaCheckCircle/>

                                </div>
                                <div className={styles.text}>

                                    <h3>বাচ্চাদের হজম ব্যবস্থা শক্তিশালী করে</h3>

                                </div>

                            </div>

                        </div>
                    
                    </Col>

                    <Col lg={3} xs={6}>
                        <div className={styles.cardBox}>

                            <div className={styles.iconCard}>

                                <div className={styles.icon}>

                                    <FaCheckCircle/>

                                </div>
                                <div className={styles.text}>

                                    <h3>শিশুর ত্বক উজ্জ্বলতা কার্যের সঠিক  রাখতে  </h3>

                                </div>

                            </div>

                        </div>
                    
                    </Col>

                    <Col lg={3} xs={6}>
                        <div className={styles.cardBox}>

                            <div className={styles.iconCard}>

                                <div className={styles.icon}>

                                    <FaCheckCircle/>

                                </div>
                                <div className={styles.text}>

                                    <h3>বাচ্চাদের উচ্চতা এবং ওজন বৃদ্ধি</h3>

                                </div>

                            </div>

                        </div>
                    
                    </Col>

                    <Col lg={3} xs={6}>
                        <div className={styles.cardBox}>

                            <div className={styles.iconCard}>

                                <div className={styles.icon}>

                                    <FaCheckCircle/>

                                </div>
                                <div className={styles.text}>

                                    <h3>শিশুর শরীরে রোগপ্রতিরোধ ক্ষমতা বাড়ায়</h3>

                                </div>

                            </div>

                        </div>
                    
                    </Col>
                    <Col lg={3} xs={6}>
                        <div className={styles.cardBox}>

                            <div className={styles.iconCard}>

                                <div className={styles.icon}>

                                    <FaCheckCircle/>

                                </div>
                                <div className={styles.text}>

                                    <h3>শিশুর ব্যাকটিরিয়া আরও শক্তিশালী করতে</h3>

                                </div>

                            </div>

                        </div>
                    
                    </Col>
                    <Col lg={3} xs={6}>
                        <div className={styles.cardBox}>

                            <div className={styles.iconCard}>

                                <div className={styles.icon}>

                                    <FaCheckCircle/>

                                </div>
                                <div className={styles.text}>

                                    <h3> দাঁতের স্বাস্থ্যের উন্নতি করে</h3>

                                </div>

                            </div>

                        </div>
                    
                    </Col>


                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Can Images 
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
       <section className={styles.imgCan}>

        <Container>
            <Row className='justify-content-space-between'>

                <Col lg={3} xs={6}>
                    <div className={styles.imageBox}>

                        <img src="images/landing_13/tin1.png" alt="" />

                    </div>
                
                </Col>
                <Col lg={3} xs={6}>
                    <div className={styles.imageBox}>

                        <img src="images/landing_13/tin2.png" alt="" />

                    </div>
                
                </Col>
                <Col lg={3} xs={6}>
                    <div className={styles.imageBox}>

                        <img src="images/landing_13/tin3.png" alt="" />

                    </div>
                
                </Col>
                <Col lg={3} xs={6}>
                    <div className={styles.imageBox}>

                        <img src="images/landing_13/tin4.png" alt="" />

                    </div>
                
                </Col>

            </Row>

            <Row className='justify-content-center'>

              <Col>
              <div className={styles.text}>

                  <h2>মূল্য- ১০০০ টাকা</h2>

                  <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                </div>

                <div className={styles.btnBox}>
                                        
                    <Link href='' className={styles.bg}>অর্ডার করতে এখানে ক্লিক করুন</Link>

                </div>
              
              </Col>

            </Row>

        </Container>

       </section>

       {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Nutrients Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
       
       <section className={styles.Nutrients}>

        <Container>

            <Row className='justify-content-center'>

                <Col lg={8}>

                    <div className={styles.headerTitle}>

                        <h1>পেডিয়াসুর বেবি মিল্ক কি ?</h1>

                    </div>
                    <div className={styles.text}>

                        <p>1-12 বছর বয়সের মধ্যে শিশুদের জন্য সম্পূর্ণ, সুষম পুষ্টি প্রদান করে। একটি শিশু দ্রুত শারীরিক এবং জ্ঞানীয় বিকাশের মধ্য দিয়ে যায় এবং এটি পর্যাপ্ত পুষ্টি গ্রহণের প্রয়োজন হয়। আমাদের এই দুধে রয়েছে 34টি প্রয়োজনীয় পুষ্টির উপাদান,  ভিটামিন K2 যোগ করা হয়েছে। একসাথে, এই পুষ্টিগুলি হাড়কে দীর্ঘস্থায়ী করতে সাহায্য করবে এবং আপনার সন্তানের মস্তিষ্কের বিকাশে বৃদ্ধি সহায়তা করে।</p>

                    </div>


                    
                </Col>

            </Row>

        </Container>

       </section>

       {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            CallUs Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
       
        <section className={styles.CallUs}>
            <Container>

                <Row className='justify-content-center'>

                    <Col lg={6}>

                        <div className={styles.imageBox}>

                            <div className={styles.btnBox}>
                                            
                                    <Link href='' className={styles.bg}><AiOutlineShoppingCart/> অর্ডার করুন</Link>

                                </div>

                                <div className={styles.text}>

                                    <h2>+8801799733234</h2>

                                    <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5>

                                </div>

                            </div>

                            

                    </Col>

                </Row>

            </Container>

        </section>



        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Video Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
       
       <section className={styles.Video}>

        <Container>

            <Row>

                <Col lg={12}>

                    <div className={styles.imageBox}>

                        <img className='' src="images/landing_13/video1.png" alt="" />

                    </div>

                
                </Col>

            </Row>

        </Container>

       </section>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Our Clients
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
       
       <section className={styles.Clients}>

        <Container>

            <Row>

                <Col lg={12} >

                    <div className={styles.text}>

                        <h2>আমাদের মূল্যবান গ্রাহক পর্যালোচনা</h2>

                    </div>

                </Col>

            </Row>

            <Row>

                <Col lg={3}  md={6}>

                    <div className={styles.clientBox}>

                        <div className={styles.imageBox}>

                            <img className='' src="images/landing_13/client1.png" alt="" />

                        </div>
                        <div className={styles.clientInfo}>

                            <h5>Ratna</h5>
                            <p>Varanasi, India</p>

                        </div>

                        <div className={styles.text}>
                            <p>I always buy Nike shoes. You feel and think that you wear a feather, i love it.</p>

                        </div>


                    </div>

                </Col>
                <Col lg={3} md={6}>

                    <div className={styles.clientBox}>

                        <div className={styles.imageBox}>

                            <img className='' src="images/landing_13/client1.png" alt="" />

                        </div>
                        <div className={styles.clientInfo}>

                            <h5>Ratna</h5>
                            <p>Varanasi, India</p>

                        </div>

                        <div className={styles.text}>
                            <p>I always buy Nike shoes. You feel and think that you wear a feather, i love it.</p>

                        </div>


                    </div>

                </Col>
                <Col lg={3} md={6}>

                    <div className={styles.clientBox}>

                        <div className={styles.imageBox}>

                            <img className='' src="images/landing_13/client1.png" alt="" />

                        </div>
                        <div className={styles.clientInfo}>

                            <h5>Ratna</h5>
                            <p>Varanasi, India</p>

                        </div>

                        <div className={styles.text}>
                            <p>I always buy Nike shoes. You feel and think that you wear a feather, i love it.</p>

                        </div>


                    </div>

                </Col>
                <Col lg={3} md={6}>

                    <div className={styles.clientBox}>

                        <div className={styles.imageBox}>

                            <img className='' src="images/landing_13/client1.png" alt="" />

                        </div>
                        <div className={styles.clientInfo}>

                            <h5>Ratna</h5>
                            <p>Varanasi, India</p>

                        </div>

                        <div className={styles.text}>
                            <p>I always buy Nike shoes. You feel and think that you wear a feather, i love it.</p>

                        </div>


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

                <Col>
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

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Footer Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        <section className={styles.Footer}>

        <div className={styles.imageBox}>

            <img className='' src="images/landing_13/milk_bottle.png" alt="" />

        </div>


            <Container>

                <Row>

                    <Col lg={5}>
                    
                    </Col>

                    <Col lg={7}>

                    <Row className='justify-content-between'>

                        <Col xl={3} lg={4} md={4}>
                        <div className={styles.footermenu}>

                        <h5>প্রয়োজনে কল করুন</h5>

                            <ul className=''>

                                <li><Link href="#"><BsTelephone/>
                                    00 0392 96 32</Link>
                                </li>

                            </ul>
                            <ul className={styles.social}>

                                <li>
                                    <Link href="#"><FiInstagram/></Link>
                                </li>
                                <li>
                                    <Link href="#"><FiFacebook/></Link>
                                </li>

                                <li>
                                    <Link href="#"><FiTwitter/></Link>
                                </li>

                            </ul>

                        </div>

                        </Col>
                        <Col xl={3} lg={4} md={4}>

                        <div className={styles.footermenu}>

                            <h5>Important Links</h5>

                            <ul className=''>

                                <li><Link href="#">
                                Privacy Policy</Link>
                                </li>
                                <li><Link href="#">
                                Terms & Conditions</Link>
                                </li>
                                <li><Link href="#">
                                Contact</Link>
                                </li>

                            </ul>

                        </div>

                        </Col>
                        <Col xl={4} lg={4} md={4}>

                        <div className={styles.footermenu}>

                            <h5>Email us</h5>

                                <ul className=''>

                                    <li><Link href="#"><BiEnvelope/>
                                    oder@freshen.com</Link>
                                    </li>

                                </ul>

                        </div>


                        </Col>

                        </Row>
                        <Row>
                        <Col lg={12} className={styles.copyRight}>
                            <hr></hr>
                            <div className='d-flex justify-content-lg-end justify-content-center'>

                            <p>2022 All Rights Reserved | Designed by Soft IT Care Development Team</p>

                            </div>
                        </Col>
                        </Row>
                    
                    </Col>

                </Row>

            </Container>

        </section>


    </div>
  )
}

export default LandingThirteen