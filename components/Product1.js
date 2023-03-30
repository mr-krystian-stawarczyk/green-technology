import React from "react";
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { useRouter } from "next/router";
import { useSpring, animated } from "react-spring";
import Nav from "react-bootstrap/Nav";

import Link from "next/link";
function Product1() {
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
		<div ref={sectionRef} id="#pompa">
			<Row
				className="text-center d-flex justify-content-center align-items-center vh-100 secondary-bg text-white shadow-lg"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className=" rounded blur shadow-lg p-3">
					<animated.div style={imgAnimationProps}>
						<Card className="bg-transparent">
							<Card.Img src="/assets/pompa.jpg" className="" />
						</Card>
					</animated.div>
				</Col>
				<Col lg={5} className="blur p-3 shadow-lg mx-2 rounded">
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
									}}
									className=" header-text"
								>
									Our heating pumps are designed to provide efficient and
									reliable heating solutions for homes and businesses, using the
									latest technology to help you save on energy bills.
								</Card.Title>
								<Col className="d-flex align-items-center text-center justify-content-center">
									<Nav.Link as={Link} href="#price">
										<Button variant="light btn-md m-2 text-uppercase text-bold">
											Prices
										</Button>
									</Nav.Link>
									<Nav.Link as={Link} href="/pumps">
										<Button variant="light btn-md m-2 text-uppercase text-bold">
											Pumps
										</Button>
									</Nav.Link>
								</Col>
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
			</Row>
		</div>
	);
}

export default Product1;
