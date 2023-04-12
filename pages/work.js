import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { urlFor } from "../lib/client";
import { Product, Reviews } from "../components";
import sanityClient from "@sanity/client";
import { useSpring, animated } from "react-spring";

import { useRouter } from "next/router";
const client = sanityClient({
	projectId: process.env.NEXT_PUBLIC_PROJECTID,
	dataset: "production",
	useCdn: true,
	apiVersion: "2022-03-09",
});

function Work() {
	const router = useRouter();
	const { id } = router.query;

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);
	const [all, setAll] = useState([]);
	const [solar, setSolar] = useState([]);
	const [pump, setPump] = useState([]);
	const [klima, setKlima] = useState([]);
	const fetchData = async () => {
		const result = await client.fetch(
			`*[_type in ["all", "solar", "pumps","klima"]]`
		);
		setAll(result.filter((all) => all._type === "all"));
		setSolar(result.filter((solar) => solar._type === "solar"));
		setPump(result.filter((pump) => pump._type === "pumps"));
		setKlima(result.filter((klima) => klima._type === "klima"));
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
						<Col lg={6}>
							<Button href="#pumps" className="m-2 nav-blue-bg border-0 btn-lg">
								Pumps
							</Button>
							<Button href="#solar" className="m-2 nav-blue-bg border-0 btn-lg">
								Solar
							</Button>
							<Button href="#klima" className="m-2 nav-blue-bg border-0 btn-lg">
								Klima
							</Button>
							<Button
								href="#newest"
								className="m-2 nav-blue-bg border-0 btn-lg"
							>
								Neu
							</Button>
						</Col>
					</Row>

					<Row
						id="newest"
						className="vh-full justify-content-center align-items-center"
					>
						<Col lg={8}>
							<Carousel className="shadow-lg">
								{all.map((all) => (
									<Carousel.Item key={all._id} style={{ height: "500px" }}>
										<img
											className="d-block w-100 carousel-imgs "
											src={urlFor(all.image && all.image[0])}
											alt={all.name}
										/>
										<Carousel.Caption>
											<h3>{all.name}</h3>
											<p>{all.details}</p>
										</Carousel.Caption>
									</Carousel.Item>
								))}
							</Carousel>{" "}
						</Col>
					</Row>

					<Row
						id="pumps"
						className="vh-full justify-content-center align-items-center"
					>
						<h1>Pump</h1>{" "}
						<Col lg={8}>
							<Carousel className="shadow-lg">
								{pump.map((pump) => (
									<Carousel.Item key={pump._id} style={{ height: "500px" }}>
										<img
											className="d-block w-100 carousel-imgs "
											src={urlFor(pump.image && pump.image[0])}
											alt={pump.name}
										/>
										<Carousel.Caption>
											<h3>{pump.name}</h3>
											<p>{pump.details}</p>
										</Carousel.Caption>
									</Carousel.Item>
								))}
							</Carousel>{" "}
						</Col>
					</Row>
					<Row
						id="solar"
						className="vh-full justify-content-center align-items-center"
					>
						<Row>
							<h1>Solar</h1>{" "}
						</Row>
						<Col lg={8}>
							<Carousel className="shadow-lg">
								{solar.map((solar) => (
									<Carousel.Item key={solar._id} style={{ height: "500px" }}>
										<img
											className="d-block w-100 carousel-imgs "
											src={urlFor(solar.image && solar.image[0])}
											alt={solar.name}
										/>
										<Carousel.Caption>
											<h3>{solar.name}</h3>
											<p>{solar.details}</p>
										</Carousel.Caption>
									</Carousel.Item>
								))}
							</Carousel>{" "}
						</Col>
					</Row>
					<Row
						id="klima"
						className="vh-full justify-content-center align-items-center"
					>
						<Row>
							<h1>Klima</h1>{" "}
						</Row>
						<Col lg={8}>
							<Carousel className="shadow-lg">
								{klima.map((klima) => (
									<Carousel.Item key={klima._id} style={{ height: "500px" }}>
										<img
											className="d-block w-100 carousel-imgs "
											src={urlFor(klima.image && klima.image[0])}
											alt={klima.name}
										/>
										<Carousel.Caption>
											<h3>{klima.name}</h3>
											<p>{klima.details}</p>
										</Carousel.Caption>
									</Carousel.Item>
								))}
							</Carousel>{" "}
						</Col>
					</Row>
				</Row>

				<Reviews />
			</Container>
		</div>
	);
}

export default Work;
