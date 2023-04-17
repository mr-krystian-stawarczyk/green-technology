import React from "react";

import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { useRouter } from "next/router";
import { useSpring, animated } from "react-spring";
import Nav from "react-bootstrap/Nav";

import Link from "next/link";

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
				className=" text-center d-flex justify-content-center align-items-center vh-full rounded my-2 shadow-lg"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="blur p-3 shadow-lg rounded">
					<animated.div style={animationProps}>
						{" "}
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<p className="lead">
									{" "}
									In addition to our core products, we offer a range of
									accessories and services to help you get the most out of your
									heating and cooling systems, from installation to maintenance
									and repair.
								</p>
								<Col className="d-flex align-items-center text-center justify-content-center">
									<Nav.Link as={Link} href="/contact">
										<Button variant="success btn-md m-2 text-uppercase text-bold">
											{" "}
											Contact
										</Button>
									</Nav.Link>{" "}
									<Nav.Link as={Link} href="/bateries">
										<Button variant="success btn-md m-2 text-uppercase text-bold">
											Bateries
										</Button>
									</Nav.Link>{" "}
								</Col>
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
				<Col lg={5} className="bg-transparent blur p-3 rounded shadow-lg mx-2">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Img
								src="/assets/szafa.png"
								className="shadow-lg bg-transparent "
							/>
						</Card>
					</animated.div>
				</Col>
			</Row>
		</div>
	);
}

export default Product4;
