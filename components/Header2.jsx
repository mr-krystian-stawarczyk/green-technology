import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

function Header2() {
	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateY(-100px)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateY(0)" : "translateY(-100px)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	return (
		<div ref={sectionRef}>
			<Container
				fluid
				className="pt-5 secondary-bg vh-100 d-flex flex-column justify-content-center rounded shadow-lg"
				id="#section2"
			>
				<Row className="mt-5 pt-5 text-center justify-content-center align-items-center ">
					<Col lg={5} className=" ">
						<Card className="border-0 shadow-lg">
							<Card.Img src="/assets/header.jpg" className="shadow-lg" />
						</Card>
					</Col>
					<Col lg={5} className="">
						<animated.div style={animationProps}>
							<Card
								style={{
									border: "none",
								}}
								className="bg-transparent "
							>
								<Card.Body className="text-center">
									<Card.Title
										style={{
											fontWeight: "bold",
											color: "white",
										}}
										className=" header-text"
									>
										<span className="shadow-lg">
											Our company specializes in creating innovative solutions
											for heating and climate control. We design and manufacture
											heating pumps, as well as advanced control units that
											enable our customers to manage their heating and cooling
											systems with ease.
										</span>
									</Card.Title>
									<Card.Text className="mt-5 bg-transparent"></Card.Text>
								</Card.Body>
							</Card>
						</animated.div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Header2;
