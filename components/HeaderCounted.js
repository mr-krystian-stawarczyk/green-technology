import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import CountUp from "react-countup";
import { useSpring, animated } from "react-spring";

import Nav from "react-bootstrap/Nav";
import Link from "next/link";
function HeaderCounted() {
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
			className="vh-full text-dark border-0 mt-5"
			ref={sectionRef}
		>
			<Row className="text-center justify-content-center justify-content-sm-center align-items-center mt-5 pt-5">
				<Row className="pt-5 ">
					<animated.div style={animationPropsMiddle}>
						<h1>Wij leveren elke dag eersteklas diensten</h1>
						<h2> Bekijk hoeveel we al hebben bereikt</h2>
					</animated.div>
				</Row>

				<Col lg={4}>
					<animated.div style={animationProps}>
						<Card className="m-3 border-success bg-transparent p-4">
							<Card.Img
								variant="top"
								src="/assets/Projekt bez tytułu (4).png"
							/>
							<Card.Body>
								<Card.Title>Warmtepompen</Card.Title>
								<Card.Title>
									<span className="display-6">+</span>
									{isVisible && (
										<CountUp start={100} end={500} duration={12} delay={0}>
											{({ countUpRef }) => (
												<span className="count display-5" ref={countUpRef} />
											)}
										</CountUp>
									)}
								</Card.Title>
								<Nav.Link as={Link} href="/pumps">
									<Button className="btn-green text-uppercase btn-md hover">
										Warmtepompen
									</Button>
								</Nav.Link>{" "}
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
				<Col lg={4}>
					{" "}
					<animated.div style={animationPropsMiddle}>
						<Card className="m-3 border-success bg-transparent p-4">
							<Card.Img
								variant="top"
								src="/assets/Projekt bez tytułu (5).png"
							/>
							<Card.Body>
								<Card.Title>Zonnepanelen</Card.Title>
								<Card.Title>
									<span className="display-6">+</span>
									{isVisible && (
										<CountUp start={0} end={300} duration={12} delay={0}>
											{({ countUpRef }) => (
												<span className="count display-5" ref={countUpRef} />
											)}
										</CountUp>
									)}
								</Card.Title>
								<Nav.Link as={Link} href="/solar">
									<Button className="btn-green text-uppercase btn-md hover">
										Zonnepanelen
									</Button>
								</Nav.Link>{" "}
							</Card.Body>
						</Card>{" "}
					</animated.div>
				</Col>
				<Col lg={4}>
					{" "}
					<animated.div style={imgAnimationProps}>
						<Card className="m-3 border-success bg-transparent p-4">
							<Card.Img variant="top" src="/assets/20558_3.png" />
							<Card.Body>
								<Card.Title>Airconditioning</Card.Title>
								<Card.Title>
									<span className="display-6">+</span>
									{isVisible && (
										<CountUp start={50} end={370} duration={12} delay={0}>
											{({ countUpRef }) => (
												<span className="count display-5" ref={countUpRef} />
											)}
										</CountUp>
									)}
								</Card.Title>
								<Nav.Link as={Link} href="/klimatization">
									<Button className="btn-green text-uppercase btn-md hover">
										Airconditioning
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

export default HeaderCounted;
