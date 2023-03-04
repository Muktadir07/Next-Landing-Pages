import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";



const SocialMedia = () => {

    return (

        <section className="SocialMedia">

            <Container>

                <Row className="justify-content-md-center">
                    
                    {/* item */}
                    <Col xs={12} lg={6}>

                        <div className="SocialMediaContent text-center">

                            <h2>Join Us On Social Media</h2>

                            <div className="SocailIcon">

                                <Link href=""> <FaFacebookF/> </Link>
                                <Link href=""> <FaYoutube/> </Link>
                                <Link href=""> <FaInstagram/> </Link>
                                <Link href=""> <FaTwitter/> </Link>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

};

export default SocialMedia;
