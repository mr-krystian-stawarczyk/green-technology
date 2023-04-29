import React from "react";

import Head from "next/head";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
function Error() {
	return (
		<>
			<Head>
				<title>Pagina Niet Gevonden | AM Greenergy | Helmond</title>
				<meta
					name=" AM Greenergy"
					content="De pagina die u zoekt kon niet worden gevonden. Ga terug naar de homepage van AM Green Energy en ontdek ons aanbod aan duurzame energieoplossingen voor bedrijven en particulieren in Helmond!"
				/>
			</Head>

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
									Error
								</Card.Title>
								<Card.Text className="mt-5 bg-transparent">
									<Nav.Link as={Link} href="/">
										<Button className="nav-blue-btn">Home</Button>
									</Nav.Link>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Error;
