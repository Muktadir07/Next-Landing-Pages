import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsArrowRight, BsFillCaretDownFill, BsGrid } from 'react-icons/bs'
import { FiCircle } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Autoplay, Pagination,Grid, Navigation } from "swiper";
import { BsCart3, BsChevronRight } from 'react-icons/bs';

const ShopPage = () => {
  return (
    <>
    <section id="product-page-carousel">
        <Container>
            <Row>
                    <Col lg={12}>
                        <div className="heading d_flex align-items-center">
                            <div className="circle">
                            <FiCircle/>
                            </div>
                            <h2 className="my-auto mx-lg-3 mx-2">All Products</h2>
                            <div className="circle">
                            <FiCircle/>
                            </div>
                        </div>
                    </Col>
                  <Row>
                    <Col lg={3}>
                    <div className="product-filter">
                        <h3 className="title">PRODUCT CATEGORIES</h3>
                        <hr className="my-1" />
                        <div className="filter-options">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Hamim Fasion
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            NS Fasion
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Levin
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            IELGY
                            </label>
                        </div>
                        </div>
                    </div>

                    <div className="product-filter">
                        <h3 className="title">Filter By Price</h3>
                        <hr className="my-1" />
                        <div className="filter-options">
                        <div className="wrapper">
                            <div className="slider">
                            <div className="progress" />
                            </div>
                            <div className="range-input">
                            <input type="range" className="range-min" min={0} max={10000} defaultValue={2500} step={50} />
                            <input type="range" className="range-max" min={0} max={10000} defaultValue={7500} step={50} />
                            </div>
                            <div className="price-input">
                            <div className="field">
                                <div className="text-left text-start">
                                <p>From:BDT</p>
                                <input type="number" className="input-min" defaultValue={2500} />
                                </div>
                            </div>
                            {/* <div class="separator">to</div> */}
                            <div className="field">
                                <div className="tect-right text-end">
                                <p>To:BDT</p>
                                <input type="number" className="input-max" defaultValue={7500} />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Col>

                    <Col lg={9}>
                        <Row className=''>
                            <Col lg={6} className='d-flex justify-content-center mb-3 mb-lg-0 justify-content-lg-start align-items-center'>
                                <div className="items-number">
                                    <p>We found <strong>1–25 </strong> of <strong> 56</strong> items for you!
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6} className=''>
                                    
                                        <div className="item-filters d-flex justify-content-end align-items-center">
                                        <div className="dropdown">
                                            <button className="btn dropdown-btn" type="button" data-bs-toggle="dropdown-list">Sort by: Featured <BsFillCaretDownFill/></button>
                                            <ul className="dropdown-list">
                                            <li><a className="dropdown-item" href="#">Item1</a></li>
                                            <li><a className="dropdown-item" href="#">Item2</a></li>
                                            <li><a className="dropdown-item" href="#">Item3</a></li>
                                            </ul>
                                        </div>
                                        
                                        {/* <form className>
                                        <div className="filter-choose">
                                            <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" defaultChecked />
                                            <label className="btn filter-btn" htmlFor="option1"><BsGrid/></label>
                                            <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
                                            <label className="btn filter-btn" htmlFor="option2"><AiOutlineUnorderedList/></label>
                                        </div>
                                        </form> */}
                                    </div>
                            </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                <div className='productlist-slider'>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    
                                    grid={{
                                        rows: 2,
                                        fill: "row",
                                    }}
                                    // breakpoints={{ 
                                    //     320: {
                                    //         slidesPerView: 2,
                                    //         spaceBetween: 20,
                                    //         grid: {
                                    //           rows: 3,
                                    //           fill: "row",
                                    //         },
                                            
                                    //       },
                                    //       // when window width is >= 640px
                                    //       640: {
                                    //         slidesPerView: 5,
                                    //         spaceBetween: 20,
                                    //         grid: {
                                    //           rows: 2,
                                    //           fill: "row",
                                    //         },
                                    //       }
                                    
                                    //  }}
                                    
                                    modules={[Autoplay, Pagination,Grid, Navigation]}
                                    className="product-carousel"
                                    >
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart d-none" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group (1).png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Accessories</p>
                                            <h3 className="title">Simple Black T-Shirt</h3>
                                            <h3 className="price-discount">BDT 650<span>BDT 670</span></h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart d-none" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group (2).png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Men</p>
                                            <h3 className="title">Simple Black trouser</h3>
                                            <h3 className="price">BDT 30</h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart d-none" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group (3).png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Accessories</p>
                                            <h3 className="title">Simple Black T-Shirt</h3>
                                            <h3 className="price-discount">BDT 650<span>BDT 670</span></h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart d-none" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group.png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Accessories</p>
                                            <h3 className="title">Simple Black T-Shirt</h3>
                                            <h3 className="price-discount">BDT 650<span>BDT 670</span></h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart d-none" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group (1).png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Accessories</p>
                                            <h3 className="title">Simple Black T-Shirt</h3>
                                            <h3 className="price-discount">BDT 650<span>BDT 670</span></h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart d-none" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group (2).png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Accessories</p>
                                            <h3 className="title">Simple Black T-Shirt</h3>
                                            <h3 className="price">BDT 643</h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart d-none" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group (1).png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Accessories</p>
                                            <h3 className="title">Simple Black T-Shirt</h3>
                                            <h3 className="price-discount">BDT 650<span>BDT 670</span></h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart d-none" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group (3).png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Accessories</p>
                                            <h3 className="title">Simple Black T-Shirt</h3>
                                            <h3 className="price">BDT 643</h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart d-none" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group (2).png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Men</p>
                                            <h3 className="title">Simple Black trouser</h3>
                                            <h3 className="price">BDT 30</h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart d-none" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group (3).png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Accessories</p>
                                            <h3 className="title">Simple Black T-Shirt</h3>
                                            <h3 className="price-discount">BDT 650<span>BDT 670</span></h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imageproduct">
                                            <div className="image-layer">
                                            <button className="wishlist" type="button">
                                                <img className="add-heart" src="../../images/theme_2/heart-add-sm.png" alt="" />
                                                <img className="remove-heart d-none" src="../../images/theme_2/heart.png" alt="" />
                                            </button>
                                            <img src="../../images/theme_2/Mask group.png" alt="" />
                                            <div className="overlay" />
                                            <button className="cart"><BsCart3/>Add to Cart</button>
                                            </div>
                                            <p className="category">Accessories</p>
                                            <h3 className="title">Simple Black T-Shirt</h3>
                                            <h3 className="price-discount">BDT 650<span>BDT 670</span></h3>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>


                                </div>
                            </Col>

                            </Row>
                            

                            
                        
                    </Col>
                  </Row>
            </Row>
        </Container>

    </section>
    
    </>
  )
}

export default ShopPage