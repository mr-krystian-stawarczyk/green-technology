import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";

function ProductBrands() {
	return (
		<Container fluid className="overflow-hidden rounded shadow-lg my-3">
			<Row className="truck-road bg-dark">
				<Col className="truck">
					<Image
						width={80}
						height={80}
						src="/assets/Bez tytułu (80×80 px).png"
						alt="truck"
					/>
				</Col>
			</Row>
			<Row
				className="bg-dark justify-content-center align-items-center text-center  "
				style={{ height: "200px" }}
			>
				<Carousel
					interval={3000}
					pause={false}
					indicators={false}
					controls={false}
				>
					<Carousel.Item className="p-4">
						<Card.Img
							src="/assets/izzifast.png"
							className=" bg-transparent rounded "
							style={{ maxHeight: "200px", maxWidth: "300px" }}
						/>
					</Carousel.Item>{" "}
					<Carousel.Item className="p-4">
						<Card.Img
							src="/assets/Haier.png"
							className=" bg-transparent rounded "
							style={{ maxHeight: "200px", maxWidth: "300px" }}
						/>
					</Carousel.Item>
					<Carousel.Item className="p-4">
						<Card.Img
							src="/assets/LG.png"
							className=" bg-transparent rounded "
							style={{ maxHeight: "200px", maxWidth: "300px" }}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Card.Img
							src="/assets/heiko.png"
							className=" bg-transparent rounded "
							style={{ maxHeight: "200px", maxWidth: "300px" }}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Card.Img
							src="/assets/Goodwe_1024x.png"
							className=" bg-transparent rounded "
							style={{ maxHeight: "200px", maxWidth: "300px" }}
						/>
					</Carousel.Item>
				</Carousel>{" "}
			</Row>
		</Container>
	);
}

export default ProductBrands;
