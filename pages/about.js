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

function About() {
	const [fade, setFade] = React.useState(false);

	React.useEffect(() => {
		setFade(true);
	}, []);

	return (
		<>
			<About1 />
			<About2 />
			<About3 />
			<About4 />
			<Reviews />
		</>
	);
}

export default About;
