import { React, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import {
	ProductBrands,
	Pumps1,
	Pumps2,
	Pumps3,
	Pumps4,
	Pumps5,
} from "../components";

function pumps() {
	return (
		<Container fluid className="mt-5 pt-5 products-bg ">
			<Pumps1 />
			<Pumps2 />
			<Pumps3 />
			<Pumps4 />
			<Pumps5 />
			<ProductBrands />
		</Container>
	);
}

export default pumps;
