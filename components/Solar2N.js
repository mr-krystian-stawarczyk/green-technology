import { useState, useEffect, useRef } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Carousel,
	Button,
	CardGroup,
} from "react-bootstrap";
import { useSpring, animated } from "react-spring";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Solar2N() {
	const { t } = useTranslation();
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [sectionRef]);

	const handleIntersection = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
			if (entries[0].isIntersecting) {
				setAnimate(true);
				setAnimateImg(true);
			}
		});
	};

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
		<Container
			className="  text-dark   align-items-center  p-2 mt-5 border-0 py-5"
			ref={sectionRef}
		>
			<Row
				className=" text-center justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{" "}
				<Row className=" text-start mt-2">
					<Col lg={7}>
						{" "}
						<h1 className="my-5">{t("sl5")}</h1>
					</Col>
				</Row>{" "}
				<Row className="text-center justify-content-center align-items-center align-self-center">
					<CardGroup>
						<Col lg={3}>
							{" "}
							<animated.div style={animationProps}>
								<Card
									className="border-sm  rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "20rem",
										height: "25rem",
									}}
								>
									{" "}
									<Card.Img
										src="/assets/battery-mag.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title> {t("sl6")}</Card.Title>
										<Card.Text>{t("sl7")}</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/bateries" className="mx-2">
										<Button variant="">
											<BsFillArrowRightCircleFill
												className="arrow-green  hover2"
												style={{
													color: "green",
													width: "30px",
													height: "30px",
												}}
											/>
										</Button>
									</Nav.Link>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={3}>
							{" "}
							<animated.div style={animationPropsMiddle}>
								<Card
									className="border-sm  rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "20rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/home.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title> {t("sl8")}</Card.Title>
										<Card.Text>{t("sl9")}</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/warm" className="mx-2">
										<Button variant="">
											<BsFillArrowRightCircleFill
												className="arrow-green hover2"
												style={{
													color: "green",
													width: "30px",
													height: "30px",
												}}
											/>
										</Button>
									</Nav.Link>{" "}
								</Card>{" "}
							</animated.div>
						</Col>
						<Col lg={3}>
							<animated.div style={animationProps}>
								<Card
									className="border-sm  rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "20rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/thermostat.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title> {t("sl10")}</Card.Title>
										<Card.Text>{t("sl11")}</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/pumps" className="mx-2">
										<Button variant="">
											<BsFillArrowRightCircleFill
												className="arrow-green  hover2"
												style={{
													color: "green",
													width: "30px",
													height: "30px",
												}}
											/>
										</Button>
									</Nav.Link>{" "}
								</Card>
							</animated.div>
						</Col>{" "}
						<Col lg={3}>
							<animated.div style={animationProps}>
								<Card
									className="border-sm  rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "20rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/charging-station.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title> {t("sl12")}</Card.Title>
										<Card.Text>{t("sl13")}</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>{" "}
					</CardGroup>
				</Row>
			</Row>
		</Container>
	);
}

export default Solar2N;
