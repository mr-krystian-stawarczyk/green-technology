import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";

import Link from "next/link";

function HeaderSlides() {
	return (
		<Container
			fluid
			className="shadow-lg vh-full m-0 p-0 overflow-hidden header-bg "
			id="#section2"
		>
			<Row className="align-items-center  justify-content-center align-items-center">
				<Col lg={8} className=" bg-dark ">
					<Card
						style={{
							width: "35rem",
							height: "15rem",
						}}
						className="header-card border-0 bg-transparent text-white "
					>
						<Card.Body className="header-card-bg text-center">
							<h2 className="text-start bold">
								Uitgebreide oplossingen voor ecologische woningen
							</h2>
							<h3 className="text-start">
								AM Greenergy is jouw partner voor alle duurzame stappen die je
								wilt gaan zetten om bij te dragen aan een beter klimaat
							</h3>
							<Nav.Link as={Link} href="/products">
								<Button className="nav-blue-bg border-0 text-white">
									Aanbod
								</Button>
							</Nav.Link>{" "}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default HeaderSlides;
