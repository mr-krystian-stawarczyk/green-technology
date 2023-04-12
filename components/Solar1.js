import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
function Solar1() {
	return (
		<Row className=" vh-full my-2 text-center text-dark justify-content-center pt-3">
			<Row className=" align-items-center justify-content-center text-dark blur ">
				<Col lg={5} className="    rounded text-center ">
					<Card className="border-0">
						<Card.Img src="/assets/solary1.jpg" className="hover" />
					</Card>{" "}
				</Col>
				<Col lg={6} className=" text-start m-1">
					<h1> AM Fotovoltaïsche </h1>

					<h5>
						Schakel over op je eigen energie en kijk hoeveel je kunt bespaar
						dankzij de technologie van de toekomst, namelijk fotovoltaïsche
						energie.
					</h5>
					<h5>
						Als u deze onmiskenbaar winstgevende investering plant – prima jij
						raakt. Wij bieden u een oplossing die perfect is afgestemd op uw
						behoeften.
					</h5>
					<h5>
						Ontdek hoe u eenvoudig kunt besparen, onafhankelijk kunt zijn en
						terwijl je de planeet beschermt.
					</h5>
				</Col>
			</Row>
			<Row className="text-center align-items-center"></Row>
		</Row>
	);
}

export default Solar1;
