import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Header5() {
	return (
		<Container
			fluid
			className="pt-5 secondary-bg pb-5 rounded shadow-lg vh-100"
		>
			<Row
				className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center text-light"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={4} className="">
					<Card
						style={{
							border: "none",
							fontWeight: "bold",
						}}
						className="bg-transparent "
					>
						<div className="card-container">
							<div className="card-front">
								<Card.Img
									src="/assets/header.jpg"
									className="shadow-lg card-image"
								/>
							</div>
							<div className="card-back">
								<Card.Text className="mt-5 bg-transparent">
									<span>
										Our team of skilled technicians and engineers are dedicated
										to providing exceptional customer service and support. Were
										always available to answer any questions you may have and to
										help you choose the right products for your specific needs
										and budget.
									</span>
								</Card.Text>
								<Button>Product1</Button>
							</div>
						</div>
					</Card>
				</Col>
				<Col lg={4} className="">
					<Card
						style={{
							border: "none",
							fontWeight: "bold",
						}}
						className="bg-transparent "
					>
						<div className="card-container">
							<div className="card-front">
								<Card.Img
									src="/assets/header.jpg"
									className="shadow-lg card-image"
								/>{" "}
							</div>
							<div className="card-back">
								<Card.Text className="mt-5  rounded m-2">
									<span>
										We understand that every customer has unique requirements
										when it comes to heating and cooling their space. Thats why
										we offer a wide range of products and solutions to suit any
										application, from small residential systems to large
										commercial installations.
									</span>
								</Card.Text>
								<Button>Product2</Button>
							</div>
						</div>
					</Card>
				</Col>
				<Col lg={4} className="">
					<Card className="bg-transparent">
						<div className="card-container">
							<div className="card-front">
								<Card.Img
									src="/assets/header.jpg"
									className="shadow-lg card-image"
								/>
							</div>
							<div className="card-back">
								<Card.Text className="mt-5 bg-transparent">
									<span>
										At our company, were committed to sustainability and
										environmental responsibility. We strive to minimize our
										carbon footprint and reduce waste in everything we do, from
										the materials we use to the way we manufacture and transport
										our products.
									</span>
								</Card.Text>
								<Button>Product3</Button>
							</div>
						</div>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Header5;
