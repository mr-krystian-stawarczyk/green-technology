import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";

import Link from "next/link";

function HeaderSlides() {
	return (
		<Container fluid className="shadow-lg    m-0 p-0 overflow-hidden ">
			<Row className="align-items-center bg-dark justify-content-center">
				<Col className=" ">
					<Carousel className=" " fade loop>
						<Carousel.Item className="text-center">
							<Image
								src="/assets/bateria2.jpg"
								alt="me"
								width="1366"
								height="768"
								className=" carousel-image"
							/>
							<Carousel.Caption className="text-center">
								<Nav.Link as={Link} href="/products">
									<Button className="blur p-3 bg-transparent btn-lg text-lg  shadow-lg border-0 p-5 rounded ">
										<h1>Baterie</h1>
									</Button>
								</Nav.Link>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item className="text-center">
							<Image
								src="/assets/slider1.jpg"
								alt="me"
								width="1366"
								height="768"
								className=" carousel-image"
							/>
							<Carousel.Caption className="text-center">
								<Nav.Link as={Link} href="/products">
									<Button className="blur p-3 bg-transparent btn-lg text-lg  shadow-lg border-0 p-5 rounded ">
										<h1>Solary</h1>
									</Button>
								</Nav.Link>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item className="text-center">
							<Image
								src="/assets/pompa3.jpg"
								alt="me"
								width="1366"
								height="768"
								className=" carousel-image"
							/>
							<Carousel.Caption className="text-center">
								<Nav.Link as={Link} href="/products">
									<Button className="blur p-3 bg-transparent btn-lg text-lg  shadow-lg border-0 p-5 rounded ">
										<h1>Pompy Ciepla</h1>
									</Button>
								</Nav.Link>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}

export default HeaderSlides;
