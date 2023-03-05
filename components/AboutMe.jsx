import React, { useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	InputGroup,
	Form,
	Button,
} from "react-bootstrap";

import Image from "next/image";

function AboutMe() {
	return (
		<>
			<Container fluid className="  my-5 pt-1 rounded about">
				<Row
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					className="mt-5 "
				>
					<Col md={5} className="mx-auto my-auto mt-5 ">
						<Card className="shadow-lg">
							<Card.Img src="/assets/hd1.jpg" className="shadow-lg" />
						</Card>
					</Col>
					<Col md={6} className=" ">
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
									An artist is someone who produces items that people dont need
									to have, but - for some reason – thinks it would be a good
									idea to give them to them.” – Andy Warhol
								</Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default AboutMe;
