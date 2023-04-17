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
		<>
			<Solar1 />
			<Solar2N />
			<Solar3N />
			<SanitySolar />
			<Reviews />
		</>
	);
}

export default solar;
