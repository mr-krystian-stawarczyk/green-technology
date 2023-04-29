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
import Head from "next/head";
function solar() {
	return (
		<>
			<Head>
				<title>Zonnepanelen | AM Greenergy | Nederland</title>
				<meta
					name="description"
					content="AM Green Energy levert hoogwaardige zonnepanelen voor bedrijven en particulieren in Nederland. Contacteer ons voor een gratis offerte."
				/>
			</Head>
			<Solar1 />
			<Solar2N />
			<Solar3N />
			<SanitySolar />
			<Reviews />
		</>
	);
}

export default solar;
