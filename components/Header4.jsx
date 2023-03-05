import React from "react";

import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import AboutMe from "../components/AboutMe";

function Header4() {
	return (
		<Container
			fluid
			className="pt-5 shadow-lg vh-100 text-dark rounded d-flex align-items-center"
		>
			<Row
				className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="">
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
								With years of experience in the industry, we pride ourselves on
								producing high-quality, reliable products that are built to
								last. We use only the best materials and cutting-edge technology
								to ensure that our products meet the highest standards of
								performance and efficiency.
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className=" ">
					<Card className="border-0">
						<Card.Img src="/assets/header.jpg" className="shadow-lg" />
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Header4;
