import Image from 'next/image';
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import { MdOutlineClose } from "react-icons/md";
import { useRouter } from 'next/router';


const OrderSuccessfull = () => {
    const router = useRouter()
    const { orederdID } = router.query
    return (
        <section className="CheckOut">
            <Container>
                {/* CheckOutContent */}
                <div className="OrderSuccessfullContent">
                    <Row className='justify-content-md-center'>
                        {/* left */}
                        <Col xs={8}>
                            <div className="Header text-center">
                                <h4>Your Order is Successful!</h4>
                                <h4>Your Order no {orederdID}</h4>

                                <p>You will receive a confirmation message shortly. For more details, check order status on your WhatsApp</p>
                                <div className="DuelButton">
                                    <Link href="">Track the order</Link>
                                    <Link href="/theme_1" className='bg'>Continue shopping</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>

    );

};

export default OrderSuccessfull;
