import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Button,
	Card,
	ListGroup,
	Form,
} from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { AiOutlineCheckCircle } from "react-icons/ai";

import Nav from "react-bootstrap/Nav";
import ContactForm from "./ContactForm";
import emailjs from "emailjs-com";
import Image from "next/image";
function Footer() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, description, phone } = formData;

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
			setAnimateImg(true);
			// start counting
			let count = 300;
			const interval = setInterval(() => {
				if (count === 0) {
					clearInterval(interval);
				}
			}, 10);
		}
	};

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

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateX(-50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(-50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const imgAnimationProps = useSpring({
		from: { opacity: 0, transform: "translateX(50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});
	return (
		<Container
			fluid
			className="overflow-hidden shadow-md"
			ref={sectionRef}
			id="contact"
		>
			<Row className="justify-content-center align-items-center text-center">
				{" "}
				<Col lg={6} sm={12} className="footer-bg p-4">
					<animated.div style={animationProps}>
						{" "}
						<Row className="text-start">
							<Col className="text-white">
								<Card className="border-0 bg-transparent">
									<Card.Body>
										<span className="display-5">AM Greenenergy</span>
										<h4>
											Heeft u vragen over ons aanbod? Bel ons of vul het
											contactformulier in
										</h4>
										<h4>Wij zullen zo snel mogelijk contact met u opnemen</h4>
										Hier voeren we het adres in
										<h3>Bel ons:</h3>
										<a href="tel:+31649932604">
											<h1 className="p-2 text-green rounded hover">
												649 932 604
											</h1>
										</a>
										<Card.Text className="hover">
											<AiOutlineCheckCircle
												className="text-green m-1 "
												style={{ height: "28px", width: "28px" }}
											/>
											<span className="">Snelle en efficiënte installatie</span>
										</Card.Text>
										<Card.Text className="hover">
											<AiOutlineCheckCircle
												className="text-green m-1 "
												style={{ height: "28px", width: "28px" }}
											/>
											<span className="">Volledig aanbod</span>
										</Card.Text>
										<Card.Text className="hover">
											<AiOutlineCheckCircle
												className="text-green m-1 "
												style={{ height: "28px", width: "28px" }}
											/>
											<span className="">Professioneel team</span>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>{" "}
					</animated.div>
				</Col>
				<Col lg={6} className="windmil  p-5">
					{" "}
					<animated.div style={imgAnimationProps}>
						{!isFormSubmitted ? (
							<Form
								className="app__footer-form app__flex "
								onSubmit={handleSubmit}
							>
								<Row>
									<Row>
										<h1 className="py-3">Snel Konakt </h1>
									</Row>
									<Col>
										<Form.Group
											className="mb-3 border-success"
											controlId="formBasicEmail"
										>
											<Form.Control
												className="p-text"
												type="text"
												placeholder="Uw naam"
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
												placeholder="Uw telefoon"
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
												placeholder="Uw e-mail"
												value={email}
												name="Uw e-mail"
												onChange={handleChangeInput}
												required
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label>Uw beschrijving</Form.Label>
											<Form.Control
												className="p-text"
												as="textarea"
												placeholder="Uw beschrijving"
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
											className="p-text m-2 nav-blue-bg border-0"
										>
											{loading ? "Verzenden ..." : "Stuur"}
										</Button>
									</Col>
								</Row>
							</Form>
						) : (
							<div>
								<h3 className="head-text"> Bedankt voor contact opnemen! </h3>
							</div>
						)}{" "}
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
