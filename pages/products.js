import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ContactForm } from "../components";
import Layout from "../components/Layout";

function Products() {
	return (
		<Layout>
			<Container fluid className="mt-5 pt-5 products-bg ">
				<ContactForm />
				<Row
					className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center vh-100"
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					id="product1"
				>
					<Col lg={4} className="">
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
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={4} className="">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "black",
									}}
									className=" header-text"
								>
									Our heating pumps are designed to provide efficient and
									reliable heating solutions for homes and businesses, using the
									latest technology to help you save on energy bills.
								</Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row
					className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center secondary-bg vh-100"
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					id="product2"
				>
					<Col lg={4} className="">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "white",
									}}
									className=" header-text"
								>
									Our control units allow you to easily manage and monitor your
									heating and cooling systems, ensuring optimal performance and
									comfort.
								</Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={4} className="">
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
										color: "white",
									}}
									className=" header-text"
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row
					className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center header-bg vh-100"
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					id="product3"
				>
					<Col lg={4} className="">
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
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={4} className="">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "black",
									}}
									className=" header-text"
								>
									Our klimatization systems provide precise temperature and
									humidity control, creating a comfortable and healthy
									environment for your home or office.
								</Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row
					className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center secondary-bg vh-100"
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					id="product4"
				>
					<Col lg={4} className="">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "white",
									}}
									className=" header-text"
								>
									Our solar panels are a sustainable and cost-effective solution
									for powering your home or business, helping you reduce your
									carbon footprint and save on electricity bills.
								</Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={4} className="">
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
										color: "white",
									}}
									className=" header-text"
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row
					className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center vh-100"
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					id="product5"
				>
					<Col lg={4} className="">
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
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={4} className="">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "black",
									}}
									className=" header-text"
								>
									In addition to our core products, we offer a range of
									accessories and services to help you get the most out of your
									heating and cooling systems, from installation to maintenance
									and repair.
								</Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}

export default Products;
