import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Klima3() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-100 bg-light">
			<Col xl={5} lg={5} className="blur p-3 mx-2 shadow-lg">
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
							}}
							className=" header-text"
						>
							<span className="shadow-lg">
								Haier air conditioners are a top choice for those looking for a
								high-quality and reliable cooling solution for their home or
								business. Haier offers a wide range of air conditioners,
								including portable, window-mounted, and split-system units, to
								suit any space or cooling need. With features such as
								programmable thermostats, multiple fan speeds, and energy-saving
								modes, Haier air conditioners are designed to provide
								customizable comfort while also being energy-efficient.
							</span>
						</Card.Title>
						<Nav.Link
							as={Link}
							href="https://www.haierappliances.com/ductless/mrv-s-series"
						>
							<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
								Haierappliances.com
							</Button>
						</Nav.Link>{" "}
					</Card.Body>
				</Card>
			</Col>{" "}
			<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
				{" "}
				<Card className="border-0 shadow-lg">
					<Card.Img src="/assets/Haiercooler.png" className="shadow-lg" />
				</Card>{" "}
			</Col>
		</Row>
	);
}

export default Klima3;
