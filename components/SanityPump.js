import React, { useEffect, useRef, useState } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Carousel,
	Button,
	CardGroup,
} from "react-bootstrap";
import { urlFor } from "../lib/client";
import sanityClient from "@sanity/client";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";

function SanityPump() {
	const { t } = useTranslation();

	const [pump, setPump] = useState([]);
	const client = sanityClient({
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		dataset: "production",
		useCdn: true,
		apiVersion: "2022-03-09",
	});

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	const fetchData = async () => {
		const result = await client.fetch(`*[_type == "pumps"]`);
		setPump(result);
	};

	useEffect(() => {
		fetchData();
	});

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
		<Container className=" py-3 " ref={sectionRef}>
			<Row className="justify-content-center align-items-center text-center mt-5 text-dark">
				<Col>
					<h1 className="py-3 text-start">{t("po23")}</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center text-center">
				<Col lg={10}>
					<animated.div style={animationProps}>
						{" "}
						<Carousel>
							{pump.map((item) => (
								<Carousel.Item key={item._id} style={{ height: "600px" }}>
									<img
										className="d-block w-100 carousel-imgs"
										src={urlFor(item.image && item.image[0])}
										alt={item.name}
									/>
									<Carousel.Caption>
										<h3>{item.name}</h3>
										<p>{item.details}</p>
									</Carousel.Caption>
								</Carousel.Item>
							))}
						</Carousel>{" "}
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default SanityPump;
