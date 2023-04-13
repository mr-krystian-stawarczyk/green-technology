import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Bateries2() {
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
			className="  d-flex flex-column justify-content-center  border-0  p-2 "
			ref={sectionRef}
		>
			<Row className=" text-center justify-content-center align-items-center mt-5">
				<Col xl={5} lg={5} className=" rounded p-2 m-2">
					<animated.div style={imgAnimationProps}>
						<Card
							style={{
								border: "none",
							}}
							className=" "
						>
							<Card.Body className="text-center">
								<h1 className=" text-dark ">Netspanning te hoog?</h1>
								<p className=" text-dark ">
									Een ander onmiskenbaar en voor sommigen belangrijk aspect dat
									wordt ondersteund door de investering in energieopslag, is het
									probleem waarmee een toenemend aantal prosumenten wordt
									geconfronteerd: te hoge spanning in het netwerk.
								</p>
								<p className=" text-dark ">
									Het wordt veroorzaakt door overbelasting van het net op
									zonnige, lente- en zomerdagen tijdens de piekuren van de
									energieproductie van PV-installaties, waardoor in sommige
									gevallen overtollige energie niet aan het net kan worden
									teruggeleverd. Dan moet een prosumer die geen energieopslag
									heeft rekening houden met frequente uitschakelingen van de
									omvormer, en dus - verminderde energieproductie van zijn
									installatie. Voor prosumenten met energieopslag geldt dit
									probleem niet, want dan kunnen er overschotten ontstaan ​​die
									helemaal niet aan het net worden geleverd.
								</p>
							</Card.Body>{" "}
						</Card>
					</animated.div>{" "}
				</Col>
				<Col xl={5} lg={5} className="  rounded  rounded m-2">
					<animated.div style={animationProps}>
						{" "}
						<Card className="border-0 bg-transparent">
							<Card.Img src="/assets/home-battery3.png" className="" />
						</Card>{" "}
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Bateries2;
