import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";

import Link from "next/link";
function About1() {
	return (
		<Container
			fluid
			className="shadow-lg vh-full m-0 p-0 overflow-hidden about-bg "
		>
			<Row>
				<Col lg={8} className=" bg-dark ">
					<Card
						style={{
							width: "35rem",
							maxHeight: "15rem",
						}}
						className="header-card border-0 bg-transparent text-white p-5"
					>
						<Card.Body className="header-card-bg">
							<Card.Title className="">
								<span className="display-6">AMGreenergy</span>
							</Card.Title>

							<span className="lead">
								Uitgebreide oplossingen voor ecologische woningen
							</span>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default About1;
