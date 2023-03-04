import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Cookies from "js-cookie";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

import {
  clearCart,
  removeFromCart,
} from "../../../redux/stateSlices/CartSlice";
import { useSelector,useDispatch } from "react-redux";
import { useRouter } from "next/router";
const ChoosePayment = () => {
  const [userInfo, setUserOrderInfo] = useState({});
  const dispatch = useDispatch();
  let router = useRouter()
  useEffect(() => {
    setUserOrderInfo(JSON.parse(Cookies.get("customerInfo")));
  }, []);
  const carts = useSelector((state) => state.cart);
  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState("");
  useEffect(() => {
    setCart(carts?.cartItems);
    setCartSubTotal(carts.cartTotalAmount);
  }, [carts]);

  //handle submit order;
  let productsID = [];
  let productsQty = []
  cart.map((item) => {
    productsID.push(item?.id);
    productsQty.push(item.cartQuantity)
  });


  const handleSubmitOrder = () => {
    const headers = {
        Authorization: `Bearer HmqU0EcXzDlUoMgdn8jGkzCrDig28L0MFR9zgKsnied74rxsNoPcL169TM68uymp`,
      };
      const postBody={
        customer_name:userInfo.customerName,
        customer_phone:userInfo.phone,
        customer_address:userInfo.address,
        product_qty:productsQty,
        product_id:productsID,
      }
      axios.post("https://dev-master.salesolutionbd.com/api/v1/client/orders", postBody, { headers: headers })
      .then(function (response) {
        if(response.status===200){
            console.log(response)
            dispatch(clearCart());
            router.push(`/theme_1/order_successfull/${response.data.data.order_no}`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className='CheckOut'>
      <Container>
        {/* CheckOutContent */}
        <div className='CheckOutContent'>
          <Row>
            {/* left */}
            <Col xs={8}>
              <div className='ChoosePayment'>
                <h3>Choose Payment Method</h3>

                <div className='ChoosePaymentContent'>
                  <div className='AvailavleMethid'>
                    {/* <!-- item --> */}
                    <label className='card'>
                      <input
                        name='plan'
                        className='radio'
                        type='radio'
                        checked
                      />

                      <div className='Card_item'>
                        <div className='img'>
                          <img src='/theme_1/images/bkash.svg' alt='' />
                        </div>
                      </div>
                    </label>

                    {/* <!-- item --> */}
                    <label className='card'>
                      <input name='plan' className='radio' type='radio' />

                      <div className='Card_item'>
                        <div className='img'>
                          <img src='/theme_1/images/cashon.svg' alt='' />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className='Secure'>
                  <img src='/theme_1/images/secure.svg' alt='' />
                </div>

                <div className='AverageDelivery'>
                  <h5>Average Delivery Time: 3-5 days</h5>
                </div>
              </div>
            </Col>

            {/* right */}
            <Col xs={4}>
              <div className='product_part'>
                <ul>
                  <li className='d_flex'>
                    <h3>Product</h3>
                    <h4>Subtotal</h4>
                  </li>

                  <li className='d_flex'>
                    <div className='img'>
                      <img src='/theme_1/images/image 14.png' alt='' />
                    </div>
                    <p>{cartSubTotal}</p>
                  </li>

                  <li className='d_flex'>
                    <h5>Total Item</h5>
                    <p>{cartSubTotal}</p>
                  </li>

                  <li className='d_flex'>
                    <h5>Delivery fee</h5>
                    <p>50</p>
                  </li>

                  <li className='d_flex'>
                    <h3>Grand total</h3>
                    <h4>{cartSubTotal + 50}</h4>
                  </li>
                </ul>

                <div className='ProceedToCheckout'>
                  <Button onClick={handleSubmitOrder} variant='contained'>Proceed to checkout</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ChoosePayment;
