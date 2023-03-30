import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Solar5() {
	return (
		<Row className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center rounded shadow-lg">
			<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Img src="/assets/about1.jpg" className="shadow-lg" />
					<Card.Body className="text-center">
						<Card.Text className=" bg-transparent">
							Did you know that solar panels can reduce your carbon footprint by
							up to 80%? By generating electricity from clean, renewable energy
							sources, solar panels can help you reduce your impact on the
							environment and contribute to a more sustainable future.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Img src="/assets/about2.jpg" className="shadow-lg" />
					<Card.Body className="text-center">
						<Card.Text className=" bg-transparent">
							Solar panels can also help you save money on your energy bills.
							With the right system size and configuration, you can generate
							enough electricity to power your home or business entirely,
							reducing or eliminating your reliance on expensive grid energy.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Img src="/assets/about3.jpg" className="shadow-lg" />
					<Card.Body className="text-center">
						<Card.Text className=" bg-transparent">
							Finally, solar panels are a low-maintenance and long-lasting
							investment. With a typical lifespan of 25-30 years, solar panels
							can provide reliable and cost-effective energy for decades. And
							with little to no maintenance required, they offer hassle-free
							energy savings for years to come.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default Solar5;
