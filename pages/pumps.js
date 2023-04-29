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
import Head from "next/head";
function pumps() {
	return (
		<>
			<Head>
				<title>Pomp | AM Greenergy | Helmond</title>
				<meta
					name="description"
					content="Ontdek Pomp Product 1 van AM Green Energy, een hoogwaardige pomp voor bedrijven en particulieren in Helmond. Vraag een gratis offerte aan en optimaliseer uw watervoorziening!"
				/>
			</Head>
			<Container>
				<Pumps2 />
				<Pumps3 />
				<Pumps4 />
				<Pumps5 />
				<SanityPump />
			</Container>
		</>
	);
}

export default pumps;
