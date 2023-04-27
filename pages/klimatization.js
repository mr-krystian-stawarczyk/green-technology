import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
	Klima1,
	Klima2,
	Klima3,
	Klima4,
	Klima5,
	Klima6,
	ProductBrands,
	Reviews,
	SanityKlima,
	SanityWork,
} from "../components";
function klimatization() {
	return (
		<Container className="mt-5 rounded">
			<Klima1 />
			<Klima2 />
			<SanityKlima />
			<Reviews />
		</Container>
	);
}

export default klimatization;
