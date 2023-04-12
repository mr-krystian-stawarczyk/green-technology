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
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, options);
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [sectionRef, options]);

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
			className=" vh-full text-dark  d-flex align-items-center  p-2"
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
					<animated.div style={animationProps}>
						{" "}
						<Card className="border-0">
							<Card.Img src="/assets/local.png" className="hover" />
						</Card>{" "}
					</animated.div>
				</Col>
				<Col lg={6} className="blur p-3 mx-2  rounded m-2">
					<animated.div style={imgAnimationProps}>
						<Card
							style={{
								border: "none",
							}}
							className=""
						>
							<Card.Body className=" text-dark">
								<h3 className="">
									Wij zijn een lokaal bedrijf met 12 jaar ervaring en hebben het
									centrum opgericht Groene technologieën voor u - naast u.
								</h3>
								<h5 className="">
									Wij bieden praktische oplossingen om van uw huis een thuis te
									maken ecologisch.
								</h5>
								<h5>
									Leer ons kennen, vertel ons over uw wensen en oordeel zelf -
									Er is geen probleem dat we niet kunnen oplossen!
								</h5>
								<Nav.Link as={Link} href="/about">
									<Button className=" p-2  text-bold  text-dark shadow-lg hover m-5 nav-blue-bg border-0 text-white">
										Maak kennis met ons bedrijf
									</Button>
								</Nav.Link>{" "}
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default HeaderN2;