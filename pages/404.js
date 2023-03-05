import React from "react";
import Link from "next/link";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Work() {
	return (
		<Container fluid className="mt-5 pt-5 bg-dark ">
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
						<Card.Img src="/assets/canceled.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "white",
								}}
								className=" header-text"
							>
								Something Went Wrong
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent">
								<Button className="bg-light">
									<Link href="/" className=" text-dark">
										Home
									</Link>
								</Button>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Work;
