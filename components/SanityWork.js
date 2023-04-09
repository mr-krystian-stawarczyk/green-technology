import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import { urlFor } from "../lib/client";
import sanityClient from "@sanity/client";
import { useSpring, animated } from "react-spring";

function SanityWork() {
	const [products, setProducts] = useState([]);
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
		const result = await client.fetch(`*[_type == "product"]`);
		setProducts(result);
	};

	useEffect(() => {
		fetchData();
	}, []);

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
		<Container fluid className=" shadow-lg py-3 " ref={sectionRef}>
			<Row className="justify-content-center align-items-center text-center mt-5 text-dark">
				<h1 className="py-3">Bekijk onze nieuwste projecten</h1>
			</Row>
			<Row className="justify-content-center align-items-center text-center">
				<Col lg={6}>
					{" "}
					<animated.div style={animationProps}>
						<Carousel loop indicators={false}>
							{products.map((product) => (
								<Carousel.Item
									key={product._id}
									className="justify-content-center align-items-center text-center"
								>
									<Card
										key={product._id}
										className=" bg-transparent text-dark border-0   "
									>
										<Card.Img
											src={urlFor(product.image && product.image[0])}
											style={{ maxHeight: "30rem", maxWidth: "40rem" }}
											className="rounded justify-content-center mx-auto"
										/>
										<Card.Body className="bg-transparent text-dark rounded">
											<Card.Title>{product.name}</Card.Title>
											<Card.Text>{product.details}</Card.Text>
										</Card.Body>
									</Card>
								</Carousel.Item>
							))}
						</Carousel>
					</animated.div>
				</Col>
				<Col lg={6}>
					<animated.div style={imgAnimationProps}>
						<Card.Img
							variant="top"
							src="/assets/sanity-work.png"
							style={{ maxHeight: "30rem", maxWidth: "40rem" }}
						/>
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default SanityWork;
