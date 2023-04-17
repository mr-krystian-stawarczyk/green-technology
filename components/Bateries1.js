import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Bateries1() {
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
					<animated.div style={animationProps}>
						{" "}
						<Card className="border-0 ">
							<Card.Img src="/assets/home-battery.png" className="" />
						</Card>{" "}
					</animated.div>
				</Col>
				<Col xl={5} lg={5} className=" rounded p-2 m-2">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className=" "
						>
							<Card.Body className="text-center">
								<h1 className=" text-dark text-center ">Energie opslag</h1>
								<h5 className=" text-dark  text-start">
									Dankzij de energieopslag kunt u er volledig onafhankelijk van
									worden elektriciteitsnet, stroomuitval en beschermen tegen
									energieprijs stijgt.
								</h5>
								<h5 className=" text-dark text-start">
									Een goed geselecteerde micro-installatie met een
									energieopslagblik 100% van uw elektriciteitsbehoefte dekken
									huishouden, waarbij het netwerk volledig wordt omzeild. Zon
									setje stelt u in staat om alleen uw eigen i, co nog
									belangrijker, gratis elektriciteit: wat er ook gebeurt
									facturatiesysteem zit je zonder magazijn energie, overtollige
									energie die je moet binnenhalen of verkopen netwerken; in
									tijden van energievraag en gebrek aan productie
									micro-installaties, verliest u 20% door het op te halen van
									het netwerk of door het te kopen u moet de distributiekosten
									dragen. Door overschotten op te slaan in in uw eigen magazijn
									kunt u dit voorkomen.
								</h5>
							</Card.Body>{" "}
						</Card>
					</animated.div>{" "}
				</Col>
			</Row>
		</Container>
	);
}

export default Bateries1;
