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
import { useTranslation } from "react-i18next";
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
	const { t } = useTranslation();
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
			className="overflow-hidden shadow-md"
			ref={sectionRef}
			id="contact"
		>
			<Row className="justify-content-center align-items-center text-center">
				{" "}
				<Col lg={5} sm={12} className="p-4">
					<animated.div style={animationProps}>
						{" "}
						<Row className="text-start">
							<Col className="text-dark">
								<Card className="border-0 bg-transparent">
									<Card.Img src="/assets/Logo.png" style={{ width: "260px" }} />
									<Card.Body className="pt-0 mt-0">
										<Card.Title className="my-3 bold">{t("f1")}</Card.Title>
										<a
											href="tel:+31649932604"
											style={{ textDecoration: "none", color: "black" }}
										>
											<h3 className="hover my-3">+31 649 932 604 </h3>
											<h6 style={{ textDecoration: "none", color: "black" }}>
												{t("f2")}
											</h6>
										</a>
										<Card.Title className="my-4 bold"> {t("f3")}</Card.Title>
										<Card.Text>
											AM Greenergy Jan de Withof 106 5709 AL Helmond
										</Card.Text>
										<Card.Text>KVK: 78380758</Card.Text>
										<Card.Title className="my-4 bold">Mail</Card.Title>
										<Card.Text>
											<a
												href="mailto:info@izzifast.nl"
												style={{ textDecoration: "none", color: "black" }}
											>
												{" "}
												info@izzifast.nl
											</a>
										</Card.Text>
										<Card.Title className="my-4 bold">Policy</Card.Title>
										<Nav.Link as={Link} href="/policy" className="m-1 hover">
											<h6>Cookies & Imprint</h6>
										</Nav.Link>{" "}
									</Card.Body>
								</Card>
							</Col>
						</Row>{" "}
					</animated.div>
				</Col>
				<Col lg={5} className="  p-5">
					{" "}
					<animated.div style={animationProps}>
						{!isFormSubmitted ? (
							<Form
								className="app__footer-form app__flex "
								onSubmit={handleSubmit}
							>
								<Row>
									<Row>
										<h4 className="py-2 bold">{t("f4")}</h4>
									</Row>
									<Row>
										<Col>
											<Form.Group
												className="mb-3 border-success"
												controlId="formBasicEmail"
											>
												<Form.Label> {t("f5")}</Form.Label>
												<Form.Control
													className="p-text"
													type="text"
													placeholder="Naam"
													value={name}
													name="name"
													onChange={handleChangeInput}
													required
												/>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group className="mb-3" controlId="formBasicEmail">
												<Form.Label> {t("f6")}</Form.Label>
												<Form.Control
													className="p-text"
													type="text"
													placeholder="Telefoon"
													value={phone}
													name="phone"
													onChange={handleChangeInput}
													required
												/>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group className="mb-3" controlId="formBasicEmail">
												<Form.Label>E-mail</Form.Label>
												<Form.Control
													className="p-text"
													type="email"
													placeholder="mail@gmail.com"
													value={email}
													name="Uw e-mail"
													onChange={handleChangeInput}
													required
													rows={3}
												/>
											</Form.Group>
										</Col>
									</Row>
								</Row>
								<Row>
									<Col>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label> {t("f7")}</Form.Label>
											<Form.Control
												className="p-text"
												as="textarea"
												placeholder="Bericht"
												value={description}
												name="description"
												onChange={handleChangeInput}
												rows={3}
												required
											/>
										</Form.Group>
									</Col>
								</Row>

								<Row className="justify-content-center align-items-center mx-1">
									<Button
										type="submit"
										className="p-text  nav-blue-bg border-0 "
									>
										{loading ? "Verzenden ..." : "Stuur"}
									</Button>
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
