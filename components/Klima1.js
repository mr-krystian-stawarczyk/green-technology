import React from "react";

import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

import sanityClient from "@sanity/client";

function Klima1() {
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
			className=" justify-content-center align-items-center vh-full  my-2  rounded"
			ref={sectionRef}
		>
			<Col lg={5} className=" p-3 rounded   rounded">
				{" "}
				<animated.div style={animationProps}>
					<Card className="border-0 ">
						<Card.Img src="/assets/lgcooler.jpg" className="" />
					</Card>{" "}
				</animated.div>
			</Col>
			<Col lg={6} className=" p-3 mx-2 ">
				<animated.div style={animationProps}>
					{" "}
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Body className="">
							<h1 className=" text-dark">
								Recuperatie en airconditioning kunnen worden gecombineerd
							</h1>{" "}
							<h5>
								De airconditioning houdt de kamers koel maar voorziet niet
								ventilatie, d.w.z. verse lucht aanvoeren.
							</h5>{" "}
							<h5>
								Mogelijkheid om te combineren tot één recuperatie- en
								airconditioningsysteem Er is veel. Van de eenvoudigste, namelijk
								het aansluiten van airconditioning kanaal zonder circulatie in
								een mechanisch ventilatiesysteem na een freon-koeler aansluiten.
								Elk gebouw en elke behoefte gebruikers zijn verschillend, dus
								kiezen we voor de juiste oplossing telkens individueel.
							</h5>
						</Card.Body>
					</Card>
				</animated.div>
			</Col>
		</Row>
	);
}

export default Klima1;
