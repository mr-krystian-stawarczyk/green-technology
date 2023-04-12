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

function HeaderN1() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	};

	const client = sanityClient({
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		dataset: "production",
		useCdn: true,
		apiVersion: "2022-03-09",
	});

	const [liczba_klientow, setLiczbaKlientow] = useState(0);

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, options);

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
	}, [sectionRef, options]);

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
					<animated.div style={animationPropsMiddle}>
						<Col lg={6}>
							{" "}
							<h1>
								Wij bieden uitgebreide diensten met betrekking tot de
								installatie van fotovoltaïsche cellen en warmtepompen
							</h1>
						</Col>
					</animated.div>
				</Row>{" "}
				<Row className="text-center justify-content-center align-items-center align-self-center">
					<CardGroup>
						<Col lg={4}>
							<animated.div style={animationProps}>
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										minWidth: "20rem",
										height: "22rem",
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
										<Card.Title>Zonnepanelen</Card.Title>
										<Card.Text>
											Je eigen, gratis en ecologische stroombron. laten ons om u
											onafhankelijk te maken van verhogingen, limieten en
											onderbrekingen stroomuitval!
										</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/solar">
										<Button className="bg-transparent border-0">
											{" "}
											<BsFillArrowRightCircleFill
												className="arrow-green"
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
										height: "22rem",
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
										<Card.Title>Warmtepomp</Card.Title>
										<Card.Text>
											Ecologische en efficiënte warmtebron die uw het huis zal
											tegen lage kosten de ideale temperatuur bereiken. Bedankt
											een breed scala aan apparaten - we zullen zeker de juiste
											vinden voor u en uw gebouw.
										</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/pumps">
										<Button className="bg-transparent border-0">
											{" "}
											<BsFillArrowRightCircleFill
												className="arrow-green"
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
							<animated.div style={imgAnimationProps}>
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										minWidth: "20rem",
										height: "22rem",
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
										<Card.Title>Airconditioning en recuperatie</Card.Title>
										<Card.Text>
											Mogelijkheid tot goedkope verwarming en comfort ongeacht
											de buitentemperatuur. Maak kennis met de onze effectieve
											en praktische oplossingen.
										</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/klimatization">
										<Button className="bg-transparent border-0">
											{" "}
											<BsFillArrowRightCircleFill
												className="arrow-green"
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
										height: "22rem",
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
										<Card.Title>Energie Magazijn</Card.Title>
										<Card.Text>
											Onafhankelijkheid van elektriciteitsprijzen en
											stroomuitval. Zorgen voor een grotere rendabiliteit van de
											fotovoltaïsche installatie in de aangekondigde dynamische
											tarieven met uurtarieven.
										</Card.Text>
									</Card.Body>{" "}
									<Nav.Link as={Link} href="/bateries">
										<Button className="bg-transparent border-0">
											{" "}
											<BsFillArrowRightCircleFill
												className="arrow-green"
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
											height: "25rem",
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
										<h2>Tevreden Klanten</h2>
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
											height: "25rem",
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
										<h2> De kracht van onze installaties PV - kWp</h2>
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
