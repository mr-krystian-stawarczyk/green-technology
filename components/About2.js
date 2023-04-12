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
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function About2() {
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
			className=" vh-full d-flex flex-column justify-content-center  border-0  p-2 "
			ref={sectionRef}
		>
			<Row className=" text-center justify-content-center align-items-center ">
				<Col xl={5} lg={5} className="  rounded  rounded m-2">
					<animated.div style={animationProps}>
						{" "}
						<Card className="border-0 hover">
							<h1 className="display-1">
								<span className="display-6">+</span>
								{isVisible && (
									<CountUp start={300} end={1062} duration={5} delay={0}>
										{({ countUpRef }) => (
											<span className="count display-1" ref={countUpRef} />
										)}
									</CountUp>
								)}
							</h1>

							<Card.Text>Tevreden klanten</Card.Text>
							<h1 className="display-1">
								<span className="display-6">+</span>
								{isVisible && (
									<CountUp start={300} end={15075} duration={5} delay={0}>
										{({ countUpRef }) => (
											<span className="count display-1" ref={countUpRef} />
										)}
									</CountUp>
								)}
							</h1>
							<Card.Text>Geïnstalleerde fotovoltaïsche panelen</Card.Text>
						</Card>{" "}
					</animated.div>
				</Col>
				<Col xl={5} lg={5} className=" rounded p-2 m-2">
					<animated.div style={imgAnimationProps}>
						<Card
							style={{
								border: "none",
							}}
							className=" "
						>
							<Card.Body className="text-start">
								<h3 className=" text-dark ">
									Wij zijn een lokaal bedrijf met 12 jaar ervaring
								</h3>
								<p className="lead text-dark ">
									AMGreenergy is een lokaal bedrijf in de sector hernieuwbare
									bronnen energie. We hebben de enige (stationaire) in onze stad
									gemaakt Centrum van groene technologieën - een plek waar
									iedereen een liefhebber van sparen en ecologie krijgt een
									kant-en-klaar, aangepast exemplaar een recept voor het
									verlagen van uw behoeften en mogelijkheden
									elektriciteitsrekeningen en het verbeteren van de kwaliteit
									van uw rekeningen leven dankzij het gebruik van ecologische
									oplossingen in uw huis woning, bedrijf of boerderij.
								</p>
							</Card.Body>{" "}
						</Card>
					</animated.div>{" "}
				</Col>
			</Row>
		</Container>
	);
}

export default About2;
