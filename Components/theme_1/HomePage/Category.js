import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row, Form } from "react-bootstrap";
import { BiCategory } from "react-icons/bi";

// Import Swiper React components
import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { baseUrl} from "../../../constant/constant";
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import Context from "../../../pages/theme_1/context";

const Category = ({ title,categories,fontSize }) => {
	const { connectors: { connect, drag }, hasSelectedNode, hasDraggedNode, actions: { setProp } } = useNode((state) => ({
		hasSelectedNode: state.events.selected.size > 0,
		hasDraggedNode: state.events.dragged.size > 0
	}));
	const editActive = useContext(Context); 
  return (
    <section className='Category'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className='CategoryContent'>
			{editActive === false &&<h2>{title}</h2>}
			  {editActive === true && <ContentEditable
											html={title}
											onChange={e =>
												setProp(props =>
													props.title = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
												)
											}
											tagName="h2"
											style={{ fontSize: `${fontSize}px` }}
											/>}
											{editActive === true &&<Form.Range min={1} defaultvalue={fontSize} style={{width: '200px'}}
									max={50} onChange={(e) => {
										setProp(props => props.fontSize = e.target.value);
									}} />}
              <div className='CategorySlider'>
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    600: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 7,
                      spaceBetween: 30,
                    },
                  }}
                  navigation={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation]}
                  className='mySwiper'
                >
                  {categories?.map((item, index) => {
                    return (
                      <SwiperSlide key={item.id }>
                        <div className='CategoryItem'>
                          <div className='img'>
                            <img
                              src={`${baseUrl}/public${item.category_image?.name}`}
                              alt=''
                            />
                          </div>
                          <div className='text'>
                            <p>{item?.name}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}

                </Swiper>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Category;
