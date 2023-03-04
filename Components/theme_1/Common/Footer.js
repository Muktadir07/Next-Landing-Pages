import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { FaCentos } from 'react-icons/fa';



const Footer = () => {

    return (

        <section className="Footer">

            <Container>

                <Row className="d_flex">
                    
                    {/* item */}
                    <Col xs={12} lg={4}>

                        <div className="FooterItem">

                            <div className="logo">
                                <img src="/theme_1/images/logo.png" alt="" />
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col xs={12} lg={4}>

                        <div className="FooterItem">

                            <h3>Store Address</h3>
                            <p>4517 Washington Ave. Manchester, Kentucky 39495 soft it care</p>

                        </div>

                    </Col>

                    {/* item */}
                    <Col xs={12} lg={4}>

                        <div className="FooterItem">

                            <h3>Contact No.</h3>
                            <Link href="tel:8802223344">+880 02 223 344 , +880 123 456 789</Link>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

};

export default Footer;
