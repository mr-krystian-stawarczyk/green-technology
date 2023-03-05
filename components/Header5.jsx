import React from "react";

import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import AboutMe from "../components/AboutMe";

function Header5() {
	return (
		<Container fluid className=" pt-5 secondary-bg pb-5 rounded shadow-lg">
			<Row
				className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={4} className="">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/header.jpg" className="shadow-lg " />
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "white",
								}}
								className=" header-text"
							></Card.Title>
							<Card.Text className="mt-5 bg-transparent">
								{" "}
								<span>
									Our team of skilled technicians and engineers are dedicated to
									providing exceptional customer service and support. Were
									always available to answer any questions you may have and to
									help you choose the right products for your specific needs and
									budget.
								</span>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/header.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "white",
								}}
								className=" header-text"
							></Card.Title>
							<Card.Text className="mt-5 bg-transparent">
								{" "}
								<span>
									We understand that every customer has unique requirements when
									it comes to heating and cooling their space. Thats why we
									offer a wide range of products and solutions to suit any
									application, from small residential systems to large
									commercial installations.
								</span>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/header.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "white",
								}}
								className=" header-text"
							></Card.Title>
							<Card.Text className="mt-5 bg-transparent">
								<span>
									At our company, were committed to sustainability and
									environmental responsibility. We strive to minimize our carbon
									footprint and reduce waste in everything we do, from the
									materials we use to the way we manufacture and transport our
									products.
								</span>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Header5;
