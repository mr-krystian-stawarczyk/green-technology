import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
	Bateries1,
	Bateries2,
	Bateries3,
	Reviews,
	Solar2N,
} from "../components";
import Head from "next/head";
function bateries() {
	return (
		<>
			<Head>
				<title>Batterijen | AM Greenergy | Helmond</title>
				<meta
					name="Batterijen"
					content="AM Greenergy levert hoogwaardige batterijen voor bedrijven en particulieren in Helmond. Ontdek ons aanbod en vraag een gratis offerte aan om uw energievoorziening te optimaliseren!"
				/>
			</Head>
			<Container className="">
				<Bateries1 />
				<Bateries2 />
				<Bateries3 />
				<Solar2N />
				<Reviews />
			</Container>
		</>
	);
}

export default bateries;
