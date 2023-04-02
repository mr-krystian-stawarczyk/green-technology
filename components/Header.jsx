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
			className=" typewriter-bg vh-100 rounded d-flex flex-column "
		>
			<Row
				className=" text-center d-flex justify-content-center align-items-center h-100 text-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col md={2}></Col>
				<Col md={6} className="typewriter shadow-lg bg-light rounded">
					<p>Klimatyzacje </p>
					<p>Pompy Ciepla </p>
					<p>Foto Woltaika </p>
					<p>Sterownie </p>
					<p>Eco Friendly </p>
				</Col>
			</Row>
			<Row className="justify-content-center text-center m-2 pb-5">
				<Col md={4}>
					<Button size="lg" className="shadow-lg btn-green">
						<Link to="#question" smooth={true} duration={200}>
							Question ?
						</Link>
					</Button>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Header;
