import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";

import Link from "next/link";
function HeaderSlides() {
	return (
		<Container fluid className="shadow-lg  rounded  mx-0 px-0  h-100">
			<Row className="align-items-center ">
				<Col className="mx-auto ">
					<Carousel className=" vertical" loop>
						<Carousel.Item className="text-center">
							<Image
								src="/assets/header.jpg"
								alt="me"
								width="450"
								height="800"
								className="d-block w-100"
							/>
							<Carousel.Caption className="text-center">
								<h3>Baterie </h3>

								<p>
									<Nav.Link as={Link} href="/products">
										<Button variant="success">Baterie</Button>
									</Nav.Link>
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item className="text-center">
							<Image
								src="/assets/header.jpg"
								alt="me"
								width="450"
								height="800"
								className="d-block w-100"
							/>
							<Carousel.Caption className="text-center">
								<h3>Solary </h3>

								<p>
									<Nav.Link as={Link} href="/products">
										<Button variant="success">Solary</Button>
									</Nav.Link>
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item className="text-center">
							<Image
								src="/assets/header.jpg"
								alt="me"
								width="450"
								height="800"
								className="d-block w-100"
							/>
							<Carousel.Caption className="text-center">
								<h3>Pompy Ciepla </h3>

								<p>
									<Nav.Link as={Link} href="/products">
										<Button variant="success">Pompy Ciepla</Button>
									</Nav.Link>
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}

export default HeaderSlides;
