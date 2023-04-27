import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function Subsidies() {
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

	const animationPropsMiddle = useSpring({
		from: { opacity: 0 },
		to: {
			opacity: animate ? 1 : 0,
		},
		config: { duration: 1000 },
		delay: 1000,
	});
	return (
		<Container ref={sectionRef}>
			<Row className="  text-center text-dark justify-content-center align-items-center  my-5 pt-3">
				<animated.div style={animationPropsMiddle}>
					<h1 className="mt-5">{t("ss1")}</h1>
					<h5 className="my-2">{t("ss2")}</h5>
				</animated.div>
				<Card.Img
					src="/assets/piggy-bank.png"
					style={{
						width: "10rem",
						height: "10rem",
					}}
					className="my-1"
				/>
			</Row>
			<Row className="  text-center text-dark justify-content-center align-items-center  my-5 pt-3">
				<CardGroup>
					<Col lg={4}>
						<animated.div style={animationProps}>
							<Card
								className=" rounded-0 hover "
								style={{
									justifyContent: "center",
									alignContent: "center",
									alignItems: "center",
									maxWidth: "35rem",
									height: "35rem",
								}}
							>
								<Card.Body>
									<span className="display-1"> 1 </span>
									<Card.Text>{t("ss3")}</Card.Text>
								</Card.Body>
							</Card>
						</animated.div>{" "}
					</Col>
					<Col lg={4}>
						{" "}
						<animated.div style={animationPropsMiddle}>
							{" "}
							<Card
								className="border-sm rounded-0 bg-amg text-white hover"
								style={{
									justifyContent: "center",
									alignContent: "center",
									alignItems: "center",
									maxWidth: "35rem",
									height: "35rem",
								}}
							>
								<Card.Body>
									<span className="display-1"> 2 </span>
									<h6>{t("ss4")}</h6>
								</Card.Body>{" "}
							</Card>{" "}
						</animated.div>{" "}
					</Col>
					<Col lg={4}>
						{" "}
						<animated.div style={animationProps}>
							{" "}
							<Card
								className="border-sm  rounded-0 hover"
								style={{
									justifyContent: "center",
									alignContent: "center",
									alignItems: "center",
									maxWidth: "35rem",
									height: "35rem",
								}}
							>
								<Card.Body>
									<span className="display-1"> 3 </span>
									<Card.Text>{t("ss5")}</Card.Text>
								</Card.Body>{" "}
							</Card>{" "}
						</animated.div>{" "}
					</Col>{" "}
				</CardGroup>
			</Row>{" "}
		</Container>
	);
}

export default Subsidies;
