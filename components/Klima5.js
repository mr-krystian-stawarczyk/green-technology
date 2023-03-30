import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Klima5() {
	return (
		<Row className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center rounded shadow-lg">
			<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Img src="/assets/about1.jpg" className="shadow-lg" />
					<Card.Body className="text-center">
						<Card.Text className=" bg-transparent">
							Home cooling systems are essential for maintaining a comfortable
							living environment, especially during the hot summer months. They
							work by removing heat from the air inside your home and releasing
							it outside, effectively cooling the air.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Img src="/assets/about2.jpg" className="shadow-lg" />
					<Card.Body className="text-center">
						<Card.Text className=" bg-transparent">
							Modern home cooling systems are highly effective at keeping your
							home cool and comfortable, even during the hottest days of the
							year. Theyre designed to be energy-efficient, which means they use
							less energy to produce the same amount of cooling as older
							systems.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Img src="/assets/about3.jpg" className="shadow-lg" />
					<Card.Body className="text-center">
						<Card.Text className=" bg-transparent">
							Additionally, home cooling systems come in a variety of sizes and
							configurations, allowing you to choose the one that best fits your
							homes unique needs. Whether you need a small system for a single
							room or a larger system for your entire home, theres a cooling
							system that will work for you.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default Klima5;
