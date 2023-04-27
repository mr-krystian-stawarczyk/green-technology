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
import { useRouter } from "next/router";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import sanityClient from "@sanity/client";
import CountUp from "react-countup";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { urlFor } from "../lib/client";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useTranslation } from "react-i18next";
function HeaderN1() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);
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
	const { t } = useTranslation();
	const client = sanityClient({
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		dataset: "production",
		useCdn: true,
		apiVersion: "2022-03-09",
	});

	const [liczba_klientow, setLiczbaKlientow] = useState(0);

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		// Fetch the happy client count from Sanity
		client
			.fetch(
				`*[_type == "counts"] {
          liczba_klientow
        }`
			)
			.then((data) => {
				const count = data[0]?.liczba_klientow ?? 0;
				setLiczbaKlientow(count);
			})
			.catch((error) => {
				console.error("Error fetching happy client count:", error);
			});

		return () => {
			observer.disconnect();
		};
	}, [sectionRef]);

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
			className="  text-dark   align-items-center  p-2 border-0 mt-5 "
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
				<Row className="py-3 text-start ">
					<Col lg={8}>
						{" "}
						<h1 className="bold">{t("h4")}</h1>
					</Col>
				</Row>{" "}
				<Row className="text-center justify-content-center align-items-center align-self-center">
					<CardGroup className="">
						<Col lg={4}>
							<animated.div style={animationProps}>
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										minWidth: "20rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/solar-energy.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="m-3"
									/>
									<Card.Body>
										<Card.Title className="bold">{t("h5")}</Card.Title>
										<Card.Text>{t("h6")}</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/solar">
										<Button className="bg-transparent border-0">
											{" "}
											<BsFillArrowRightCircleFill
												className="arrow-green mb-4 hover"
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
						</Col>
						<Col lg={4}>
							<animated.div style={animationPropsMiddle}>
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										minWidth: "20rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/heat-pump.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="m-3"
									/>
									<Card.Body>
										<Card.Title className="bold">{t("h7")}</Card.Title>
										<Card.Text>{t("h8")}</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/pumps">
										<Button className="bg-transparent border-0">
											{" "}
											<BsFillArrowRightCircleFill
												className="arrow-green mb-4 hover"
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
						</Col>
						<Col lg={4}>
							<animated.div style={animationPropsMiddle}>
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										minWidth: "20rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/air-conditioning.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="m-3"
									/>
									<Card.Body>
										<Card.Title className="bold">{t("h9")}</Card.Title>
										<Card.Text>{t("h10")}</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/klimatization">
										<Button className="bg-transparent border-0">
											{" "}
											<BsFillArrowRightCircleFill
												className="arrow-green mb-4 hover"
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
						</Col>
						<Col lg={4}>
							{" "}
							<animated.div style={animationProps}>
								<Card
									className="border-sm rounded-0 "
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										minWidth: "20rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/battery.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="m-3"
									/>
									<Card.Body>
										<Card.Title className="bold">{t("h11")}</Card.Title>
										<Card.Text>{t("h12")}</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/bateries">
										<Button className="bg-transparent border-0 ">
											{" "}
											<BsFillArrowRightCircleFill
												className="arrow-green mb-4 hover"
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
						</Col>
						<Col className="d-flex counted-bg">
							<Col lg={6} sm={6}>
								<animated.div style={animationProps}>
									{" "}
									<Card
										className="border-sm bg-transparent text-center text-white border-0 "
										style={{
											justifyContent: "center",
											alignContent: "center",
											alignItems: "center",
											maxWidth: "22rem",
											height: "24rem",
										}}
									>
										<h1 className="display-1">
											<span className="display-6">+</span>
											{isVisible && (
												<CountUp start={300} end={1062} duration={5} delay={0}>
													{({ countUpRef }) => (
														<span
															className="count display-1"
															ref={countUpRef}
														/>
													)}
												</CountUp>
											)}{" "}
										</h1>
										<h2>{t("h13")}</h2>
									</Card>
								</animated.div>
							</Col>
							<Col lg={6} sm={6}>
								<animated.div style={animationProps}>
									<Card
										className="border-sm text-white bg-transparent border-0"
										style={{
											justifyContent: "center",
											alignContent: "center",
											alignItems: "center",
											maxWidth: "22rem",
											height: "24rem",
										}}
									>
										<h1 className="display-1">
											<span className="display-6">+</span>
											{isVisible && (
												<CountUp start={2000} end={5504} duration={5} delay={0}>
													{({ countUpRef }) => (
														<span
															className="count display-1"
															ref={countUpRef}
														/>
													)}
												</CountUp>
											)}
										</h1>
										<h2>{t("h14")}</h2>
									</Card>
								</animated.div>{" "}
							</Col>{" "}
						</Col>
					</CardGroup>
				</Row>
			</Row>
		</Container>
	);
}

export default HeaderN1;
