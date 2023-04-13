import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Warm1() {
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

	return (
		<Container
			fluid
			className=" vh-full d-flex flex-column justify-content-center  border-0  p-2 "
			ref={sectionRef}
		>
			<Row className=" text-center justify-content-center align-items-center mt-5">
				<Col xl={5} lg={5} className="  rounded  rounded m-2">
					<animated.div style={imgAnimationProps}>
						{" "}
						<Card className="border-0 bg-transparent">
							<Card.Img src="/assets/warm.png" className="" />
						</Card>{" "}
					</animated.div>
				</Col>
				<Col xl={5} lg={5} className=" rounded p-2 m-2">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center">
								<h1 className=" text-dark ">Warmteopslag </h1>
								<p className=" text-dark ">
									Het is een moderne warmwatertank die kan worden verwarmd en
									energie kan verzamelen in de vorm van warmte.
								</p>
								<p className=" text-dark ">
									Hij is voorzien van een batterij met een groot warmtewisselend
									oppervlak, wat zorgt voor een zeer hoog rendement. Meestal
									gemaakt van roestvrij staal, wat de levensduur verlengt zonder
									extra onderhoud. Het grootste voordeel is dat het in
									combinatie met een fotovoltaïsche micro-installatie een
									perfecte oplossing is, want het is een volledig gratis en
									onderhoudsvrije set voor het bereiden van warm water voor een
									gezin van meerdere personen.
								</p>
							</Card.Body>{" "}
						</Card>
					</animated.div>{" "}
				</Col>
			</Row>
		</Container>
	);
}

export default Warm1;
