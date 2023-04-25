import React from "react";
import { Reviews, Subsidies, Subsidies2 } from "../components";
import { Container } from "react-bootstrap";

function subsidies() {
	return (
		<>
			<Subsidies />
			<Subsidies2 />

			<Reviews />
		</>
	);
}

export default subsidies;
