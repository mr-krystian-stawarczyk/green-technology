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
} from "../components";
function klimatization() {
	return (
		<Container fluid className="mt-5 rounded">
			<Klima1 />
			<Klima2 />
			<Klima3 />
			<Klima4 />
			<Klima6 />
			<Klima5 />
			<ProductBrands />
		</Container>
	);
}

export default klimatization;
