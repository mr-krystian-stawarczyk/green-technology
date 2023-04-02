import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Solar4() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-full my-2 bg-primary shadow-lg rounded">
			<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
				{" "}
				<Card className="border-0 shadow-lg">
					<Card.Img src="/assets/Goodwe.jpg" className="shadow-lg" />
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
						<p className="lead text-white">
							Exploring and utilizing smart technologies and advanced expertise,
							Goodwe is relentless about offering users residential & small C&I
							storage solutions to protect users from rising electricity costs.
							We strive to create reliable solutions for users to maximize
							self-consumption, ensure power safety during an outage, take smart
							control of home power management, and realize energy independence.
						</p>
						<Nav.Link as={Link} href="https://en.goodwe.com/">
							<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
								Goodwe.com
							</Button>
						</Nav.Link>{" "}
					</Card.Body>
				</Card>
			</Col>{" "}
		</Row>
	);
}

export default Solar4;
