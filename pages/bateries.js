import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
	Bateries1,
	Bateries2,
	Bateries3,
	Reviews,
	Solar2N,
} from "../components";

function bateries() {
	return (
		<Container fluid className="">
			<Bateries1 />
			<Bateries2 />
			<Bateries3 />
			<Solar2N />
			<Reviews />
		</Container>
	);
}

export default bateries;
