import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";

function Header() {
	useEffect(() => {
		const titles = gsap.utils.toArray(".typewriter p");
		const tl = gsap.timeline({ duration: 1, repeat: -1, repeatDelay: 1 });

		titles.forEach((title) => {
			const splitTitle = new SplitTextJS(title);

			tl.from(
				splitTitle.chars,
				{ opacity: 0, y: 80, rotateX: -90, stagger: 0.02 },
				"<1"
			).from(
				splitTitle.chars,
				{ opacity: 0, y: -80, rotateX: 90, stagger: 0.02 },
				"<2"
			);
		});

		return () => {
			tl.pause();
		};
	}, []);

	return (
		<Container
			fluid
			className=" header-bg vh-100 rounded shadow-lg d-flex flex-column"
		>
			<Row
				className=" text-center d-flex justify-content-center align-items-center h-100"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="typewriter shadow-lg">
					<p className=" ">Klimatyzacje </p>
					<p>Pompy Ciepla </p>
					<p>Foto Woltaika </p>
					<p>Sterownie </p>
					<p>Eco Friendly </p>
				</Col>
				<Col lg={5} className=" ">
					<Card className="border-0 shadow-lg">
						<Card.Img src="/assets/header.jpg" className="shadow-lg" />
					</Card>
				</Col>
				<Row className="justify-content-center ">
					<Col md={4}>
						<Button variant="success" size="lg" className="shadow-lg">
							<Link to="#section2" smooth={true} duration={200}>
								Discover More !
							</Link>
						</Button>
					</Col>
				</Row>
			</Row>
		</Container>
	);
}

export default Header;
