import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CountUp from "react-countup";
import { useSpring, animated } from "react-spring";
function CountedBar() {
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
		<Container fluid ref={sectionRef} className="second-bg">
			<Row className=" justify-content-center align-items-center text-center">
				{" "}
				<Col lg={4}>
					<animated.div style={animationProps}>
						<Card.Body className="text-white">
							<Card.Title>
								{isVisible && (
									<CountUp start={100} end={15706} duration={3} delay={0}>
										{({ countUpRef }) => (
											<span className="count " ref={countUpRef} />
										)}
									</CountUp>
								)}
							</Card.Title>{" "}
							<Card.Title>Geïnstalleerde fotovoltaïsche panelen</Card.Title>
						</Card.Body>{" "}
					</animated.div>
				</Col>
				<Col lg={4}>
					{" "}
					<animated.div style={animationPropsMiddle}>
						<Card.Body className="text-white">
							<Card.Title>
								{isVisible && (
									<CountUp start={6} end={12} duration={3} delay={0}>
										{({ countUpRef }) => (
											<span className="count " ref={countUpRef} />
										)}
									</CountUp>
								)}
							</Card.Title>{" "}
							<Card.Title>Jarenlange ervaring</Card.Title>
						</Card.Body>{" "}
					</animated.div>
				</Col>
				<Col lg={4}>
					<animated.div style={animationPropsMiddle}>
						<Card.Body className="text-white">
							<Card.Title>
								{isVisible && (
									<CountUp start={6} end={1795} duration={3} delay={0}>
										{({ countUpRef }) => (
											<span className="count " ref={countUpRef} />
										)}
									</CountUp>
								)}{" "}
							</Card.Title>{" "}
							<Card.Title> Vermogen van de warmtepompinstallatie kW</Card.Title>
						</Card.Body>{" "}
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default CountedBar;
