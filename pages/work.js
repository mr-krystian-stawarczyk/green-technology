import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { urlFor } from "../lib/client";
import { Product } from "../components";
import sanityClient from "@sanity/client";

const client = sanityClient({
	projectId: "3go1z0b0",
	dataset: "production",
	useCdn: true, // useCdn is set to true by default, so you can omit this line
});

function Work() {
	const [projects, setProjects] = useState([]);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProjects = async () => {
			const query = `*[_type == "project"]{
		  title,
		  description,
		  mainImage{
			asset->{
			  _id,
			  url
			},
			alt
		  }
		}`;

			const results = await client.fetch(query);
			setProjects(results);
		};

		fetchProjects();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const result = await client.fetch(`*[_type == "product"]`);
			setProducts(result);
		};
		fetchData();
	}, []);

	return (
		<Container fluid className=" ">
			<Row
				className="text-center d-flex justify-content-center align-items-center vh-100 bg-primary"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="">
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
								Working in green technologies involves developing and
								implementing sustainable solutions that minimize the negative
								impact of human activities on the environment. This field
								encompasses a wide range of disciplines, including renewable
								energy, energy efficiency, waste management, and sustainable
								transportation.
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="">
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
				className=" text-center d-flex justify-content-center align-items-center vh-100 bg-light text-dark"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="">
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
				<Col lg={5} className="">
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
								Green technologies offer a unique opportunity to combine
								innovative thinking with environmental stewardship, creating a
								better world for present and future generations. As such,
								working in green technologies can be a fulfilling and rewarding
								career path for individuals who are passionate about making a
								positive impact on the planet.
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="d-flex align-items-center justify-content-center vh-100 bg-primary">
				<Row>
					<Col className="text-light text-center">
						{" "}
						<h1>Tutaj Polaczona Wtyczka Sanity:</h1>
					</Col>
				</Row>
				{products.map((product) => (
					<Col md={5} key={product._id}>
						<Card key={product._id} className="m-4 hover">
							<Card.Img
								variant="top"
								src={urlFor(product.image && product.image[0])}
								style={{ maxHeight: "250px" }}
							/>
							<Card.Body>
								<Card.Title>Name:{product.name}</Card.Title>
								<Card.Text>Details:{product.details}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Work;
