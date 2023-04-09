import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Header4() {
	const router = useRouter();
	const { id } = router.query;

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
			setAnimateImg(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateX(-50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(-50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const imgAnimationProps = useSpring({
		from: { opacity: 0, transform: "translateX(50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});
	return (
		<Container
			fluid
			className=" vh-full text-dark  d-flex align-items-center  border-0 p-2"
			ref={sectionRef}
		>
			<Row
				className=" text-center d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="blur p-3 mx-2  rounded bg-am-green ">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className=""
						>
							<Card.Body className="text-center">
								<p className="lead ">
									Met jarenlange ervaring in de branche zijn we er trots op
									hoogwaardige, betrouwbare producten te produceren die zijn
									gebouwd om lang mee te gaan
								</p>
								<p className="lead ">
									We gebruiken alleen de beste materialen en de nieuwste
									technologie om ervoor te zorgen dat onze producten voldoen aan
									de hoogste normen van prestaties en efficiëntie
								</p>
								<Nav.Link as={Link} href="/about">
									<Button className="btn-green btn-lg p-2 text-uppercase text-bold shadow-lg hover">
										About
									</Button>
								</Nav.Link>{" "}
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
				<Col lg={5} className="p-3 rounded   ">
					<animated.div style={imgAnimationProps}>
						{" "}
						<Card className="border-0 hover">
							<Card.Img src="/assets/solary1.jpg" className="" />
						</Card>{" "}
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Header4;
