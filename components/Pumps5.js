import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Pumps5() {
	return (
		<Row className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center rounded shadow-lg">
			<Col lg={3} sm={5} className="hover2 m-2 shadow-lg p-2 blur rounded">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Img src="/assets/about1.jpg" className="shadow-lg" />
					<Card.Body className="text-center">
						<Card.Text className=" bg-transparent">
							Heating pumps are an extremely effective way to heat your home or
							business. They work by transferring heat from the outside air or
							ground to the inside of your building, making them much more
							efficient than traditional heating systems.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={3} sm={5} className="hover2 m-2 shadow-lg p-2 blur rounded">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Img src="/assets/about2.jpg" className="shadow-lg" />
					<Card.Body className="text-center">
						<Card.Text className=" bg-transparent">
							In fact, heating pumps can be up to three times more efficient
							than traditional heating systems, which means they can save you a
							significant amount of money on your energy bills over time.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={3} sm={5} className="hover2 m-2 shadow-lg p-2 blur rounded">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Img src="/assets/about3.jpg" className="shadow-lg" />
					<Card.Body className="text-center">
						<Card.Text className=" bg-transparent">
							Additionally, heating pumps are very effective at maintaining a
							consistent temperature in your home or business, ensuring that you
							always feel comfortable no matter what the weather is like
							outside.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default Pumps5;
