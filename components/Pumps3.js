import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Pumps3() {
	return (
		<Row className=" text-center justify-content-center align-items-center vh-100 light ">
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
								Haiers Heat Pump Water Heater series was developed with
								household energy savings in mind. Unlike a traditional water
								heater, heat pump water heaters provide hot water using the heat
								in the air, saving on the energy consumption.
							</span>
						</Card.Title>
						<Nav.Link
							as={Link}
							href="https://www.haierhvac.eu/en/product/air-water-treatment/heat-pump-water-heater-hp300200s1"
						>
							<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
								Heier.eu
							</Button>
						</Nav.Link>{" "}
					</Card.Body>
				</Card>
			</Col>{" "}
			<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
				{" "}
				<Card className="border-0 shadow-lg">
					<Card.Img src="/assets/Haierpump.jpg" className="shadow-lg" />
				</Card>{" "}
			</Col>
		</Row>
	);
}

export default Pumps3;
