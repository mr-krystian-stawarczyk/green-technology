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
							<Accordion.Header>
								Are You Working in all Netherlands?
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>What is Wait Time?</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>How we Offer Best Prices</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>Do You Offer Discounts ?</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
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
