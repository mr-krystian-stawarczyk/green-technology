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
function Klima2() {
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
		<Row
			className=" text-center justify-content-center align-items-center"
			style={{
				alignItems: "center",
				justifyContent: "center",
			}}
			ref={sectionRef}
		>
			<Row className="py-3 text-center text-dark">
				<Col lg={7}>
					<animated.div style={animationPropsMiddle}>
						<h1>Voordelen van recuperatie</h1>
					</animated.div>
				</Col>
			</Row>
			<Row className="text-center  justify-content-center align-items-center ">
				<CardGroup>
					{" "}
					<Col lg={6}>
						<Card
							className="border-sm rounded-0 bg-green "
							style={{
								justifyContent: "center",
								alignContent: "center",
								alignItems: "center",
								maxWidth: "38rem",
								height: "30rem",
							}}
						>
							{" "}
							<Card.Img
								src="/assets/stress-management.png"
								style={{
									width: "6rem",
									height: "6rem",
								}}
								className="my-1"
							/>
							<Card.Body>
								<Card.Title>GEZONDHEID EN COMFORT</Card.Title>
								<Card.Text>
									System rekuperacji, dzięki zastosowaniu filtrów, rozprowadza
									po pomieszczeniach świeże, czyste, pozbawione pyłków i
									alergenów powietrze o odpowiedniej wilgotności. Jest to bardzo
									zdrowe i komfortowe rozwiązanie dla każdego użytkownika, ale
									szczególnie przydatne i zalecane dla alergików, gdyż taki
									mikroklimat również nie sprzyja rozwojowi pleśni i grzybów.
									Unikamy także efektu parowania szyb od wewnątrz.
								</Card.Text>
							</Card.Body>{" "}
						</Card>
					</Col>
					<Col lg={6}>
						<animated.div style={imgAnimationProps}>
							<Card
								className="border-sm rounded-0  bg-amg text-white"
								style={{
									justifyContent: "center",
									alignContent: "center",
									alignItems: "center",
									maxWidth: "38rem",
									height: "30rem",
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
										Het gebruik van een recuperatiesysteem maakt een
										aanzienlijke besparing mogelijk vermindering van
										verwarmingskosten. Volgens over het gebruikte type
										warmtewisselaar en verschillen temperatuur tussen de
										binnenkant van het gebouw en de lucht atmosferische
										omstandigheden kan het niveau van warmteterugwinning
										variëren van 50 tot tot 95%. Door onherstelbaar
										warmteverlies te elimineren, van de verwarmde lucht die van
										binnenuit het gebouw doorkomt bijvoorbeeld ventilatie of
										traditionele ventilatie, winnen we verwarmingsbesparingen
										tot 30%. Momenteel is dat niet het geval Het is ook mogelijk
										om een ​​energiebesparend of passiefhuis te bouwen zonder
										het gebruik van recuperatie.
									</h6>
								</Card.Body>{" "}
							</Card>
						</animated.div>
					</Col>
					<Col lg={6}>
						<animated.div style={animationProps}>
							<Card
								className="border-sm bg-amg rounded-0 text-white"
								style={{
									justifyContent: "center",
									alignContent: "center",
									alignItems: "center",
									maxWidth: "38rem",
									height: "30rem",
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
									<Card.Title>COMFORT</Card.Title>
									<Card.Text>
										Dankzij de combinatie van de fotovoltaïsche installatie en
										het systeem we kunnen onszelf geheel gratis voorzien van
										airconditioning koel comfort en een aangenaam microklimaat
										in huis bouwen, zelfs op warme en zeer zonnige dagen. Dagen
										zoals deze ze geven de voorkeur aan de productie van
										elektriciteit uit PV-installaties, a de overschotten kunnen
										direct en doorlopend worden gebruikt luchtkoeling dankzij
										airconditioning. Het is ook een geweldige oplossing voor het
										mogelijke probleem van te hoog spanning in het netwerk,
										tijdens de productieve dagen van micro-installaties –
										dankzij airconditioning verhogen we ons eigen verbruik en
										wij lossen dit probleem op.
									</Card.Text>
								</Card.Body>{" "}
							</Card>{" "}
						</animated.div>
					</Col>
					<Col lg={6}>
						<Card
							className="border-sm   rounded-0"
							style={{
								justifyContent: "center",
								alignContent: "center",
								alignItems: "center",
								maxWidth: "38rem",
								height: "30rem",
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
									Airconditioning, dankzij de mogelijkheid om de circulatie van
									de factor om te keren, Het kan ook in de winter als warmtebron
									worden gebruikt extra verwarming of volledige
									ruimteverwarming. In deze de manier waarop het het vaakst
									wordt gebruikt in periodes overgangsperiode: herfst of lente,
									maar in ons aanbod we hebben ook airconditioners die zijn
									ontworpen voor werk het hele jaar door, wat effectief kan
									werken in de modus verwarming zelfs bij extreem lage
									temperaturen buiten tot -30°C.
								</Card.Text>
							</Card.Body>{" "}
						</Card>{" "}
					</Col>
				</CardGroup>
			</Row>
		</Row>
	);
}

export default Klima2;
