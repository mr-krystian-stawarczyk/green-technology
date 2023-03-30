import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Link from "next/link";
function Klima2() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-100 bg-primary">
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
						<Card.Title
							style={{
								fontWeight: "bold",
								color: "white",
							}}
							className=" header-text"
						>
							<span className="shadow-lg">
								It is possible to control up to 8 zones from the premium
								controller and indicate a zone name such as Office, Hallway,
								etc. There are 18 names to choose from.
							</span>
						</Card.Title>
						<Nav.Link as={Link} href="/products">
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
