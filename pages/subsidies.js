import React from "react";
import { Reviews, Subsidies, Subsidies2 } from "../components";
import { Container } from "react-bootstrap";
import Head from "next/head";
function subsidies() {
	return (
		<>
			<Head>
				<title>Zonnepanelen Subsidies | AM Greenergy | Helmond</title>
				<meta
					name="description"
					content="Ontdek welke subsidies beschikbaar zijn voor zonnepanelen in Helmond en hoe AM Green Energy u kan helpen om hiervan te profiteren. Vraag een gratis offerte aan!"
				/>
			</Head>
			<Subsidies />
			<Subsidies2 />

			<Reviews />
		</>
	);
}

export default subsidies;
