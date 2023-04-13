import React from "react";
import { CountedBar, Reviews, Subsidies } from "../components";
import { Container } from "react-bootstrap";

function subsidies() {
	return (
		<>
			<Subsidies />
			<CountedBar />
			<Reviews />
		</>
	);
}

export default subsidies;
