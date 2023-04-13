import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Image from "react-bootstrap";
function Subsidies() {
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
		<div ref={sectionRef}>
			<Row className="  text-center text-dark justify-content-center align-items-center  my-5 pt-3">
				<animated.div style={animationPropsMiddle}>
					<h1 className="mt-5">
						Bekijk de mogelijkheden om uw spaargeld te verhogen
					</h1>
					<h5 className="my-2">
						Hieronder vindt u aantrekkelijke subsidies waar u gebruik van kunt
						maken om nog meer te besparen!
					</h5>
				</animated.div>
				<Card.Img
					src="/assets/piggy-bank.png"
					style={{
						width: "10rem",
						height: "10rem",
					}}
					className="my-1"
				/>
			</Row>
			<Row className="  text-center text-dark justify-content-center align-items-center  my-5 pt-3">
				<Col lg={4}>
					<animated.div style={animationProps}>
						<Card
							className=" rounded-0 hover2 "
							style={{
								justifyContent: "center",
								alignContent: "center",
								alignItems: "center",
								maxWidth: "35rem",
								height: "35rem",
							}}
						>
							<Card.Body>
								<span className="display-1"> 1 </span>
								<Card.Text>
									Investeringssubsidie Duurzame Energie (ISDE): De ISDE is een
									subsidieprogramma dat de aankoop van hernieuwbare
									energiesystemen ondersteunt, waaronder zonnepanelen,
									warmtepompen, thuisbatterijen en airconditioning. Het bedrag
									van de subsidie hangt af van het type systeem en de
									capaciteit, maar kan variëren van enkele honderden tot enkele
									duizenden euros. Huiseigenaren, bedrijven en
									non-profitorganisaties kunnen zich aanmelden voor de ISDE.
								</Card.Text>
							</Card.Body>
						</Card>
					</animated.div>{" "}
				</Col>
				<Col lg={4}>
					{" "}
					<animated.div style={animationPropsMiddle}>
						{" "}
						<Card
							className="border-sm rounded-0 bg-amg text-white hover2"
							style={{
								justifyContent: "center",
								alignContent: "center",
								alignItems: "center",
								maxWidth: "35rem",
								height: "35rem",
							}}
						>
							<Card.Body>
								<span className="display-1"> 2 </span>
								<h6>
									Subsidie energiebesparing eigen huis (SEEH): De SEEH is een
									subsidieprogramma dat financiële ondersteuning biedt aan
									Nederlandse huiseigenaren die investeren in energiebesparende
									maatregelen, waaronder de installatie van zonnepanelen,
									warmtepompen, thuisbatterijen en airconditioning. De subsidie
									dekt tot 20% van de investeringskosten, met een maximum van
									€10.000. Om in aanmerking te komen, moeten huiseigenaren ten
									minste twee energiebesparende maatregelen hebben genomen.
								</h6>
							</Card.Body>{" "}
						</Card>{" "}
					</animated.div>{" "}
				</Col>
				<Col lg={4}>
					{" "}
					<animated.div style={imgAnimationProps}>
						{" "}
						<Card
							className="border-sm  rounded-0 hover2"
							style={{
								justifyContent: "center",
								alignContent: "center",
								alignItems: "center",
								maxWidth: "35rem",
								height: "35rem",
							}}
						>
							<Card.Body>
								<span className="display-1"> 3 </span>
								<Card.Text>
									Subsidie energiebesparing en duurzame energie
									sportaccommodaties (SEDS): De SEDS is een subsidieprogramma
									dat sportverenigingen en -stichtingen ondersteunt bij het
									verduurzamen van hun accommodaties. De subsidie dekt maximaal
									30% van de investeringskosten voor energiebesparende
									maatregelen, waaronder de installatie van zonnepanelen,
									warmtepompen, thuisbatterijen en airconditioning. Het maximale
									subsidiebedrag is €125.000 per aanvraag.
								</Card.Text>
							</Card.Body>{" "}
						</Card>{" "}
					</animated.div>{" "}
				</Col>{" "}
			</Row>{" "}
		</div>
	);
}

export default Subsidies;
