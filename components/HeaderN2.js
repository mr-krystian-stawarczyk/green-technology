import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function HeaderN2() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [sectionRef]);

	const handleIntersection = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
			if (entries[0].isIntersecting) {
				setAnimate(true);
				setAnimateImg(true);
			}
		});
	};

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

	const animationPropsMiddle = useSpring({
		from: { opacity: 0 },
		to: {
			opacity: animate ? 1 : 0,
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	return (
		<Container
			fluid
			className=" vh-full text-dark  d-flex align-items-center  "
			ref={sectionRef}
		>
			<Row
				className="  d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="p-3 rounded   m-2">
					{" "}
					<Card className="border-0">
						{" "}
						<animated.div style={animationProps}>
							<Card.Img src="/assets/local.png" className="hover" />{" "}
						</animated.div>
					</Card>{" "}
				</Col>
				<Col lg={6} className="blur p-3 mx-2  rounded m-2">
					<Card
						style={{
							border: "none",
						}}
						className=""
					>
						<animated.div style={animationProps}>
							<Card.Body className=" text-center">
								<h1 className="text-center bold py-5">
									Wij zijn een lokaal bedrijf met 12 jaar ervarin
								</h1>
								<h5 className="text-start">
									Wij bieden praktische oplossingen om van uw huis een thuis te
									maken ecologisch.
								</h5>
								<h5 className="text-start">
									Leer ons kennen, vertel ons over uw wensen en oordeel zelf -
									Er is geen probleem dat we niet kunnen oplossen!
								</h5>
								<Nav.Link as={Link} href="/about">
									<Button className=" p-2  text-bold  text-dark shadow-lg hover  nav-blue-bg border-0 text-white text-center my-3">
										Maak kennis met ons bedrijf
									</Button>
								</Nav.Link>{" "}
							</Card.Body>{" "}
						</animated.div>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default HeaderN2;
