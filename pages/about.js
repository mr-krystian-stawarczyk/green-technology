import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
	About1,
	About2,
	About3,
	About4,
	Header,
	Header5,
	HeaderSlides,
	ProductBrands,
	Reviews,
	SanityWork,
} from "../components";
import Head from "next/head";
function About() {
	const [fade, setFade] = React.useState(false);

	React.useEffect(() => {
		setFade(true);
	}, []);

	return (
		<>
			<Head>
				<title>Over Ons | AM Greenergy | Nederland</title>
				<meta
					name="description"
					content="AM Green Energy is een toonaangevende leverancier van zonnepanelen en airconditioning oplossingen voor bedrijven en particulieren in Nederland. Leer meer over ons team en onze producten."
				/>
			</Head>
			<About1 />
			<About2 />
			<About3 />
			<About4 />
			<Reviews />
		</>
	);
}

export default About;
