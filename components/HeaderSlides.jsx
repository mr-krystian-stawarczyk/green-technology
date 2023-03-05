import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";

function HeaderSlides() {
	return (
		<Container fluid className="shadow-lg   my-5 rounded">
			<Row className="align-items-center pt-5">
				<Col md={10} className="mx-auto ">
					<Carousel className="m-4">
						<Carousel.Item>
							<Image
								src="/assets/header.jpg"
								alt="me"
								width="350"
								height="550"
								className="d-block w-100"
							/>

							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="/assets/header.jpg"
								alt="me"
								width="350"
								height="550"
								className="d-block w-100"
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="/assets/header.jpg"
								alt="me"
								width="350"
								height="550"
								className="d-block w-100"
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
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
