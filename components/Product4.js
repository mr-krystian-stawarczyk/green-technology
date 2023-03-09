import React from "react";

import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { useRouter } from "next/router";
import { useSpring, animated } from "react-spring";

function Product4() {
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
		from: { opacity: 0, transform: "translateY(-100px)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateY(0)" : "translateY(-100px)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const imgAnimationProps = useSpring({
		from: { opacity: 0 },
		to: { opacity: animateImg ? 1 : 0 },
		config: { duration: 1000 },
		delay: 1000,
	});
	return (
		<div ref={sectionRef}>
			<Row
				className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center vh-100"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
				id="product5"
			>
				<Col lg={5} className="">
					<animated.div style={imgAnimationProps}>
						{" "}
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Img src="/assets/header.jpg" className="shadow-lg" />
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "black",
									}}
									className=" header-text"
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>{" "}
					</animated.div>
				</Col>
				<Col lg={5} className="">
					<animated.div style={animationProps}>
						{" "}
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
										color: "black",
									}}
									className=" header-text"
								>
									In addition to our core products, we offer a range of
									accessories and services to help you get the most out of your
									heating and cooling systems, from installation to maintenance
									and repair.
								</Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
			</Row>
		</div>
	);
}

export default Product4;
