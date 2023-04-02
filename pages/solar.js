import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
	ProductBrands,
	Solar1,
	Solar2,
	Solar3,
	Solar4,
	Solar5,
} from "../components";
function solar() {
	return (
		<Container fluid className="mt-5 rounded ">
			<Solar1 />
			<Solar2 />
			<Solar3 />
			<Solar4 />
			<Solar5 />
			<ProductBrands />
		</Container>
	);
}

export default solar;
