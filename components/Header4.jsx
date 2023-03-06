import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

function Header4() {
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
		<Container
			fluid
			className="pt-5 shadow-lg vh-100 text-dark rounded d-flex align-items-center"
			ref={sectionRef}
		>
			<Row
				className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
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
									}}
									className=" header-text"
								>
									With years of experience in the industry, we pride ourselves
									on producing high-quality, reliable products that are built to
									last. We use only the best materials and cutting-edge
									technology to ensure that our products meet the highest
									standards of performance and efficiency.
								</Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
				<Col lg={5} className=" ">
					<Card className="border-0">
						<Card.Img src="/assets/header.jpg" className="shadow-lg" />
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Header4;
