import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Solar3() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-100 bg-light">
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
							}}
							className=" header-text"
						>
							<span className="">
								Deye solar panels are also made with high-quality materials and
								are backed by a strong warranty, giving you peace of mind that
								youre making a smart investment in your home or businesss energy
								future. Additionally, Deye offers monitoring tools that allow
								you to track your energy production and optimize your system for
								maximum efficiency.
							</span>
						</Card.Title>
						<Nav.Link as={Link} href="https://www.deyeinverter.com/">
							<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
								Deye.com
							</Button>
						</Nav.Link>{" "}
					</Card.Body>
				</Card>
			</Col>{" "}
			<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
				{" "}
				<Card className="border-0 shadow-lg">
					<Card.Img src="/assets/Deyesolar.jpg" className="shadow-lg" />
				</Card>{" "}
			</Col>
		</Row>
	);
}

export default Solar3;
