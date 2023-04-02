import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Header2() {
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
			className=" header-bg vh-full d-flex flex-column justify-content-center  border-0  p-2 "
			ref={sectionRef}
		>
			<Row className=" text-center justify-content-center align-items-center ">
				<Col xl={5} lg={5} className=" p-3 rounded blur shadow-lg rounded">
					<animated.div style={imgAnimationProps}>
						{" "}
						<Card className="border-0 shadow-lg hover">
							<Card.Img src="/assets/pompa1.jpg" className="shadow-lg" />
						</Card>{" "}
					</animated.div>
				</Col>
				<Col xl={5} lg={5} className="blur p-3 mx-2 shadow-lg">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<p className="lead text-dark text-uppercase">
									Our company specializes in creating innovative solutions for
									heating and climate control. We design and manufacture heating
									pumps, as well as advanced control units that enable our
									customers to manage their heating and cooling systems with
									ease.
								</p>
								<Nav.Link as={Link} href="/products">
									<Button className="btn-green btn-lg p-2 text-uppercase text-bold shadow-lg border-0">
										Products
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

export default Header2;
