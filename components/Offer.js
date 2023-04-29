import React from "react";
import { useTranslation } from "react-i18next";

import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { useRouter } from "next/router";
import { useSpring, animated } from "react-spring";

import Nav from "react-bootstrap/Nav";

import Link from "next/link";
function Offer() {
	const router = useRouter();
	const { id } = router.query;
	const { t } = useTranslation();

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
		<Container ref={sectionRef}>
			<Row className="mt-5 text-start ">
				<Col lg={7}>
					<h1 className="pt-5 bold">{t("p1")}</h1>{" "}
				</Col>
			</Row>

			<Row
				className=" text-center d-flex justify-content-center align-items-center  my-2 mt-5  rounded"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
				id="product4"
			>
				<Col lg={4} className="  rounded">
					<Nav.Link as={Link} href="/solar" className="">
						<Card
							style={{ border: "none", position: "relative" }}
							className="bg-amg hover m-1 rounded-0 border-0"
						>
							<animated.div style={animationProps}>
								<Card.Img
									src="/assets/solary.jpg"
									className=" rounded-0 border-0"
									style={{ opacity: "0.55" }}
								/>
								<Card.Title
									style={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
										color: "white",
									}}
								>
									<h1>{t("p2")}</h1>
								</Card.Title>
							</animated.div>
						</Card>
					</Nav.Link>
				</Col>
				<Col lg={4} className="  rounded">
					<Nav.Link as={Link} href="/pumps" className="">
						<Card
							style={{ border: "none", position: "relative" }}
							className="bg-amg rounded-0 hover m-1"
						>
							<animated.div style={animationProps}>
								<Card.Img
									src="/assets/pompa.jpg"
									className=" rounded-0 border-0"
									style={{ opacity: "0.55" }}
								/>
								<Card.Title
									style={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
										color: "white",
									}}
								>
									<h1>{t("p3")}</h1>
								</Card.Title>
							</animated.div>
						</Card>
					</Nav.Link>
				</Col>{" "}
				<Col lg={4} className="  rounded ">
					<Nav.Link as={Link} href="/klimatization" className="">
						<Card
							style={{ border: "none", position: "relative" }}
							className="bg-amg rounded-0 hover m-1"
						>
							<animated.div style={animationProps}>
								<Card.Img
									src="/assets/klimatyzacje.jpg"
									className=" rounded-0 border-0"
									style={{ opacity: "0.55" }}
								/>
								<Card.Title
									style={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
										color: "white",
									}}
								>
									<h1>{t("p4")}</h1>
								</Card.Title>
							</animated.div>
						</Card>
					</Nav.Link>
				</Col>
			</Row>
		</Container>
	);
}

export default Offer;
