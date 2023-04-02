import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Link from "next/link";
function Klima2() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-full bg-primary my-2 shadow-lg rounded">
			<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
				{" "}
				<Card className="border-0 shadow-lg">
					<Card.Img src="/assets/lgcooler.jpg" className="shadow-lg" />
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
							It is possible to control up to 8 zones from the premium
							controller and indicate a zone name such as Office, Hallway, etc.
							There are 18 names to choose from.
						</p>
						<Nav.Link as={Link} href="https://www.lg.com/">
							<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
								LG.com
							</Button>
						</Nav.Link>{" "}
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default Klima2;
