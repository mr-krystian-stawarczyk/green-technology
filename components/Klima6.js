import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
function Klima6() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-100 bg-primary">
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
								Mitsubishi air conditioners are known for their high-quality
								engineering and exceptional performance. With a range of
								products including wall-mounted, ceiling-recessed, and ductless
								air conditioners, Mitsubishi provides options for both
								residential and commercial settings.
							</span>
						</Card.Title>
						<Nav.Link as={Link} href="https://www.mitsubishielectric.com/">
							<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
								Mitsubishi
							</Button>
						</Nav.Link>{" "}
					</Card.Body>
				</Card>
			</Col>{" "}
			<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
				{" "}
				<Card className="border-0 shadow-lg">
					<Card.Img src="/assets/Mitsubishicooling.jpg" className="shadow-lg" />
				</Card>{" "}
			</Col>{" "}
		</Row>
	);
}

export default Klima6;
