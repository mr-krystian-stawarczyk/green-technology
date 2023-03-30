import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Header3() {
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
		<Container
			fluid
			className="mt-5 pt-5 shadow-lg vh-100 text-dark rounded d-flex align-items-center secondary-bg"
			ref={sectionRef}
		>
			<Row
				className=" text-center d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="p-3 rounded  shadow-lg ">
					<animated.div style={imgAnimationProps}>
						{" "}
						<Card className="border-0">
							<Card.Img src="/assets/solary.jpg" className="shadow-lg" />
						</Card>{" "}
					</animated.div>
				</Col>
				<Col lg={5} className="blur p-3 mx-2 shadow-lg rounded">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center text-white">
								<Card.Title
									style={{
										fontWeight: "bold",
									}}
								>
									Our heating pumps use advanced technology to provide efficient
									and cost-effective heating solutions, while our solar panels
									harness the power of the sun to provide renewable energy for
									your property.
								</Card.Title>
								<Nav.Link as={Link} href="/work">
									<Button variant="light btn-md p-2 text-uppercase text-bold shadow-lg">
										Work
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

export default Header3;
