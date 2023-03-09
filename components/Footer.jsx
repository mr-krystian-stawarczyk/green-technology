import Link from "next/link";
import React from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import {
	AiFillInstagram,
	AiOutlineTwitter,
	AiOutlineFacebook,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";
function Footer() {
	return (
		<Container fluid className="  p-5 header-bg rounded shadow-lg ">
			<Row className="text-center m-5 justify-content-center align-items-center text-center">
				<Col>
					{" "}
					<Card style={{ maxWidth: "18rem" }} className="border-0">
						<Card.Body>
							<Card.Title>About us</Card.Title>
							<Card.Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industrys standard dummy text
								ever since the 1500 text of the printing.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					{" "}
					<Card style={{ maxWidth: "18rem" }} className="border-0">
						<Card.Body>
							<Card.Title>Latest themes</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the cards content.
							</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item>Cras justo odio</ListGroup.Item>
							<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
						</ListGroup>
						<Card.Body>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					{" "}
					<Card style={{ maxWidth: "18rem" }} className="border-0">
						<Card.Body>
							<Card.Title>Quick Links</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the cards content.
							</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item>Cras justo odio</ListGroup.Item>
							<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
						</ListGroup>
						<Card.Body>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<span className="icons d-block">
						<AiFillInstagram className="hover" />

						<FaTiktok className="hover" />

						<AiOutlineFacebook className="hover" />
					</span>
				</Col>
				<Col></Col>
			</Row>
			<Row className="bg-primary justify-content-center align-items-center text-center">
				{" "}
				<Link href="/terms">Terms & Conditions</Link>
				<span>2023 AMgreenenergy® All Rights Reserved</span>
			</Row>
		</Container>
	);
}

export default Footer;
