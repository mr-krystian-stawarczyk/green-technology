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
	SanityPump,
	SanityWork,
} from "../components";

function pumps() {
	return (
		<Container fluid className="mt-5 rounded">
			<Pumps2 />
			<Pumps3 />
			<Pumps4 />
			<Pumps5 />
			<SanityPump />
		</Container>
	);
}

export default pumps;
