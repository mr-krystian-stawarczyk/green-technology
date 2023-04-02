import Link from "next/link";
import React from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import { AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

function Footer() {
	return (
		<Container fluid className="p-5 footer-bg  shadow-lg  ">
			<Row className="justify-content-center align-items-center text-center">
				<Col lg={3} sm={6}>
					<Card
						className="  blur bg-transparent text-white  shadow-lg m-2 border-dark border-lg p-2 hover"
						style={{ maxHeight: "20rem", minHeight: "16rem" }}
					>
						<Card.Body>
							<Card.Title>About us</Card.Title>
							<Card.Text>
								With over 20 years of experience in the industry, were committed
								to providing the highest quality products and services to our
								customers.
							</Card.Text>
						</Card.Body>

						<Nav.Link as={Link} href="/about">
							<Button variant="success btn-md m-1">About </Button>
						</Nav.Link>
					</Card>
				</Col>
				<Col lg={3} sm={6}>
					<Card
						className="  blur bg-transparent text-white  shadow-lg m-2 border-dark border-lg p-2 hover"
						style={{ maxHeight: "20rem", minHeight: "16rem" }}
					>
						<Card.Body>
							<Card.Title>Latest Work</Card.Title>
							<Card.Text>
								Here You Can check our latest work that we have done
							</Card.Text>
						</Card.Body>
						<Nav.Link as={Link} href="/about">
							<Button variant="success btn-md m-1">Work</Button>
						</Nav.Link>
					</Card>
				</Col>
				<Col lg={3} sm={6}>
					<Card
						className="  blur bg-transparent text-white  shadow-lg m-2 border-dark border-lg p-2 hover"
						style={{ maxHeight: "20rem", minHeight: "16rem" }}
					>
						<Card.Body>
							<Card.Title>Social Media</Card.Title>
							<Card.Text>Here You can find our contact informations</Card.Text>

							<AiFillInstagram className="hover display-3" />
							<FaTiktok className="hover display-3" />
							<AiOutlineFacebook className="hover display-3" />
						</Card.Body>
						<Nav.Link as={Link} href="/about">
							<Button variant="success btn-md m-1 display-3">Contact</Button>
						</Nav.Link>
					</Card>
				</Col>
				<Col lg={3} sm={6}>
					<Card
						className="  blur bg-transparent text-white  shadow-lg m-2 border-dark border-lg p-2 hover"
						style={{ maxHeight: "20rem", minHeight: "16rem" }}
					>
						<Card.Body>
							<Card.Title>Products</Card.Title>
							<Card.Text>Ready to check prices for Your products</Card.Text>
						</Card.Body>

						<Nav.Link as={Link} href="/about">
							<Button variant="success btn-md m-1">Products</Button>
						</Nav.Link>
					</Card>
				</Col>
			</Row>
			<Row className="justify-content-center text-center blur rounded m-2 bg-transparent shadow-lg">
				<Row className="justify-content-center align-items-center text-center rounded ">
					<Link href="/terms" className="m-1 text-uppercase">
						Terms & Conditions
					</Link>
					<span className="m-1 text-white ">
						2023 AMgreenenergy® All Rights Reserved
					</span>
				</Row>
			</Row>
		</Container>
	);
}

export default Footer;
