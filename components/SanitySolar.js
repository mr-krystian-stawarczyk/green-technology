import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
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

function SanitySolar() {
	const router = useRouter();
	const [solar, setSolar] = useState([]);
	const { id } = router.query;
	const client = sanityClient({
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		dataset: "production",
		useCdn: true,
		apiVersion: "2022-03-09",
	});

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);
	const [all, setAll] = useState([]);

	const fetchData = async () => {
		const result = await client.fetch(`*[_type == "solar"]`);
		setSolar(result);
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
		from: { opacity: 0, transform: "translateY(-100px)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateY(0)" : "translateY(-100px)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const animationProps2 = useSpring({
		from: { opacity: 0, transform: "translateY(-100px)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateY(0)" : "translateY(-100px)",
		},
		config: { duration: 1000 },
		delay: 3000,
	});

	return (
		<div ref={sectionRef}>
			<Container className=" ">
				<Row
					className="text-center pt-5 d-flex vh-full justify-content-center align-items-center  "
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Row className="mt-5 pt-5 text-start">
						<Col lg={6}>
							<h1>We presenteren hier onze laatste projecten</h1>
						</Col>
					</Row>

					<Row className="justify-content-center align-items-center text-center">
						<Col lg={10}>
							<Carousel>
								{solar.map((item) => (
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
							</Carousel>
						</Col>

						<Row className="my-2">
							<Col>
								<Button className="nav-blue-bg border-0 text-white btn-md">
									Werk
								</Button>
							</Col>
						</Row>
					</Row>
				</Row>
			</Container>
		</div>
	);
}

export default SanitySolar;
