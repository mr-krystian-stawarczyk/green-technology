import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Image from "react-bootstrap/Image";
import { FaStar } from "react-icons/fa";
import sanityClient from "@sanity/client";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { urlFor } from "../lib/client";

function Reviews({}) {
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
	const { t } = useTranslation();
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
			className=" vh-full text-dark  d-flex align-items-center  p-2 border-0 mt-5 "
			ref={sectionRef}
		>
			<Row
				className=" text-center d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{" "}
				<Row className="py-3 text-start">
					<animated.div style={animationPropsMiddle}>
						<Col lg={7}>
							<h1 className="bold">{t("h23")}</h1>
						</Col>
					</animated.div>
				</Row>
				<Col lg={6} className="p-3 mx-2  rounded ">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className=" "
						>
							<Card.Body className="text-start text-dark">
								<h5 className="py-4 ">{t("h24")}</h5>
								<h5 className="">{t("h25")}</h5>
								<Col className="btn-light btn-lg p-2 text-uppercase text-bold text-center  rounded">
									<span className="lead text-bold">
										<Card.Title>
											<span className="lead">+</span>
											{isVisible && (
												<CountUp start={0} end={300} duration={12} delay={0}>
													{({ countUpRef }) => (
														<span className="lead" ref={countUpRef} />
													)}
												</CountUp>
											)}
										</Card.Title>
									</span>
									<p className="lead"> {t("h26")}</p>
									<span>
										<FaStar className="star " />
										<FaStar className="star " />
										<FaStar className="star " />
										<FaStar className="star " />
										<FaStar className="star " />
									</span>
								</Col>
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
				<Col lg={5} className="p-3  ">
					<Carousel indicators={false} controls={false} loop>
						<Carousel.Item>
							<Image src="/assets/face1.jpg" alt="me" fluid className="" />
							<Carousel.Caption>
								<h3>Yo</h3>
								<p>100% Proffesional</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<Image src="/assets/face2.jpg" alt="me" fluid className="" />

							<Carousel.Caption>
								<h3>Toon</h3>
								<p>Je kunt op hen rekenen!</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<Image src="/assets/face3.jpg" alt="me" fluid className="" />

							<Carousel.Caption>
								<h3>Anna</h3>
								<p>Best Service Ever</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}

export default Reviews;
