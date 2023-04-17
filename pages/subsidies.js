import React from "react";
import { CountedBar, Reviews, Subsidies, Subsidies2 } from "../components";
import { Container } from "react-bootstrap";

function subsidies() {
	return (
		<>
			<Subsidies />
			<Subsidies2 />

			<Reviews />
			<CountedBar />
		</>
	);
}

export default subsidies;
