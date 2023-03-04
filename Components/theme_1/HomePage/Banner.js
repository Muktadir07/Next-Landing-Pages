import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { BiCategory } from "react-icons/bi";

// Import Swiper React components
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <section className='Banner'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className='BannerSlider'>
              <Swiper
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                centeredSlides={true}
                autoplay={{
                  delay: 100,
                  disableOnInteraction: true,
                }}
                modules={[Pagination]}
                className='mySwiper'
              >
                {/* item */}
                <SwiperSlide>
                  <div className='BannerItem'>
                    <img src='/theme_1/images/slider.png' alt='' />
                  </div>
                </SwiperSlide>

                {/* item */}
                <SwiperSlide>
                  <div className='BannerItem'>
                    <img src='/theme_1/images/slider.png' alt='' />
                  </div>
                </SwiperSlide>

                {/* item */}
                <SwiperSlide>
                  <div className='BannerItem'>
                    <img src='/theme_1/images/slider.png' alt='' />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
