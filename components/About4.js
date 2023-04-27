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
import { useTranslation } from "react-i18next";
import sanityClient from "@sanity/client";

function About4() {
	const { t } = useTranslation();
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
				<Row className="py-3 text-center ">
					<animated.div style={animationProps}>
						<Col lg={8}>
							{" "}
							<h1>{t("ab14")}</h1>
							<h3>{t("ab15")}</h3>
						</Col>
					</animated.div>
				</Row>{" "}
				<Row className="text-center justify-content-center align-items-center align-self-center">
					<CardGroup className=" justify-content-center align-items-center align-self-center">
						<Col lg={4}>
							<animated.div style={animationProps}>
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "39rem",
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
										<Card.Title>{t("ab16")}</Card.Title>
										<Card.Text>{t("ab17")}</Card.Text>
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
										maxWidth: "27rem",
										height: "39rem",
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
										<Card.Title>{t("ab18")}</Card.Title>
										<Card.Text>{t("ab19")}</Card.Text>
									</Card.Body>{" "}
								</Card>
							</animated.div>
						</Col>
						<Col lg={4}>
							<animated.div style={animationProps}>
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "39rem",
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
										<Card.Title>{t("ab20")}</Card.Title>
										<Card.Text>{t("ab22")}</Card.Text>
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
										maxWidth: "27rem",
										height: "30rem",
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
										<Card.Title>{t("ab23")} </Card.Title>
										<Card.Text> {t("ab22")}</Card.Text>
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
										maxWidth: "27rem",
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
										<Card.Title>{t("ab25")}</Card.Title>
										<Card.Text> {t("ab24")}</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>
						</Col>
						<Col lg={4}>
							<animated.div style={animationProps}>
								<Card
									className="border-sm rounded-0 bg-amg text-white "
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "30rem",
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
										<Card.Title>{t("ab27")}</Card.Title>
										<Card.Text>{t("ab28")}</Card.Text>
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
