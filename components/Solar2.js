import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Solar2() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-100 bg-primary">
			<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
				{" "}
				<Card className="border-0 shadow-lg">
					<Card.Img src="/assets/Solaredge.jpg" className="shadow-lg" />
				</Card>{" "}
			</Col>
			<Col xl={5} lg={5} className="blur p-3 mx-2 shadow-lg">
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
							<span className="">
								SolarEdge is a leading manufacturer of solar panels, known for
								their innovative technology and exceptional performance. Their
								solar panels are designed with a unique power optimizer
								technology that maximizes energy production and ensures maximum
								efficiency, even in low-light conditions. SolarEdges panels are
								also durable and long-lasting, with a 25-year warranty on
								performance and materials.
							</span>
						</Card.Title>
						<Nav.Link
							as={Link}
							href="https://www.solaredge.com/en/products/residential/smart-solar-modules"
						>
							<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
								Solaredge.com
							</Button>
						</Nav.Link>{" "}
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default Solar2;
