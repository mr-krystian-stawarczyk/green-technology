import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
	ProductBrands,
	Reviews,
	SanityWork,
	Solar1,
	Solar2,
	Solar3,
	Solar4,
	Solar5,
	Solar3N,
	SanitySolar,
} from "../components";
import Solar2N from "../components/Solar2N";
function solar() {
	return (
		<Container fluid className="pt-5">
			<Solar1 />
			<Solar2N />
			<Solar3N />
			<SanitySolar />
			<Reviews />
		</Container>
	);
}

export default solar;
