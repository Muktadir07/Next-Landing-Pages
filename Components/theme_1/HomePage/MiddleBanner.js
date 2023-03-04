import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { BiCategory } from 'react-icons/bi';



const MiddleBanner = () => {

    return (

        <section className="MiddleBanner">

            <Container>

                <Row>

                    {/* item */}
                    <Col xs={4}>

                        <div className="MiddleBannerItem">

                            <img src="/theme_1/images/banner/banner1.png" alt="" />

                        </div>

                    </Col>

                    {/* item */}
                    <Col xs={4}>

                        <div className="MiddleBannerItem">

                            <img src="/theme_1/images/banner/banner2.png" alt="" />

                        </div>

                    </Col>

                    {/* item */}
                    <Col xs={4}>

                        <div className="MiddleBannerItem">

                            <img src="/theme_1/images/banner/banner3.png" alt="" />

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

};

export default MiddleBanner;