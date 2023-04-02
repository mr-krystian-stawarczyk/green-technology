import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import CardFlip from "react-card-flip";
import {
	AiFillInstagram,
	AiOutlineTwitter,
	AiOutlineFacebook,
	AiOutlineMail,
} from "react-icons/ai";
import { FaTiktok, FaSearchLocation } from "react-icons/fa";

import { BsTelephonePlus } from "react-icons/bs";

function Contact() {
	const [isFlipped, setIsFlipped] = useState(false);

	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const { name, email, description, phone } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				"service_u09q8ve",
				"template_ID",
				e.target,
				"user_yM2aRTOGQYE8hG9oFHJIr"
			)
			.then(
				(result) => {
					setLoading(false);
					setIsFormSubmitted(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const handleCardHover = (isHovering) => {
		setIsFlipped(isHovering);
	};

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	return (
		<Container fluid className=" ">
			<Row className="text-center align-items-center justify-content-center rounded ">
				<Row className=" text-center justify-content-center align-items-center header-bg pb-5">
					<Row className=" text-center justify-content-center align-items-center  pt-5 m-2">
						<Col lg={3} className="">
							<p className="display-1">Contact</p>
						</Col>
					</Row>
					<Row className=" text-center justify-content-center align-items-center ">
						<Col
							lg={6}
							style={{
								maxWidth: "18rem",
								maxHeight: "18rem",
							}}
							className="m-3"
						>
							{" "}
							<CardFlip
								flipDirection="horizontal"
								onMouseEnter={() => handleCardHover(true)}
								onMouseLeave={() => handleCardHover(false)}
							>
								<Card
									className="my-card front border-0 blur p-3 shadow-lg "
									onClick={() => setIsFlipped(!isFlipped)}
								>
									<Card.Body>
										<Card.Text
											style={{
												fontWeight: "bold",

												fontSize: "5rem",
											}}
										>
											<FaSearchLocation className="" />
										</Card.Text>{" "}
										<span> Location</span>
									</Card.Body>
								</Card>
								<Card className="my-card back border-0 blur p-3 shadow-lg">
									<Card.Body>
										<Card.Text
											style={{
												fontWeight: "bold",

												fontSize: "2rem",
											}}
										>
											{" "}
											<span> Jan de withof 106 5709 AL Netherlands </span>
										</Card.Text>
									</Card.Body>
								</Card>
							</CardFlip>
						</Col>
						<Col
							lg={6}
							style={{
								maxWidth: "18rem",
								maxHeight: "18rem",
							}}
							className="m-3"
						>
							{" "}
							<CardFlip
								flipDirection="horizontal"
								onMouseEnter={() => handleCardHover(true)}
								onMouseLeave={() => handleCardHover(false)}
							>
								<Card
									className="my-card front border-0 blur p-3 shadow-lg "
									onClick={() => setIsFlipped(!isFlipped)}
								>
									<Card.Body>
										<Card.Text
											style={{
												fontWeight: "bold",

												fontSize: "5rem",
											}}
										>
											<BsTelephonePlus className="" />
										</Card.Text>{" "}
										<span> Phone</span>
									</Card.Body>
								</Card>
								<Card
									className="my-card back border-0 blur p-3 shadow-lg"
									onClick={() => setIsFlipped(!isFlipped)}
								>
									<Card.Body>
										<Card.Text
											style={{
												fontWeight: "bold",

												fontSize: "2rem",
											}}
										>
											{" "}
											<span>Reach Us Everywhere +31 0649932604</span>
										</Card.Text>
									</Card.Body>
								</Card>
							</CardFlip>
						</Col>
						<Col
							lg={5}
							style={{
								maxWidth: "18rem",
								maxHeight: "18rem",
							}}
							className="m-3"
						>
							{" "}
							<CardFlip
								flipDirection="horizontal"
								onMouseEnter={() => handleCardHover(true)}
								onMouseLeave={() => handleCardHover(false)}
							>
								<Card
									className="my-card front border-0 blur p-3 shadow-lg "
									onClick={() => setIsFlipped(!isFlipped)}
								>
									<Card.Body>
										<Card.Text
											style={{
												fontWeight: "bold",

												fontSize: "5rem",
											}}
										>
											<AiOutlineMail className="" />
										</Card.Text>{" "}
										<span> Mail</span>
									</Card.Body>
								</Card>
								<Card
									className="my-card back border-0 blur p-3 shadow-lg"
									onClick={() => setIsFlipped(!isFlipped)}
								>
									<Card.Body>
										<Card.Text
											style={{
												fontWeight: "bold",

												fontSize: "2rem",
											}}
										>
											{" "}
											<span> Email 4 wiersze jeszcze troche</span>
										</Card.Text>
									</Card.Body>
								</Card>
							</CardFlip>
						</Col>
						<Col
							lg={5}
							style={{
								maxWidth: "18rem",
								maxHeight: "18rem",
							}}
							className="m-2"
						>
							{" "}
							<CardFlip
								flipDirection="horizontal"
								onMouseEnter={() => handleCardHover(true)}
								onMouseLeave={() => handleCardHover(false)}
							>
								<Card
									className="my-card front border-0 blur p-3 shadow-lg "
									onClick={() => setIsFlipped(!isFlipped)}
								>
									<Card.Body>
										<Card.Text
											style={{
												fontWeight: "bold",

												fontSize: "5rem",
											}}
										>
											<AiOutlineMail className="" />
										</Card.Text>{" "}
										<span> Platnosc</span>
									</Card.Body>
								</Card>
								<Card
									className="my-card back border-0 blur p-3 shadow-lg"
									onClick={() => setIsFlipped(!isFlipped)}
								>
									<Card.Body>
										<Card.Text
											style={{
												fontWeight: "bold",

												fontSize: "2rem",
											}}
										>
											{" "}
											<span>Nazwa Banku: NL 0033 2917 9B83 </span>
										</Card.Text>
									</Card.Body>
								</Card>
							</CardFlip>
						</Col>
					</Row>
				</Row>
				<Row
					className="align-items-center justify-content-center text-center header-bg vh-full pb-5"
					id="price"
				>
					<Row className=" text-center justify-content-center align-items-center pt-5 ">
						<Col className="">
							<p className="display-1">
								{" "}
								Fill the form to get a personalized prices and advice
							</p>
						</Col>
					</Row>

					<Col
						lg={5}
						sm={8}
						className=" rounded  p-5 blur m-2 shadow-lg"
						style={{
							border: "1px solid green",
						}}
					>
						{!isFormSubmitted ? (
							<Form
								className="app__footer-form app__flex"
								onSubmit={handleSubmit}
							>
								<Row>
									<Col>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Control
												className="p-text"
												type="text"
												placeholder="Your Name"
												value={name}
												name="name"
												onChange={handleChangeInput}
												required
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Control
												className="p-text"
												type="text"
												placeholder="Your Phone"
												value={phone}
												name="phone"
												onChange={handleChangeInput}
												required
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Control
												className="p-text"
												type="email"
												placeholder="Your E-mail"
												value={email}
												name="email"
												onChange={handleChangeInput}
												required
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label>Your Description</Form.Label>
											<Form.Control
												className="p-text"
												as="textarea"
												placeholder="Your Description"
												value={description}
												name="description"
												onChange={handleChangeInput}
												rows={3}
												required
											/>
										</Form.Group>
									</Col>
								</Row>

								<Row className="justify-content-center align-items-center">
									<Col>
										<Button
											type="submit"
											variant="success"
											className="p-text m-2"
										>
											{loading ? "Sending..." : "Get Indyvidual Price"}
										</Button>
									</Col>
								</Row>
							</Form>
						) : (
							<div>
								<h3 className="head-text"> Thank You For Contact!</h3>
							</div>
						)}
					</Col>
				</Row>
				<Row className=" text-center justify-content-center align-items-center header-bg vh-full pb-5">
					<Row className=" text-center justify-content-center align-items-center m-2  pt-5">
						<Col lg={5} className=" ">
							<p className="display-1"> Social Media</p>
						</Col>
					</Row>
					<Col lg={5} className="p-2 m-1 shadow-lg">
						<Card
							style={{
								border: "1px solid green",
							}}
							className="bg-transparent  shadow-lg blur"
						>
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",

										fontSize: "5rem",
									}}
									className=" header-text"
								>
									<AiFillInstagram className="hover" /> <h1> Facebook</h1>
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="p-2 m-1 shadow-lg">
						<Card
							style={{
								border: "1px solid green",
							}}
							className="bg-transparent blur shadow-lg"
						>
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",

										fontSize: "5rem",
									}}
									className=" header-text"
								>
									<AiFillInstagram className="hover" /> <h1> Instagram</h1>
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="p-2 m-1 shadow-lg">
						<Card
							style={{
								border: "1px solid green",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",

										fontSize: "5rem",
									}}
									className=" header-text"
								>
									<FaTiktok className="hover" />
									<h1> Tik Tok</h1>
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Row>
		</Container>
	);
}

export default Contact;
