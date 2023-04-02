import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { urlFor } from "../lib/client";
import { Product } from "../components";
import sanityClient from "@sanity/client";
import { useSpring, animated } from "react-spring";

import { useRouter } from "next/router";
const client = sanityClient({
	projectId: "3go1z0b0",
	dataset: "production",
	useCdn: true, // useCdn is set to true by default, so you can omit this line
});

function Work() {
	const router = useRouter();
	const { id } = router.query;

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);
	const [projects, setProjects] = useState([]);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProjects = async () => {
			const query = `*[_type == "project"]{
		  title,
		  description,
		  mainImage{
			asset->{
			  _id,
			  url
			},
			alt
		  }
		}`;

			const results = await client.fetch(query);
			setProjects(results);
		};

		fetchProjects();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const result = await client.fetch(`*[_type == "product"]`);
			setProducts(result);
		};
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
			<Container fluid className=" ">
				<Row
					className="text-center pt-5 d-flex vh-full justify-content-center align-items-center  testimonial-bg "
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Col lg={5} className="blur p-3 mx-2 shadow-lg blur">
						<animated.div style={animationProps}>
							{" "}
							<Card
								style={{
									border: "none",
								}}
								className="bg-transparent "
							>
								<Card.Body className="text-center">
									<p className="lead text-dark text-uppercase">
										Working in green technologies involves developing and
										implementing sustainable solutions that minimize the
										negative impact of human activities on the environment. This
										field encompasses a wide range of disciplines, including
										renewable energy, energy efficiency, waste management, and
										sustainable transportation.
									</p>
								</Card.Body>
							</Card>{" "}
						</animated.div>
					</Col>
					<Col lg={5} className="blur p-3 shadow-lg rounded">
						<animated.div style={animationProps}>
							{" "}
							<Card
								style={{
									border: "none",
								}}
								className="bg-transparent "
							>
								<Card.Img src="/assets/work1.jpg" className="shadow-lg" />
							</Card>{" "}
						</animated.div>
					</Col>
				</Row>
				<Row
					className=" text-center d-flex justify-content-center align-items-center vh-full header-bg text-dark "
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Col lg={5} className="blur p-3 shadow-lg rounded">
						<animated.div style={animationProps2}>
							{" "}
							<Card
								style={{
									border: "none",
								}}
								className="bg-transparent shadow-lg"
							>
								<Card.Img src="/assets/work2.jpg" className="shadow-lg" />
							</Card>{" "}
						</animated.div>
					</Col>
					<Col lg={5} className="blur p-3 shadow-lg rounded mx-2">
						<animated.div style={animationProps2}>
							<Card
								style={{
									border: "none",
								}}
								className="bg-transparent "
							>
								<Card.Body className="text-center p-3 ">
									<p className="lead">
										{" "}
										Green technologies offer a unique opportunity to combine
										innovative thinking with environmental stewardship, creating
										a better world for present and future generations. As such,
										working in green technologies can be a fulfilling and
										rewarding career path for individuals who are passionate
										about making a positive impact on the planet.
									</p>
								</Card.Body>
							</Card>
						</animated.div>
					</Col>
				</Row>
				<Row className="d-flex align-items-center justify-content-center  header-bg vh-full  pb-5">
					<Row className="align-items-center justify-content-center text-center">
						<Col
							lg={10}
							className="text-dark text-center blur shadow-sm  rounded "
						>
							{" "}
							<p className="display-1 m-2 mt-3">Check Out Our Latest Work</p>
						</Col>
					</Row>
					{products.map((product) => (
						<Col
							lg={5}
							key={product._id}
							className="m-2 col-md-10 blur p-3 shadow-lg rounded"
						>
							<Card
								key={product._id}
								className=" bg-transparent text-dark border-0  hover p-3 "
							>
								<Card.Img
									variant="top"
									src={urlFor(product.image && product.image[0])}
									style={{ maxHeight: "20rem", minHeight: "16rem" }}
									className="rounded"
								/>
								<Card.Body className="bg-white rounded">
									<Card.Title>Name:{product.name}</Card.Title>
									<Card.Text>Details:{product.details}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default Work;
