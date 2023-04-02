import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import CardFlip from "react-card-flip";
import Link from "next/link";
function Header5() {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleCardHover = (isHovering) => {
		setIsFlipped(isHovering);
	};
	return (
		<Container fluid className="  header-bg pb-5   p-2">
			<Row className="justify-content-center align-items-center text-center">
				<Col lg={5} className=" m-5">
					{" "}
					<CardFlip
						flipDirection="horizontal"
						onMouseEnter={() => handleCardHover(true)}
						onMouseLeave={() => handleCardHover(false)}
					>
						<Card
							className="my-card front border-0 blur p-3 shadow-lg bg-transparent"
							onClick={() => setIsFlipped(!isFlipped)}
						>
							<Card.Body>
								<Card.Text
									style={{
										fontWeight: "bold",

										fontSize: "5rem",
									}}
								></Card.Text>{" "}
								<Card.Img
									src="/assets/Logo.png"
									className="shadow-lg card-image"
								/>
							</Card.Body>
						</Card>
						<Card className="my-card back border-0 blur p-3 shadow-lg bg-light blur">
							<Card.Body>
								<Card.Text
									style={{
										fontWeight: "bold",
									}}
								>
									<span className="lead">
										Our team of skilled technicians and engineers are dedicated
										to providing exceptional customer service and support. Were
										always available to answer any questions you may have and to
										help you choose the right products for your specific needs
										and budget.
									</span>
								</Card.Text>
							</Card.Body>
						</Card>
					</CardFlip>
				</Col>
				<Col lg={5} className=" m-5">
					{" "}
					<CardFlip
						flipDirection="horizontal"
						onMouseEnter={() => handleCardHover(true)}
						onMouseLeave={() => handleCardHover(false)}
					>
						<Card
							className="my-card front border-0 blur p-3 shadow-lg bg-transparent"
							onClick={() => setIsFlipped(!isFlipped)}
						>
							<Card.Body>
								<Card.Text
									style={{
										fontWeight: "bold",

										fontSize: "5rem",
									}}
								></Card.Text>{" "}
								<Card.Img
									src="/assets/money.jpg"
									className="shadow-lg card-image"
								/>
							</Card.Body>
						</Card>
						<Card className="my-card back border-0 blur p-3 shadow-lg bg-light blur">
							<Card.Body>
								<Card.Text
									style={{
										fontWeight: "bold",
									}}
								>
									<span className="lead">
										We understand that every customer has unique requirements
										when it comes to heating and cooling their space. Thats why
										we offer a wide range of products and solutions to suit any
										application, from small residential systems to large
										commercial installations.
									</span>
								</Card.Text>
							</Card.Body>
						</Card>
					</CardFlip>
				</Col>

				<Col lg={5} className=" m-5">
					{" "}
					<CardFlip
						flipDirection="horizontal"
						onMouseEnter={() => handleCardHover(true)}
						onMouseLeave={() => handleCardHover(false)}
					>
						<Card
							className="my-card front border-0 blur p-3 shadow-lg bg-transparent"
							onClick={() => setIsFlipped(!isFlipped)}
						>
							<Card.Body>
								<Card.Text
									style={{
										fontWeight: "bold",

										fontSize: "5rem",
									}}
								></Card.Text>{" "}
								<Card.Img
									src="/assets/foot.jpg"
									className="shadow-lg card-image"
								/>
							</Card.Body>
						</Card>
						<Card className="my-card back border-0 blur p-3 shadow-lg bg-light blur">
							<Card.Body>
								<Card.Text
									style={{
										fontWeight: "bold",
									}}
								>
									<span className="lead">
										At our company, were committed to sustainability and
										environmental responsibility. We strive to minimize our
										carbon footprint and reduce waste in everything we do, from
										the materials we use to the way we manufacture and transport
										our products.
									</span>
								</Card.Text>
							</Card.Body>
						</Card>
					</CardFlip>
				</Col>
			</Row>
		</Container>
	);
}

export default Header5;
