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

	return (
		<Container
			fluid
			className=" vh-full d-flex flex-column justify-content-center  border-0  p-2 "
			ref={sectionRef}
		>
			<Row className=" text-center justify-content-center align-items-center ">
				<Col xl={5} lg={5} className="  rounded  rounded m-2">
					<animated.div style={animationProps}>
						{" "}
						<Card className="border-0 hover">
							<Card.Img src="/assets/pompa1.jpg" className="shadow-sm" />
						</Card>{" "}
					</animated.div>
				</Col>
				<Col xl={5} lg={5} className=" bg-am-green rounded p-2 m-2">
					<animated.div style={imgAnimationProps}>
						<Card
							style={{
								border: "none",
							}}
							className=" "
						>
							<Card.Body className="text-center">
								<p className="lead text-dark ">
									Ons bedrijf is gespecialiseerd in het creëren van innovatieve
									oplossingen voor verwarming en klimaatbeheersing
								</p>
								<p className="lead text-dark ">
									We ontwerpen en produceren verwarmingspompen, evenals
									geavanceerde besturingseenheden waarmee onze klanten hun
									verwarmings- en koelsystemen gemakkelijk kunnen beheren
								</p>
							</Card.Body>{" "}
							<Nav.Link as={Link} href="/products">
								<Button className="btn-green btn-lg p-2  m-2 text-uppercase text-bold shadow-lg border-0 hover">
									Products
								</Button>
							</Nav.Link>{" "}
						</Card>
					</animated.div>{" "}
				</Col>
			</Row>
		</Container>
	);
}

export default Header2;
