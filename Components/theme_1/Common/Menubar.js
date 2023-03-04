import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row, Form } from "react-bootstrap";
import { BiCategory } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState,useContext } from "react";
// import { useNode } from "@craftjs/core";
// import ContentEditable from 'react-contenteditable'
import Context from "../../../pages/theme_1/context";

const Menubar = ({ menu1, menu2, menu3, menu4, fontSize }) => {
	const { connectors: { connect, drag }, hasSelectedNode, hasDraggedNode, actions: { setProp } } = useNode((state) => ({
		hasSelectedNode: state.events.selected.size > 0,
		hasDraggedNode: state.events.dragged.size > 0
	}));
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const editActive = useContext(Context);
	// useEffect(() => {!hasSelectedNode && setEditable(false)}, [hasSelectedNode]);

	// console.log(hasSelectedNode);
	return (
		<section className='Menubar'>

			<Container>

				<div className="DesktopMenu">

					<Row className='d_flex'>
						{/* left  */}
						<Col xs={3}>

							<div className='MenubarLeftLogo'>

								<Dropdown>

									<Dropdown.Toggle id='dropdown-basic'>
										<BiCategory /> Browse Categories <BsChevronDown />
									</Dropdown.Toggle>

									<Dropdown.Menu>

										<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>

										<Dropdown.Item href='#/action-2'>
											Another action
										</Dropdown.Item>

										<Dropdown.Item href='#/action-3'>
											Something else
										</Dropdown.Item>

									</Dropdown.Menu>

								</Dropdown>

							</div>

						</Col>

						<Col xs={6}>
							<div className='MenubarMiddle'>
								<ul>
									<li>
										{editActive === false && <Link href='' className='active'>
											Home
										</Link>}
										{editActive === true && <><ContentEditable
											html={menu1}
											onChange={e =>
												setProp(props =>
													props.menu1 = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
												)
											}
											tagName="a"
											style={{ fontSize: `${fontSize}px` }}
										/>
											{/* <Form.Control>
													<Form.Label>Range</Form.Label>
													<Form.Range />
												</Form.Control> */}
										</>}
									</li>

									<li>
										{editActive === false && <Link href='/theme_1/shop'> Shop </Link>}

										{editActive === true && <><ContentEditable
											html={menu2}
											onChange={e =>
												setProp(props =>
													props.menu2 = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
												)
											}
											tagName="a"
											style={{ fontSize: `${fontSize}px` }}
										/>

										</>}

									</li>

									<li>
										{editActive === false && <Link href=''> About Us </Link>}

										{editActive === true && <ContentEditable
											html={menu3}
											onChange={e =>
												setProp(props =>
													props.menu3 = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
												)
											}
											tagName="a"
											style={{ fontSize: `${fontSize}px` }}
										/>}
									</li>

									<li>
										{editActive === false && <Link href=''> Contact Us </Link>}

										{editActive === true && <ContentEditable
											html={menu4}
											onChange={e =>
												setProp(props =>
													props.menu4 = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
												)
											}
											tagName="a"
											style={{ fontSize: `${fontSize}px` }}
										/>}
									</li>
								</ul>
								{editActive === true &&<Form.Range min={1} defaultvalue={fontSize}
									max={50} onChange={(e) => {
										setProp(props => props.fontSize = e.target.value);
									}} />}
							</div>
						</Col>

						<Col xs={3}>
							<div className='SocailIcon'>
								<Link href=''>
									<FaFacebookF />
								</Link>
								<Link href=''>
									<FaYoutube />
								</Link>
								<Link href=''>
									<FaInstagram />
								</Link>
								<Link href=''>
									<FaTwitter />
								</Link>
							</div>
						</Col>

					</Row>

				</div>


				{/* MobileMenu */}
				<div className="MobileMenu">

					<Row>

						<Col xs={4}>

							<div className='MenubarLeftLogo'>

								<Dropdown>

									<Dropdown.Toggle id='dropdown-basic'>
										<BiCategory /> Browse Categories <BsChevronDown />
									</Dropdown.Toggle>

									<Dropdown.Menu>

										<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>

										<Dropdown.Item href='#/action-2'>
											Another action
										</Dropdown.Item>

										<Dropdown.Item href='#/action-3'>
											Something else
										</Dropdown.Item>

									</Dropdown.Menu>

								</Dropdown>

							</div>

						</Col>

						<Col xs={8}>

							<div className="MobileMenuItem">

								<Button onClick={handleShow}>
									<AiOutlineBars />
								</Button>

								<Offcanvas show={show} onHide={handleClose}>

									<Offcanvas.Header closeButton>
										<Offcanvas.Title></Offcanvas.Title>
									</Offcanvas.Header>

									<Offcanvas.Body>

										<div className='MenubarMiddle'>

											<ul>

												<li>
													<Link href='' className='active'>

														Home
													</Link>

												</li>

												<li>
													<Link href=''> Shop </Link>
												</li>

												<li>
													<Link href=''> About Us </Link>
												</li>

												<li>
													<Link href=''> Contact Us </Link>
												</li>

											</ul>

											<div className='SocailIcon'>
												<Link href=''>
													<FaFacebookF />
												</Link>
												<Link href=''>
													<FaYoutube />
												</Link>
												<Link href=''>
													<FaInstagram />
												</Link>
												<Link href=''>
													<FaTwitter />
												</Link>
											</div>

										</div>

									</Offcanvas.Body>

								</Offcanvas>

							</div>

						</Col>

					</Row>



				</div>

			</Container>

		</section>
	);
};

export default Menubar;
