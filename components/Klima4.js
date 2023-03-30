import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Klima4() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-100 bg-primary">
			<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
				{" "}
				<Card className="border-0 shadow-lg">
					<Card.Img src="/assets/Heikocooler.jpg" className="shadow-lg" />
				</Card>{" "}
			</Col>{" "}
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
								Heiko air conditioners are designed to provide customized
								comfort and are backed by strong warranties, giving you peace of
								mind that youre making a smart investment in your home or
								business comfort. With their commitment to innovation and
								customer satisfaction, Heiko air conditioners are a top choice
								for those seeking reliable and effective cooling solutions.
							</span>
						</Card.Title>
						<Nav.Link as={Link} href="https://heiko.pl/">
							<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
								Heiko.pl
							</Button>
						</Nav.Link>{" "}
					</Card.Body>
				</Card>
			</Col>{" "}
		</Row>
	);
}

export default Klima4;
