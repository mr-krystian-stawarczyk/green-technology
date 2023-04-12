import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import sanityClient from "@sanity/client";
import CountUp from "react-countup";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { urlFor } from "../lib/client";

import Link from "next/link";

function Solar2N() {
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
			fluid
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
					<animated.div style={animationProps}>
						<Col lg={6}>
							{" "}
							<h1>
								Mogelijke oplossingen met behulp van fotovoltaïsche cellen
							</h1>
						</Col>
					</animated.div>
				</Row>{" "}
				<Row className="text-center justify-content-center align-items-center align-self-center">
					<Card
						className="border-sm  rounded-0"
						style={{
							justifyContent: "center",
							alignContent: "center",
							alignItems: "center",
							width: "18rem",
							height: "25rem",
						}}
					>
						<Card.Img
							src="/assets/battery-mag.png"
							style={{
								width: "6rem",
								height: "6rem",
							}}
							className="my-1"
						/>
						<Card.Body>
							<Card.Title>Energie Magazijn</Card.Title>
							<Card.Text>
								Onafhankelijkheid van elektriciteitsprijzen en stroomuitval
								huidig. Zorgen voor een meer kosteneffectieve installatie in de
								aangekondigde dynamische tarieven met Uurtarieven.
							</Card.Text>
						</Card.Body>{" "}
						<Button variant="">
							<BsFillArrowRightCircleFill
								className="arrow-green"
								style={{ color: "green", width: "30px", height: "30px" }}
							/>
						</Button>
					</Card>
					<Card
						className="border-sm  rounded-0"
						style={{
							justifyContent: "center",
							alignContent: "center",
							alignItems: "center",
							width: "18rem",
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
							<Card.Title>Warmte Opslag</Card.Title>
							<Card.Text>
								Ecologische en efficiënte warmtebron die uw thuis zal maken
								tegen lage kosten de ideale temperatuur bereikt. Bedankt wijd
								scala aan apparaten - we zullen zeker de juiste voor u vinden en
								uw gebouw.
							</Card.Text>
						</Card.Body>{" "}
						<Button variant="">
							<BsFillArrowRightCircleFill
								className="arrow-green"
								style={{ color: "green", width: "30px", height: "30px" }}
							/>
						</Button>
					</Card>
					<Card
						className="border-sm  rounded-0"
						style={{
							justifyContent: "center",
							alignContent: "center",
							alignItems: "center",
							width: "18rem",
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
							<Card.Title>Opladers voor Voertuigen</Card.Title>
							<Card.Text>
								Zelfstandig goedkoop kunnen verwarmen en comfort bieden van de
								buitentemperatuur. Ontdek onze effectieve en praktische
								oplossingen.
							</Card.Text>
						</Card.Body>{" "}
						<Button variant="">
							<BsFillArrowRightCircleFill
								className="arrow-green"
								style={{ color: "green", width: "30px", height: "30px" }}
							/>
						</Button>
					</Card>{" "}
					<Card
						className="border-sm  rounded-0"
						style={{
							justifyContent: "center",
							alignContent: "center",
							alignItems: "center",
							width: "18rem",
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
							<Card.Title>Verwarming en Koeling</Card.Title>
							<Card.Text>
								Zelfstandig goedkoop kunnen verwarmen en comfort bieden van de
								buitentemperatuur. Ontdek onze effectieve en praktische
								oplossingen.
							</Card.Text>
						</Card.Body>{" "}
						<Button variant="">
							<BsFillArrowRightCircleFill
								className="arrow-green"
								style={{ color: "green", width: "30px", height: "30px" }}
							/>
						</Button>
					</Card>
				</Row>
			</Row>
		</Container>
	);
}

export default Solar2N;
