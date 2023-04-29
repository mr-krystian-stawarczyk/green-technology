import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";
import sanityClient from "@sanity/client";
import { urlFor } from "../lib/client";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";
function Voll1() {
	const { t } = useTranslation();
	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);
	const [komplet, setKomplet] = useState([]);
	const client = sanityClient({
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		dataset: "production",
		useCdn: true,
		apiVersion: "2022-03-09",
	});
	const fetchData = async () => {
		const result = await client.fetch(`*[_type == "komplet"]`);
		setKomplet(result);
	};

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

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Container className="my-5 py-3" ref={sectionRef}>
			<Row className="my-5">
				<h1 className="bold">{t("vo1")}</h1>
			</Row>

			<Row>
				{komplet.map((item) => (
					<Col key={item._id} lg={4} className="mx-auto ">
						<animated.div style={animationPropsMiddle}>
							<Card className="rounded-0 border-0">
								<Card.Img
									variant="top"
									className="d-block w-100 rounded-0 border-0 shadow-lg"
									src={urlFor(item.image && item.image[0])}
									alt={item.name}
								/>

								<Card.Body>
									<Card.Title className="text-center">{item.name}</Card.Title>
									<Card.Text className="text-center">
										<span>{item.details}</span>
									</Card.Text>

									<ListGroup variant="flush">
										<ListGroup.Item>
											{" "}
											<span>{item.opis1}</span>
										</ListGroup.Item>
										<ListGroup.Item>
											{" "}
											<span>{item.opis2}</span>
										</ListGroup.Item>
										<ListGroup.Item>
											<span>{item.opis3}</span>
										</ListGroup.Item>
									</ListGroup>
								</Card.Body>
							</Card>
						</animated.div>{" "}
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Voll1;
