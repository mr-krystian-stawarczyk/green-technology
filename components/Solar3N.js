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

function Solar3N() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

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
					<Col lg={6}>
						{" "}
						<h1 className="my-5">Fotovoltaïsche Voordelen</h1>
					</Col>
				</Row>{" "}
				<Row className="text-center justify-content-center align-items-center align-self-center">
					<CardGroup>
						<Col lg={4} sm={12}>
							{" "}
							<animated.div style={animationProps}>
								{" "}
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "25rem",
										height: "35rem",
									}}
								>
									{" "}
									<Card.Img
										src="/assets/piggy-bank.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>Besparing</Card.Title>
										<Card.Text>
											Door de continue toename van elektriciteit die niemand
											spaart, elke mogelijke vorm van besparing op dit gebied
											moet worden overwogen, en zijn eigen fotovoltaïsche
											micro-installatie is daar perfect voor formulier. Het is
											een reactie op de toch al hoge en waarschijnlijk constant
											groeiende toekomstige elektriciteitsprijzen.
											Investeringskosten betalen zichzelf meestal terug binnen 6
											jaar na installatie, en daarna tijd kunnen we direct
											zeggen dat we GRATIS elektriciteit gebruiken geproduceerd
											door onze installatie.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4}>
							{" "}
							<animated.div style={animationPropsMiddle}>
								{" "}
								<Card
									className="border-sm rounded-0 bg-amg text-white"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "25rem",
										height: "35rem",
									}}
								>
									<Card.Img
										src="/assets/lighting.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>Onafhankelijkheid</Card.Title>
										<h6>
											Dankzij onze eigen micro-energiecentrale kunnen we
											onafhankelijk worden van door de overheid ingevoerde
											limieten voor elektriciteitsverbruik daarna preferentiële
											prijzen. Prosumer zijn in het nieuwe systeem
											Netto-facturering, we kunnen onze overschotten aan het
											netwerk verkopen elektriciteit, vaak tegen een hogere
											prijs dan de huidige verkoopprijs door het energiebedrijf.
											na het maken waarde saldo, blijkt dat ondanks het
											overschot in de wet genoemde limieten, onze jaarlijkse
											afrekening is zeer gunstig en als onze installatie goed is
											gedaan geselecteerd, hoeven we niet te betalen voor de
											aankoop van elektriciteit.
										</h6>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4}>
							{" "}
							<animated.div style={animationProps}>
								{" "}
								<Card
									className="border-sm  rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "25rem",
										height: "35rem",
									}}
								>
									<Card.Img
										src="/assets/shield.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>Beveiliging</Card.Title>
										<Card.Text>
											Zonne-energie wordt over het algemeen als betrouwbaar
											beschouwd en hernieuwbaar. Wij maken ons geen zorgen, in
											tegenstelling tot de alternatieven energiebronnen dat over
											50 jaar de zon niet meer schijnt. En zelfs als we toch
											sterven.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4}>
							{" "}
							<animated.div style={animationProps}>
								<Card
									className="border-sm  text-white bg-amg rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "25rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/eco-house.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>Ecologie</Card.Title>
										<Card.Text>
											Zonnestraling is een schone energiebron. PV installatie
											stoot geen vervuilende stoffen uit, en fotovoltaïsche
											panelen, na kan na gebruik worden gerecycled.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4}>
							{" "}
							<animated.div style={animationPropsMiddle}>
								{" "}
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "25rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/international-law.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>Duurzame ontwikkeling</Card.Title>
										<Card.Text>
											Elektriciteit winnen uit een PV-installatie is duurzaam en
											dat is ook zo betekent dat aan de hedendaagse behoeften
											van de samenleving wordt voldaan zonder afbreuk te doen
											aan de behoeften van toekomstige generaties.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4}>
							{" "}
							<animated.div style={animationProps}>
								{" "}
								<Card
									className="border-sm rounded-0 bg-amg text-white "
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "25rem",
										height: "25rem",
									}}
								>
									<Card.Img
										src="/assets/convenient.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>Comfort</Card.Title>
										<Card.Text>
											Zonnestraling bereikt alle breedtegraden van onze planeet,
											en de locatie van onze regio is bijzonder gunstig in
											termen van zonlicht. Aanvullend installatie van
											micro-installaties vereist geen speciale vergunningen en
											is mogelijk bevindt zich op verschillende - ook moeilijk
											bereikbare - plaatsen.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
					</CardGroup>
				</Row>
			</Row>
		</Container>
	);
}

export default Solar3N;
