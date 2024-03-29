import React from "react";

import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { useRouter } from "next/router";
import { useSpring, animated } from "react-spring";
import Nav from "react-bootstrap/Nav";

import Link from "next/link";

function Product2() {
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
				className=" text-center d-flex justify-content-center align-items-center header-bg vh-full "
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
				id="product3"
			>
				{" "}
				<Col lg={5} className="blur shadow-lg rounded p-3 mx-2">
					<animated.div style={animationProps}>
						{" "}
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center justify-content-center">
								<p className="lead ">
									Our klimatization systems provide precise temperature and
									humidity control, creating a comfortable and healthy
									environment for your home or office.
								</p>

								<Col className="d-flex align-items-center text-center justify-content-center">
									<Nav.Link as={Link} href="/about">
										<Button variant="success btn-md m-2 text-uppercase text-bold">
											About
										</Button>
									</Nav.Link>
									<Nav.Link as={Link} href="/klimatization">
										<Button variant="success btn-md m-2 text-uppercase text-bold">
											Cooling
										</Button>
									</Nav.Link>{" "}
								</Col>
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
				<Col lg={5} className="blur p-3 shadow-lg rounded">
					<animated.div style={animationProps}>
						{" "}
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Img src="/assets/klimatyzacje.jpg" className="shadow-lg" />
						</Card>{" "}
					</animated.div>
				</Col>
			</Row>{" "}
		</div>
	);
}

export default Product2;
