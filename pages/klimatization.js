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
import Head from "next/head";

function klimatization() {
	return (
		<>
			<Head>
				<title>Airconditioning | AM Greenergy | Nederland</title>
				<meta
					name="description"
					content="AM Greenergy levert hoogwaardige airconditioning oplossingen voor bedrijven en particulieren in Nederland. Contacteer ons voor een gratis offerte."
				/>
			</Head>
			<Container className="mt-5 rounded">
				<Klima1 />
				<Klima2 />
				<SanityKlima />
				<Reviews />
			</Container>{" "}
		</>
	);
}

export default klimatization;
