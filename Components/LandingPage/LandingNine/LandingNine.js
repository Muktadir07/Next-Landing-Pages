import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { BsCheckCircleFill, BsTelephone } from 'react-icons/bs';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import styles from '../../../styles/landing_nine/landing_nine.module.css';

const LandingNine = () => {
  return (
    <div className={styles.LandingNine}>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Banner
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className={styles.Banner}>

            <Container>

                <Row>

                    <Col lg={9}>

                        <div className={styles.BannerContent}>
                            <div className={styles.Logo}>

                              <img className={styles.imgBlack} src="images/landing_9/logo9.svg" alt="" />


                            </div>

                            <div className={styles.text}>

                                <h1><span>পুষ্টিগুণ বৃদ্ধি</span> মধুময় বাদাম সেবনে অসংখ্য রোগবালাই থেকে পরিত্রাণ পাওয়া যায়</h1>

                                <h4><span>পূর্বের মূল্য: ১০৫০ টাকা</span></h4>

                                <h2>মূল্য: ১০০০ টাকা</h2>

                                <div className={styles.btnBox}>
                                    
                                    <Link href='' className={styles.bg}> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                                </div>

                            </div>

                        </div>

                    
                    </Col>

                </Row>

                
            </Container>

          </section>

          {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Hotline Number
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className={styles.Hotline}>

          <Container>

            <Row>

              <Col lg={12}>

                <div className={styles.hotlineBG}>

                  <div className={styles.text}>

                    <h3>যে কোন প্রয়োজনে কল করুন</h3>

                    <h2> <span>হটলাইন:</span>01600-324567</h2>

                  </div>

                </div>
              
              </Col>


            </Row>

          </Container>

        </section>

        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Honey Jar Images
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
  
        <section className={styles.JarImage}>

          <Container>

            <Row>

              <Col lg={3} xs={6}>
                <div className={styles.Image}>

                <img className={styles.imgItem} src="images/landing_9/jar1.png" alt="" />

                </div>
              
              </Col>

              <Col lg={3} xs={6}>
                <div className={styles.Image}>

                <img className={styles.imgItem} src="images/landing_9/jar2.png" alt="" />

                </div>
              
              </Col>

              <Col lg={3} xs={6}>
                <div className={styles.Image}>

                <img className={styles.imgItem} src="images/landing_9/jar3.png" alt="" />

                </div>
              
              </Col>

              <Col lg={3} xs={6}>
                <div className={styles.Image}>

                <img className={styles.imgItem} src="images/landing_9/jar4.png" alt="" />

                </div>
              
              </Col>

            </Row>
            
          </Container>

        </section>

        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Middle Order Btn
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className={styles.OrderBtn}>

          <div className={styles.Leftlayer}>

            <img className={styles.imgBlack} src="images/landing_9/honey_layer.svg" alt="" />

          </div>
          <div className={styles.Rightlayer}>

            <img className={styles.imgBlack} src="images/landing_9/honey_layer.svg" alt="" />

          </div>

          <Container>

            <Row className='justify-content-center'>

              <Col lg={8}>

                <div className={styles.btnBox}>
                                      
                    <Link href='' className={styles.bg}>অর্ডার করতে এখানে ক্লিক করুন</Link>

                </div>

                <div className={styles.text}>

                  <h5>আর নয় দুশ্চিন্তা, আপনার জন্য মধুময় বাদামই যথেষ্ঠ। ১০০% কার্যকরী ও পরীক্ষিত প্রডাক্ট। </h5>

                </div>
              
              </Col>

            </Row>
            
          </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Benefit section Start
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className={styles.Benefit}>

          <Container>

            <Row className='justify-content-center'>

              <Col lg={9} xs={12}>

                <div className={styles.headerTitle}>
                  <h2>মধুময় বাদাম খাওয়া ফলে যে সকল সমস্যার সমাধান করবে </h2>

                </div>
              
              </Col>

            </Row>

            <Row>

                  <Col xl={3} lg={6} md={6} className='my-1'>

                    <div className={styles.cardBox}>

                      <div className={styles.text}>

                        <h3>হজমে সহায়তা</h3>
                        <p>এতে যে শর্করা থাকে, তা সহজেই হজম হয়। কারণ, এতে যে ডেক্সট্রিন থাকে, তা সরাসরি রক্তে প্রবেশ করে।</p>

                      </div>

                    </div>
                  
                  </Col>
                  <Col xl={3} lg={6} md={6} className='my-1'>

                    <div className={styles.cardBox}>

                      <div className={styles.text}>

                        <h3>শক্তি প্রদায়ী </h3>
                        <p> মধু ভালো শক্তি প্রদায়ী খাদ্য। তাপ ও শক্তির ভালো উৎস। মধু দেহে তাপ ও শক্তি জুগিয়ে শরীরকে সুস্থ রাখে।</p>

                      </div>

                    </div>
                  
                  </Col>
                  <Col xl={3} lg={6} md={6} className='my-1'>

                    <div className={styles.cardBox}>

                      <div className={styles.text}>

                        <h3>কোষ্ঠকাঠিন্য দূর করে</h3>
                        <p>মধুতে রয়েছে ভিটামিন বি-কমপ্লেক্স। খাঁটি মধু ভোরবেলা পান করলে এটি ডায়রিয়া ও কোষ্ঠকাঠিন্য দূর করে। </p>

                      </div>

                    </div>
                  
                  </Col>
                  <Col xl={3} lg={6} md={6} className='my-1'>

                    <div className={styles.cardBox}>

                      <div className={styles.text}>

                        <h3>রক্তশূন্যতায়</h3>
                        <p>মধু রক্তের হিমোগ্লোবিন গঠনে সহায়তা করে বলে এটি রক্তশূন্যতায় বেশ ফলদায়ক। এতে থাকে খুব বেশি লৌহ ও ম্যাঙ্গানিজ।</p>

                      </div>

                    </div>
                  
                  </Col>

            </Row>

            <Row className=' my-1 my-lg-3'>

                  <Col xl={3} lg={6} md={6} className='my-1'>

                    <div className={styles.cardBox}>

                      <div className={styles.text}>

                        <h3>যৌন দুর্বলতায়</h3>
                        <p>পুরুষদের মধ্যে যাঁদের যৌন দুর্বলতা রয়েছে, তাঁরা যদি প্রতিদিন মধু ও ছোলা মিশিয়ে খান, তাহলে বেশ উপকার পাবেন।</p>

                      </div>

                    </div>
                  
                  </Col>
                  <Col xl={3} lg={6} md={6} className='my-1'>

                    <div className={styles.cardBox}>

                      <div className={styles.text}>

                        <h3>পাকস্থলীর সুস্থতায় </h3>
                        <p>মধু পাকস্থলীর কাজকে জোরালো করে এবং হজমের গোলমাল দূর করে। এর ব্যবহার হাইড্রোক্রলিক অ্যাসিড ক্ষরণ কমিয়ে দেয়</p>

                      </div>

                    </div>
                  
                  </Col>
                  <Col xl={3} lg={6} md={6} className='my-1'>

                    <div className={styles.cardBox}>

                      <div className={styles.text}>

                        <h3>পানিশূন্যতায়</h3>
                        <p> ডায়রিয়া হলে এক লিটার পানিতে ৫০ মিলিলিটার মধু মিশিয়ে খেলে দেহে পানিশূন্যতা রোধ করা যায়।</p>

                      </div>

                    </div>
                  
                  </Col>
                  <Col xl={3} lg={6} md={6} className='my-1'>

                    <div className={styles.cardBox}>

                      <div className={styles.text}>

                        <h3>দৃষ্টিশক্তি বাড়াতে</h3>
                        <p>চোখের জন্য ভালো। গাজরের রসের সঙ্গে মধু মিশিয়ে খেলে দৃষ্টিশক্তি বাড়ে।</p>

                      </div>

                    </div>
                  
                  </Col>

            </Row>

            
          </Container>

        </section>



        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Features section Start
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className={styles.Features}>

        <div className={styles.BeeImage}>

          <img className={styles.imgBlack} src="images/landing_9/bee1.svg" alt="" />

        </div>

          <Container>

            <Row className='justify-content-center'>

              <Col lg={9} xs={12}>

                <div className={styles.headerTitle}>
                  <h2>প্রতিদিন দুই চামচ মধুময় বাদাম আপনার  উপকার করবে </h2>

                </div>

              </Col>

            </Row>

            <Row>

              <Col lg={6} md={5} className="position-relative">

                <div className={styles.FeatureImage}>

                  <img className={styles.imgBlack} src="images/landing_9/honeyFeature.png" alt="" />

                </div>
              
              
              </Col>
              <Col lg={6} md={7}>

              <div className={styles.FeatureList}>

                <ul>
                    <li><div><BsCheckCircleFill/></div> <div><p>মধু ভালো শক্তি প্রদানকারী খাদ্য। মধু দেহে তাপ ও শক্তি জুগিয়ে শরীরকে সুস্থ রাখে।</p></div> </li>
                    <li><div><BsCheckCircleFill/></div> <div><p> মধুতে যে শর্করা থাকে তা সহজেই হজম হয়।</p></div></li>
                    <li><div><BsCheckCircleFill/></div> <div><p> হাঁপানি রোধে এবং ফুসফুসের যাবতীয় রোগ ও শ্বাসকষ্ট নিরাময়ে সহায়তাকারী।</p></div></li>
                    <li><div><BsCheckCircleFill/></div> <div><p> মধু অনিদ্রার ভালো ওষুধ। রাতে শোয়ার আগে এক গ্লাস পানির সঙ্গে দুই চা চামচ মধু মিশিয়ে খেলে এটি গভীর ঘুমে কাজ করে।</p></div></li>
                    <li><div><BsCheckCircleFill/></div> <div><p> মেয়েদের রূপচর্চার ক্ষেত্রে মাস্ক হিসেবে মধুর ব্যবহার বেশ জনপ্রিয়। মুখের ত্বকের মসৃণতা বৃদ্ধির জন্যও মধু ব্যবহৃত হয়।</p></div></li>
                  
                </ul>

              </div>
              
              </Col>

            </Row>

          </Container>

        </section>

        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            PriceSection section Start
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className={styles.PriceSection}>

        <div className={styles.BeeImage}>

          <img className={styles.imgBlack} src="images/landing_9/bee2.svg" alt="" />

        </div>

        <div className={styles.BeeImage2}>

          <img className={styles.imgBlack} src="images/landing_9/flower.svg" alt="" />

        </div>

          <Container>

            <Row className='justify-content-center'>

              <Col>

                <div className={styles.btnBox}>
                                        
                    <Link href='' className={styles.bg}>অর্ডার করতে এখানে ক্লিক করুন</Link>

                </div>

                

                <div className={styles.text}>

                  <h2>মূল্য- ১০০০ টাকা</h2>

                  <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                </div>
              
              </Col>

            </Row>
            
          </Container>

        </section>

        {/* Section Gaps */}
        <div className={styles.section_gaps}></div>


        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            WhyBuy section Start
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className={styles.WhyBuy}>

          <div className={styles.BeeImage}>

            <img className={styles.imgBlack} src="images/landing_9/honeyspoon.svg" alt="" />

          </div>

          <div className={styles.BeeImage2}>

            <img className={styles.imgBlack} src="images/landing_9/bee3.svg" alt="" />

          </div>

          <Container>

            <Row className='justify-content-center'>

                <Col lg={9} xs={12}>

                  <div className={styles.headerTitle}>

                    <h2>আমাদের থেকে কেন মধুময় বাদাম কিনবেন?</h2>

                  </div>

                  <div className={styles.text}>

                    <h5>ফ্রি হোম ডেলিভারি সুবিধা।</h5>
                    <h5>১০০% অরিজিনাল মধু ক্যাশব্যাক গ্যারান্টি</h5>
                    <h5>প্রোডাক্ট হাতে পেয়ে কোয়ালিটি যাচাই করে পেমেন্ট করার সুবিধা।</h5>
                    <h5>আমরা সুন্নত তরিকায় ব্যবসা করি</h5>
                    <h5>ফ্রি হেলথ টিপস ।</h5>

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

                        <h2>তাই আর দেরি না করে আজই অর্ডার করুন </h2>

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
            Footer section Start
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className={styles.Footer}>

          <div className={styles.BeeImage}>

          <img className={styles.imgBlack} src="images/landing_9/beelast.svg" alt="" />

          </div>

          <div className={styles.BeeImage2}>

          <img className={styles.imgBlack} src="images/landing_9/beelast.svg" alt="" />

          </div>

          <Container>

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
              <Col xl={3} lg={4} md={4}>

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
              <Col lg={12}>
                <hr></hr>
                <div className='d-flex justify-content-center'>

                  <p>Copyright © 2023 Hafsa. All rights reserved.</p>

                </div>
              </Col>
            </Row>
            
          </Container>


        </section>


    



    </div>
  )
}

export default LandingNine