import React from "react";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";

function Voll1() {
	return (
		<Container>
			<Row className="my-5">
				<h1>Prezenutjemy Gotowe Rozwiazania</h1>
			</Row>
			<Row className="my-3">
				Prosze dac znac jak maja wygladac grafiki zestawow - czy cos z internetu
				czy produkty od producentow na zdjeciu
			</Row>
			<Row>
				<Col>
					{" "}
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="/assets/komplet.png" />

						<Card.Body>
							<Card.Title>Nazwa zestawu</Card.Title>
							<Card.Text>Opis zestawu</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item>Tutaj Dokladny opis</ListGroup.Item>
							<ListGroup.Item>Tutaj Dokladny opis</ListGroup.Item>
							<ListGroup.Item>Tutaj Dokladny opis</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
				<Col>
					{" "}
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="/assets/komplet.png" />

						<Card.Body>
							<Card.Title>Nazwa zestawu</Card.Title>
							<Card.Text>Opis zestawu</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item>Tutaj Dokladny opis</ListGroup.Item>
							<ListGroup.Item>Tutaj Dokladny opis</ListGroup.Item>
							<ListGroup.Item>Tutaj Dokladny opis</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
				<Col>
					{" "}
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="/assets/komplet.png" />

						<Card.Body>
							<Card.Title>Nazwa zestawu</Card.Title>
							<Card.Text>Opis zestawu</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item>Tutaj Dokladny opis</ListGroup.Item>
							<ListGroup.Item>Tutaj Dokladny opis</ListGroup.Item>
							<ListGroup.Item>Tutaj Dokladny opis</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Voll1;
