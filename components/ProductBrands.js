import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function ProductBrands() {
	return (
		<Container fluid className="overflow-hidden">
			<Row className="bg-dark justify-content-center align-items-center text-center p-3  shadow-lg ">
				<Col className="text-white bg-transparent">
					<Card className="bg-transparent border-0">
						<Card.Img
							src="/assets/izzifast.png"
							className=" bg-transparent rounded hover"
						/>
					</Card>
				</Col>
				<Col className="text-white bg-transparent">
					<Card className="bg-transparent border-0">
						<Card.Img
							src="/assets/Haier.png"
							className=" bg-transparent rounded hover"
						/>
					</Card>
				</Col>
				<Col className="text-white bg-transparent">
					<Card className="bg-transparent border-0">
						<Card.Img
							src="/assets/LG.png"
							className=" bg-transparent rounded hover"
						/>
					</Card>
				</Col>

				<Col className="text-white bg-transparent">
					<Card className="bg-transparent border-0">
						<Card.Img
							src="/assets/heiko.png"
							className=" bg-transparent rounded hover"
						/>
					</Card>
				</Col>
				<Col className="text-white bg-transparent">
					<Card className="bg-transparent border-0">
						<Card.Img
							src="/assets/Mitsubishi_logo.svg.png"
							className=" bg-transparent rounded hover"
						/>
					</Card>
				</Col>
				<Col className="text-white bg-transparent">
					<Card className="bg-transparent border-0">
						<Card.Img
							src="/assets/Goodwe_1024x.png"
							className=" bg-transparent rounded hover"
						/>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default ProductBrands;
