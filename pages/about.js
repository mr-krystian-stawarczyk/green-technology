import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaWater, FaSun } from "react-icons/fa";

function About() {
	return (
		<Container fluid className="mt-5 pt-5  mb-5 pb-5">
			<Row className="secondary-bg vh-100 shadow-lg ">
				<Row className="text-center mt-5 text-white">
					<h1>About Us</h1>
					<h3>
						Welcome to our companys subpage! We specialize in providing heating
						pumps and solar panels for residential and commercial properties.
					</h3>
					<h3>
						Our heating pumps use advanced technology to provide efficient and
						cost-effective heating solutions, while our solar panels harness the
						power of the sun to provide renewable energy for your property.
					</h3>
					<h3>
						With over 20 years of experience in the industry, were committed to
						providing the highest quality products and services to our
						customers.
					</h3>
				</Row>

				<Row className="justify-content-center align-items-center text-center">
					<Col md={5}>
						<Card style={{ maxWidth: "18rem" }} className="mx-auto">
							<FaWater />
							<Card.Body>
								<Card.Title>Heating Pumps</Card.Title>
								<Card.Text>
									Our heating pumps are designed to provide efficient and
									cost-effective heating solutions for your property. We offer a
									range of pumps to suit different property sizes and heating
									needs.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={5}>
						<Card style={{ maxWidth: "18rem" }} className="mx-auto">
							<FaSun />
							<Card.Body>
								<Card.Title> Solar Panels</Card.Title>
								<Card.Text>
									Our solar panels are designed to harness the power of the sun
									to provide renewable energy for your property. We offer a
									range of panels to suit different property sizes and energy
									needs.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Row>
			<Row
				className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="hover2 m-2">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/header.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "black",
								}}
								className=" header-text"
							>
								Karta 1 Produkt
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="hover2 m-2">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/header.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "black",
								}}
								className=" header-text"
							>
								Karta Produkt 2
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="hover2 m-2">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/header.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "black",
								}}
								className=" header-text"
							>
								Karta Produkt 3
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="hover2 m-2">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/header.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "black",
								}}
								className=" header-text"
							>
								Karta Produkt 4
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
