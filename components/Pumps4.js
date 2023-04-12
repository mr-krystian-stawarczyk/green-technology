import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Pumps4() {
	return (
		<Row className=" text-center justify-content-center align-items-center my-2  ">
			<Col xl={5} lg={5} className=" p-3 rounded   rounded">
				{" "}
				<Card className="border-0 ">
					<Card.Img src="/assets/Heikopump.jpg" className="" />
				</Card>{" "}
			</Col>{" "}
			<Col xl={5} lg={5} className=" p-3 mx-2 ">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Body className="text-start">
						<h4 className=" text-dark">Wij voeren een betrouwbare audit uit</h4>{" "}
						<h4 className=" text-dark">
							Elk van onze offertes wordt voorafgegaan betrouwbare controle
						</h4>{" "}
						<h5>
							{" "}
							We kiezen niet zomaar een toestel. Iedereen die bij ons komt de
							klant moet voorbereid zijn op een reeks uitputtende vragen met
							betrekking tot het gebouw en een bezoek van een
							installateur/monteur/simpelweg leuke knappe meneer 😀 om de C.O.
						</h5>
						<h5>
							Pas na deze twee belangrijke stappen kunnen we het halen
							verantwoorde keuze van het apparaat en een bindende offerte.
						</h5>
					</Card.Body>
				</Card>
			</Col>{" "}
		</Row>
	);
}

export default Pumps4;
