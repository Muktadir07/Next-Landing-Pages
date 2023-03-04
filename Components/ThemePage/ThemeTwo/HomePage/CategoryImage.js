import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { FiCircle } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Autoplay, Pagination, Navigation,Grid } from "swiper";
import Link from 'next/link';

const CategoryImage = () => {
  return (
    <>
    <section id='category-image'>
      <Container>
        <Row>
          <Col lg={12}>
          <div className="heading d_flex align-items-center">
            <div className="circle">
              <FiCircle/>
            </div>
            <h2 className="my-auto mx-lg-3 mx-2">Explore Popular Categories</h2>
            <div className="circle">
              <FiCircle/>
            </div>
          </div>
          </Col>
          <Col lg={12}>
          <div className='more-btn'>
            <Link href='/all-products' className='btn pt-0'>All Product <BsArrowRight/></Link>
          </div>
          </Col>

          <Col lg={12}>
            <div className='category-slider'>
            <Swiper
              slidesPerView={7}
              spaceBetween={20}
              pagination={{
                type: "progressbar",
              }}
              grid={{
                rows: 1,
                fill: "row",
            }}
            breakpoints={{ 
              320: {
                slidesPerView: 4,
                spaceBetween: 7
                
              },
              // when window width is >= 480px
              // when window width is >= 640px
              640: {
                slidesPerView: 7,
                spaceBetween: 40,
              }
             }}
              autoplay={{
                delay: 2500,
                loop: true,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation,Grid]}
              className="mySwiper"
            >
                  <SwiperSlide>
                  <div className='imagebox'>
                      <img src="../images/theme_2/image130.png" alt=""/>
                      <p>T-Shirt</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='imagebox'>
                        <img src="../images/theme_2/image 131.png" alt=""/>
                        <p>Bags</p>
                    </div>
                    </SwiperSlide>
                  <SwiperSlide>
                  <div className='imagebox'>
                      <img src="../images/theme_2/image 129.png" alt=""/>
                      <p>Women</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='imagebox'>
                      <img src="../images/theme_2/image 135.png" alt=""/>
                      <p>Men</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='imagebox'>
                      <img src="../images/theme_2/image 136.png" alt=""/>
                      <p>Accessories</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='imagebox'>
                      <img src="../images/theme_2/image130.png" alt=""/>
                      <p>Watches</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='imagebox'>
                      <img src="../images/theme_2/image 129.png" alt=""/>
                      <p>Accessories</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='imagebox'>
                      <img src="../images/theme_2/image 135.png" alt=""/>
                      <p>Men</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='imagebox'>
                      <img src="../images/theme_2/image 135.png" alt=""/>
                      <p>Women</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='imagebox'>
                      <img src="../images/theme_2/image 131.png" alt=""/>
                      <p>Sport Shoes</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='imagebox'>
                      <img src="../images/theme_2/image 136.png" alt=""/>
                      <p>Women</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='imagebox'>
                        <img src="../images/theme_2/image 131.png" alt=""/>
                        <p>Bags</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                  <div className='imagebox'>
                      <img src="../images/theme_2/image 129.png" alt=""/>
                      <p>Accessories</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='imagebox'>
                      <img src="../images/theme_2/image 135.png" alt=""/>
                      <p>Men</p>
                    </div>
                  </SwiperSlide>
            </Swiper>

            </div>
          </Col>
        </Row>
      </Container>

    </section>
    </>
  )
}

export default CategoryImage