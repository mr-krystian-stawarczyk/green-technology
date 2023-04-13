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
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function SanityWork() {
	const [all, setAll] = useState([]);
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
		const result = await client.fetch(`*[_type == "all"]`);
		setAll(result);
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

	const animationPropsMiddle = useSpring({
		from: { opacity: 0 },
		to: {
			opacity: animate ? 1 : 0,
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	return (
		<Container className=" my-5" ref={sectionRef}>
			<Row className="justify-content-center align-items-center text-center  text-dark">
				<Col className="my-3">
					{" "}
					<animated.div style={animationProps}>
						<h1 className=" text-start">Bekijk onze nieuwste projecten</h1>{" "}
					</animated.div>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center text-center">
				<Col lg={10}>
					<animated.div style={animationPropsMiddle}>
						<Carousel className="shadow-lg">
							{all.map((item) => (
								<Carousel.Item key={item._id} style={{ maxHeight: "600px" }}>
									<img
										className="d-block w-100 carousel-imgs "
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

				<Row className="my-2">
					<Col>
						<Nav.Link as={Link} href="/work" className="">
							<Button className="nav-blue-bg border-0 btn-lg">
								Meer Projecten
							</Button>
						</Nav.Link>
					</Col>
				</Row>
			</Row>
		</Container>
	);
}

export default SanityWork;
