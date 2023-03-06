import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import {
	AiFillInstagram,
	AiOutlineTwitter,
	AiOutlineFacebook,
	AiOutlineMail,
} from "react-icons/ai";
import { FaTiktok, FaSearchLocation } from "react-icons/fa";

import { BsTelephonePlus } from "react-icons/bs";

function Contact() {
	return (
		<Container fluid className="mt-5 pt-5 secondary-bg pb-5">
			<Row className="m-5 p-5">
				<Col className="m-5 bg-white rounded text-center p-3">
					<h1>Here You Can Contact us In any Way</h1>
				</Col>
			</Row>

			<Row
				className=" text-center d-flex justify-content-center align-items-center"
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
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "white",
									fontSize: "4rem",
								}}
								className=" header-text"
							>
								Contact
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="d-flex">
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
									color: "white",
									fontSize: "5rem",
								}}
								className=" header-text"
							>
								<FaSearchLocation className="hover m-2" />
								<BsTelephonePlus className="hover m-2" />
								<AiOutlineMail className="hover m-2" />
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
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
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "white",
									fontSize: "6rem",
								}}
								className=" header-text"
							>
								<AiFillInstagram className="hover" />

								<FaTiktok className="hover" />

								<AiOutlineFacebook className="hover" />
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
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
						<Card.Body className="text-center">
							<Card.Title
								style={{
									fontWeight: "bold",
									color: "white",
									fontSize: "4rem",
								}}
								className=" header-text"
							>
								Social Media
							</Card.Title>
							<Card.Text className="mt-5 bg-transparent"></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Contact;
