import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

function Reviews() {
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
		from: { opacity: 0, transform: "translateY(-100px)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateY(0)" : "translateY(-100px)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const imgAnimationProps = useSpring({
		from: { opacity: 0 },
		to: { opacity: animateImg ? 1 : 0 },
		config: { duration: 1000 },
		delay: 1000,
	});
	return (
		<Container
			fluid
			className=" vh-full text-dark  d-flex align-items-center testimonial-bg  p-2 border-0"
			ref={sectionRef}
		>
			<Row
				className=" text-center d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="blur p-3 mx-2 shadow-lg rounded">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Body className="text-center text-dark">
								<p className="lead text-uppercase">
									Having many happy clients is one of the most important
									achievements for any business. It not only indicates the
									quality of the products or services being offered but also
									reflects the level of customer satisfaction and loyalty.
								</p>{" "}
								<Col className="btn-light btn-lg p-2 text-uppercase text-bold shadow-lg rounded">
									<p>300+ </p>
									<p className="lead">Happy Clients !</p>
									<FaStar className="star" />
									<FaStar className="star" />
									<FaStar className="star" />
									<FaStar className="star" />
									<FaStar className="star" />
								</Col>
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
				<Col lg={5} className="p-3 rounded  shadow-lg bg-light">
					<animated.div style={imgAnimationProps}>
						<Carousel>
							<Carousel.Item>
								<Image
									src="/assets/face1.jpg"
									alt="me"
									width="350"
									height="350"
									className="rounded"
								/>
								<Carousel.Caption>
									<h3>Yo</h3>
									<p>100% Proffesional</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Image
									src="/assets/face2.jpg"
									alt="me"
									width="350"
									height="350"
									className="rounded"
								/>

								<Carousel.Caption>
									<h3>Toon</h3>
									<p>You can coun on them !</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Image
									src="/assets/face3.jpg"
									alt="me"
									width="350"
									height="350"
									className="rounded"
								/>

								<Carousel.Caption>
									<h3>Anna</h3>
									<p>Best Service Ever</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Reviews;
