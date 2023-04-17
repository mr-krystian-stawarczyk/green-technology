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

function Pumps5() {
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
					<Col lg={10}>
						{" "}
						<h1 className="my-3">Voordelen van het gebruik van warmtepompen</h1>
					</Col>
				</Row>{" "}
				<Row className="text-center justify-content-center align-items-center align-self-center">
					<CardGroup>
						<Col lg={4}>
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
										src="/assets/save-plants.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>EFFICIËNTIE EN ECOLOGIE</Card.Title>
										<Card.Text>
											Warmtepompen zijn apparaten met een hoog rendement die ze
											nodig hebben heel weinig elektriciteit om veel te leveren
											energie in de vorm van warmte. Hun efficiëntie vertaalt
											zich in winst in de portemonnee van de eigenaar dankzij
											lage bedrijfskosten en winst voor de natuurlijke omgeving
											- warmtepompen zijn dat wel omdat ze een emissievrije
											warmtebron zijn, d.w.z. ze komen niet vrij milieu geen
											schadelijke stoffen, en voor uw eigen activiteiten kunnen
											gebruikmaken van elektriciteit uit hernieuwbare
											energiebronnen energiebronnen.
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
										src="/assets/piggy-bank.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>BESPARING</Card.Title>
										<h6>
											Dankzij de technologieën die worden gebruikt in
											warmtepompen en hoge efficiëntie van deze apparaten, ze
											zijn momenteel de goedkoopste in werking als warmtebron
											voor de meeste gebouwen (ook gemoderniseerd). Daarnaast
											dankzij de montage van de installatie fotovoltaïsch, is
											het mogelijk om de kosten te verlagen warmtepomp
											verwarming op 0!
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
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "25rem",
										height: "35rem",
									}}
								>
									<Card.Img
										src="/assets/future.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>TOEKOMST</Card.Title>
										<Card.Text>
											Warmtepompen zijn het enige toekomstbestendige alternatief
											om uit te kiezen verwarmingsbron voor nieuwe gebouwen.
											Elke andere kansen zijn gebaseerd op niet-hernieuwbare
											energiebronnen, d.w.z. fossiele brandstoffen of op
											verouderde en minder efficiënte brandstoffen
											technologieën. Bij het selecteren van een warmtepomp kan
											en weggelaten worden besparen op de aanleg van
											rookgasschoorstenen en ruimte bestemd voor stookruimte en
											brandstofopslag.
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
									className="border-sm  text-white bg-amg rounded-0"
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
										<Card.Title>VEILIGHEID EN COMFORT</Card.Title>
										<Card.Text>
											Verwarmingssysteem op basis van een warmtepomp, in
											tegenstelling tot andere, vormt geen risico op
											gasexplosie, brand of koolmonoxidevergiftiging. Het is een
											onderhoudsvrij systeem - het hoeft niet te worden bezorgd
											door brandstofverbruiker en lastig schoonmaken. Daarnaast
											de pomp warmte kan op afstand worden gecontroleerd door de
											installateur of fabrikant, waardoor zijn werk voortdurend
											wordt gecontroleerd en gecontroleerd, wat een snelle
											opname mogelijk maakt eventuele onregelmatigheden en
											onmiddellijk ingrijpen.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4}>
							{" "}
							<animated.div style={animationPropsMiddle}>
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
									<Card.Img
										src="/assets/salary.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>WINSTGEVENDHEID</Card.Title>
										<Card.Text>
											De Rijkssubsidie ​​Isolatie biedt u tal van mogelijkheden.
											Twee subsidies. U kunt het krijgen als u minimaal twee
											isolatiemaatregelen per jaar uitvoert of één combineert
											met de installatie van een warmtepomp, zonneboiler of
											aansluiting op het stadsverwarmingsnet. Financiering in
											het bedrag van ongeveer 30 procent.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4}>
							{" "}
							<animated.div style={animationProps}>
								<Card
									className="border-sm rounded-0 bg-amg text-white rounded-0 w-100"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "25rem",
										height: "35rem",
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
										<Card.Title>MULTITASKING</Card.Title>
										<Card.Text>
											Een warmtepomp is een uitstekende warmtebron voor een
											woning en een apparaat voor de bereiding van sanitair warm
											water, maar niet alleen: het is ook geweldig voor het
											koelen van kamers in de zomer in het gebouw zonder extra
											uitrustingskosten. Dankzij de mogelijkheid om de
											circulatie om te keren, kan de pomp worden gebruikt het
											hele jaar door, afhankelijk van onze behoeften en
											voorkeuren.
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

export default Pumps5;
