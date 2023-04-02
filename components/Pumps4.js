import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Pumps4() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-full my-2 shadow-lg bg-primary">
			<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
				{" "}
				<Card className="border-0 shadow-lg">
					<Card.Img src="/assets/Heikopump.jpg" className="shadow-lg" />
				</Card>{" "}
			</Col>{" "}
			<Col xl={5} lg={5} className="blur p-3 mx-2 shadow-lg">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Body className="text-center">
						<p className="lead text-white">
							THERMAL monoblock heat pumps are energy efficient devices which
							draw energy from the air and use it to heat or cool the building
							and prepare heat utility water. They can be used in single- family
							houses as well as commercial buildings. Heiko’s heat pumps are
							advanced devices, which guarantee efficient and safe operation.
						</p>
						<Nav.Link as={Link} href="https://heiko.pl/en/offer/heat-pumps/">
							<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
								Haeiko.pl
							</Button>
						</Nav.Link>{" "}
					</Card.Body>
				</Card>
			</Col>{" "}
		</Row>
	);
}

export default Pumps4;
