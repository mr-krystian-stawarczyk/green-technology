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

import sanityClient from "@sanity/client";
import { useTranslation } from "react-i18next";

function Klima2() {
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
		<Row
			className=" text-center justify-content-center align-items-center pt-5 mt-5"
			style={{
				alignItems: "center",
				justifyContent: "center",
			}}
			ref={sectionRef}
		>
			<Row className="my-5 text-start text-dark">
				<Col lg={7}>
					<h1 className="bold">{t("kl4")}</h1>
				</Col>
			</Row>
			<Row className="text-center  justify-content-center align-items-center ">
				<CardGroup>
					{" "}
					<Col lg={6}>
						<animated.div style={animationPropsMiddle}>
							{" "}
							<Card
								className="border-sm rounded-0 bg-green "
								style={{
									justifyContent: "center",
									alignContent: "center",
									alignItems: "center",
									maxWidth: "40rem",
									minHeight: "30rem",
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
									<Card.Title className="bold">{t("kl5")}</Card.Title>
									<Card.Text>{t("kl6")}</Card.Text>
								</Card.Body>{" "}
							</Card>{" "}
						</animated.div>
					</Col>
					<Col lg={6}>
						<animated.div style={animationProps}>
							<Card
								className="border-sm rounded-0  bg-amg text-white"
								style={{
									justifyContent: "center",
									alignContent: "center",
									alignItems: "center",
									maxWidth: "40rem",
									minHeight: "30rem",
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
									<Card.Title className="bold">{t("kl7")}</Card.Title>
									<Card.Text>{t("kl8")}</Card.Text>
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
									maxWidth: "40rem",
									minHeight: "30rem",
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
									<Card.Title className="bold">{t("kl9")}</Card.Title>
									<Card.Text>{t("kl10")}</Card.Text>
								</Card.Body>{" "}
							</Card>{" "}
						</animated.div>
					</Col>
					<Col lg={6}>
						{" "}
						<animated.div style={animationPropsMiddle}>
							<Card
								className="border-sm   rounded-0"
								style={{
									justifyContent: "center",
									alignContent: "center",
									alignItems: "center",
									maxWidth: "40rem",
									minHeight: "30rem",
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
									<Card.Title className="bold">{t("kl11")}</Card.Title>
									<Card.Text>{t("kl12")}</Card.Text>
								</Card.Body>{" "}
							</Card>{" "}
						</animated.div>
					</Col>
				</CardGroup>
			</Row>
		</Row>
	);
}

export default Klima2;
