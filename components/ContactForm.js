import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import emailjs from "emailjs-com";

const ContactForm = () => {
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
		<Row className="align-items-center justify-content-center vh-100">
			<Col lg={5} className="">
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
							}}
							className=" header-text"
						>
							Tutaj Sekcja O zapytanie i Kontakt
						</Card.Title>
						<Card.Text className="mt-5 bg-transparent"></Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col md={5} className="bg-success rounded m-4 ">
				{!isFormSubmitted ? (
					<Form className="app__footer-form app__flex" onSubmit={handleSubmit}>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Your Name</Form.Label>
									<Form.Control
										className="p-text"
										type="text"
										placeholder="Your Name"
										value={name}
										name="name"
										onChange={handleChangeInput}
										required
									/>
									<Form.Text className="text-muted">Give Your Name</Form.Text>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Your Telephone</Form.Label>
									<Form.Control
										className="p-text"
										type="text"
										placeholder="Your Phone"
										value={phone}
										name="phone"
										onChange={handleChangeInput}
										required
									/>
									<Form.Text className="text-muted">
										Give Your Telephone
									</Form.Text>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Your Email</Form.Label>
									<Form.Control
										className="p-text"
										type="email"
										placeholder="Your E-mail"
										value={email}
										name="email"
										onChange={handleChangeInput}
										required
									/>
									<Form.Text className="text-muted">Give Your Email</Form.Text>
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
									<Form.Text className="text-muted">
										Give Your Description
									</Form.Text>
								</Form.Group>
							</Col>
						</Row>

						<Row className="justify-content-center align-items-center">
							<Col>
								<Button type="submit" className="p-text m-2">
									{loading ? "Sending..." : "Send Message"}
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
	);
};

export default ContactForm;
