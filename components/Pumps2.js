import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Pumps2() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-full my-2 shadow-lg bg-primary">
			<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
				{" "}
				<Card className="border-0 shadow-lg bg-transparent">
					<Card.Img src="/assets/szafa.png " className="shadow-lg" />
				</Card>{" "}
			</Col>
			<Col xl={5} lg={5} className="blur p-3 mx-2 shadow-lg">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Body className="text-center">
						<p className="lead text-white">
							{" "}
							Pompa ciepła pracuje automatycznie w zależności od zapotrzebowania
							na ciepło Twojego domu. Włącza się i wyłącza, aby ogrzać
							pomieszczenia oraz ciepłą wodę.
						</p>
						<Nav.Link as={Link} href="https://izzifast.nl">
							<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
								Izzifast.nl
							</Button>
						</Nav.Link>{" "}
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default Pumps2;
