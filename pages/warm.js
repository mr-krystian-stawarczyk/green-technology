import React from "react";
import { Reviews, Solar2N, Warm1, Warm2 } from "../components";
import Head from "next/head";
function warm() {
	return (
		<>
			<Head>
				<title>Zonneboiler | AM Greenergy | Helmond</title>
				<meta
					name="Zonneboiler | AM Greenergy"
					content="AM Greenergy levert hoogwaardige Zonneboiler voor bedrijven en particulieren in Helmond. Ontdek ons aanbod en vraag een gratis offerte aan om uw verwarming te optimaliseren!"
				/>
			</Head>
			<Warm1 />
			<Warm2 />
			<Solar2N />
			<Reviews />
		</>
	);
}

export default warm;
