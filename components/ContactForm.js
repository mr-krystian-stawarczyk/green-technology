import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

export const ContactForm = () => {
	const router = useRouter();
	const { id } = router.query;

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
			setAnimateImg(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateY(-100px)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateY(0)" : "translateY(-100px)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const imgAnimationProps = useSpring({
		from: { opacity: 0 },
		to: { opacity: animateImg ? 1 : 0 },
		config: { duration: 1000 },
		delay: 1000,
	});

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const [loading, setLoading] = useState(false);

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

	return (
		<div ref={sectionRef}>
			<Row
				className="align-items-center justify-content-center vh-100 text-center "
				id="price"
			>
				<Col lg={5} className="blur p-3 mx-2 shadow-lg rounded">
					<animated.div style={imgAnimationProps}>
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center ">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "black",
										fontSize: "2rem",
									}}
									className=" header-text"
								>
									Fill the form to get a personalized prices and advice to go
									green the most efficient way !
								</Card.Title>
							</Card.Body>
						</Card>{" "}
					</animated.div>
				</Col>
				<Col
					md={5}
					className=" rounded  p-5 blur  shadow-lg"
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
		</div>
	);
};

export default ContactForm;
