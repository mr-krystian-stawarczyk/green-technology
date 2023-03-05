import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Terms() {
	return (
		<Container fluid className="mt-5 pt-5 bg-primary vh-100">
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
						<Card.Img src="/assets/header.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "black",
								}}
								className=" header-text"
							>
								Sekcja Terms & Conditions
							</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Terms;
