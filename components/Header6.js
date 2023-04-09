import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Header6() {
	return (
		<Container fluid className="header-bg vh-full" id="#question">
			<Row className="text-center justify-content-center align-items-center align-self-center pt-5">
				<Col lg={5} className="mt-5 pt-5">
					{" "}
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>Werkt u in heel Nederland?</Accordion.Header>
							<Accordion.Body>
								Onze diensten zijn beschikbaar in heel Nederland, van aankoop
								tot installatie, inclusief garantie.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Wat is de wachttijd?</Accordion.Header>
							<Accordion.Body>
								Vanaf de aankoop tot de volledige installatie duurt het proces
								maximaal twee weken.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Hoe bieden wij de beste prijzen aan?
							</Accordion.Header>
							<Accordion.Body>
								Onze producten komen rechtstreeks van de fabrikanten. Zonder
								tussenpersonen is de prijs voordelig
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>Bieden jullie kortingen aan?</Accordion.Header>
							<Accordion.Body>
								Helaas niet. De prijs is aantrekkelijk omdat de producten
								rechtstreeks van de fabrikanten komen en van de hoogste
								kwaliteit zijn.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>{" "}
				<Col lg={5} className="blur p-3 mt-5 shadow-lg rounded">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Body className="text-center text-dark">
							<p className="lead text-uppercase">
								Check our Freaquently Asked Questions, or You can contact Us
								anytime. Every order is best suited for Your needs !
							</p>{" "}
							<Nav.Link as={Link} href="/contact">
								<Button className="btn-green btn-lg p-2 text-uppercase text-bold shadow-lg">
									Contact
								</Button>
							</Nav.Link>{" "}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Header6;
