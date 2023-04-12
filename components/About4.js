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

import Link from "next/link";

function About4() {
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
				<Row className="py-3 text-center ">
					<animated.div style={animationProps}>
						<Col lg={8}>
							{" "}
							<h1>Voordelen van een lokale installateur</h1>
							<h3>6 redenen om voor AMGreenergy te kiezen</h3>
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
										maxWidth: "26rem",
										height: "35rem",
									}}
								>
									{" "}
									<Card.Img
										src="/assets/maintenance.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											Installaties uitvoeren zonder onderaannemers
										</Card.Title>
										<Card.Text>
											Alle installaties voeren we uit met onze eigen teams
											montagemedewerkers, d.w.z. werknemers die werkzaam zijn in
											ons bedrijf bedrijf. We verkopen verworven contracten niet
											door aan andere bedrijven, waardoor we vanaf het moment de
											kwaliteit van de uitgevoerde service controleren
											ondertekening van het contract door onze begeleide montage
											tot inbedrijfstelling. Service betekent voor ons meer dan
											prestatie taak die ons is toevertrouwd en het starten van
											de installatie - dit is ook hulp en advies voor al je
											vragen al binnen gebruiksduur van de installatie.
										</Card.Text>
									</Card.Body>{" "}
								</Card>
							</animated.div>
						</Col>
						<Col lg={4}>
							<animated.div style={animationPropsMiddle}>
								<Card
									className="border-sm rounded-0 bg-amg text-white"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "26rem",
										height: "35rem",
									}}
								>
									<Card.Img
										src="/assets/place.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>Lokale reikwijdte van de activiteit</Card.Title>
										<h6>
											We beperken ons actieradius tot ca. 300km van Venlo, dus
											we hebben een korte maaktijd servicewerkzaamheden indien
											door ons aangebracht apparaten zullen defect raken.
										</h6>
									</Card.Body>{" "}
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
										maxWidth: "26rem",
										height: "35rem",
									}}
								>
									<Card.Img
										src="/assets/checklist.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											Kwalificaties, kennis en vaardigheden
										</Card.Title>
										<Card.Text>
											Al onze medewerkers hebben een passende opleiding genoten
											(SEP G1, G2, G3 in E+D-reeksen). We hebben ook
											UDT-certificaat voor fotovoltaïsche installaties
											(OZE-W/04/000019/19)), evenals voor het installeren van
											warmtepompen (FGAZ-P/09/0437/21). We doen regelmatig mee
											aan trainingen om het niveau van onze kwalificaties te
											verhogen medewerkers.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>
						</Col>
						<Col lg={4}>
							<animated.div style={animationProps}>
								<Card
									className="border-sm  text-white bg-amg rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",

										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/rating.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>Betrouwbaar advies</Card.Title>
										<Card.Text>
											Het uitgangspunt in het verkoopproces is gedegen het
											onderzoeken van de behoeften van de klant, zowel in termen
											van vraag energie en warmte van het gebouw. Alleen na
											betrouwbaar uitgevoerd interview en audit, prestaties
											visualisatie of simulatie maken wij een offerte op maat
											volgens de behoeften van de klant.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
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
										maxWidth: "26rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/automation.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>Complex aanbod</Card.Title>
										<Card.Text>
											Naast fotovoltaïsche installaties en warmtepompen, we zijn
											ook gespecialiseerd in het verstrekken van uitgebreide
											oplossingen op het gebied van airconditioning,
											recuperatie, magazijnen energie en elektrische voertuigen.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>
						</Col>
						<Col lg={4}>
							<animated.div style={imgAnimationProps}>
								<Card
									className="border-sm rounded-0 bg-amg text-white "
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "26rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/customer-service.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>Ervaring</Card.Title>
										<Card.Text>
											De afgelopen jaren hebben enkele honderden ons hun
											vertrouwen gegeven klanten.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>
						</Col>
					</CardGroup>
				</Row>
			</Row>
		</Container>
	);
}

export default About4;
