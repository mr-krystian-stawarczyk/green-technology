import React from "react";

import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { useRouter } from "next/router";
import { useSpring, animated } from "react-spring";

import Nav from "react-bootstrap/Nav";

import Link from "next/link";
function Product3() {
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
				className=" text-center d-flex justify-content-center align-items-center secondary-bg my-2  vh-full shadow-lg rounded"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
				id="product4"
			>
				<Col lg={5} className="blur p-3 shadow-lg rounded">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent rounded"
						>
							<Card.Img
								src="/assets/solary.jpg"
								className="shadow-lg rounded"
							/>
						</Card>{" "}
					</animated.div>
				</Col>
				<Col lg={5} className="blur p-3 shadow-lg mx-2 rounded">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<p className="lead text-white">
									Our solar panels are a sustainable and cost-effective solution
									for powering your home or business, helping you reduce your
									carbon footprint and save on electricity bills.
								</p>
								<Col className="d-flex align-items-center text-center justify-content-center">
									<Nav.Link as={Link} href="/work">
										<Button variant="light btn-md m-2 text-uppercase text-bold">
											Work
										</Button>
									</Nav.Link>
									<Nav.Link as={Link} href="/solar">
										<Button variant="light btn-md m-2 text-uppercase text-bold">
											Panels
										</Button>
									</Nav.Link>{" "}
								</Col>
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
			</Row>
		</div>
	);
}

export default Product3;
