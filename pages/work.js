import { useState, useEffect, useRef } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	Carousel,
	Image,
} from "react-bootstrap";
import { urlFor } from "../lib/client";
import { Product, Reviews } from "../components";
import sanityClient from "@sanity/client";
import { useSpring, animated } from "react-spring";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
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
		const observer = new IntersectionObserver(handleIntersection);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		// Fetch the happy client count from Sanity

		return () => {
			observer.disconnect();
		};
	}, [sectionRef]);

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
		<Container className=" " ref={sectionRef}>
			<Row
				className="text-center pt-5 justify-content-center align-items-center  "
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

				<Row id="newest" className=" justify-content-center align-items-center">
					<Col lg={8} className="">
						<animated.div style={animationProps}>
							<Carousel className="shadow-lg">
								{all.map((all) => (
									<Carousel.Item key={all._id} style={{ height: "500px" }}>
										<Image
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
						</animated.div>
					</Col>
				</Row>
				<Row className="my-5 text-start align-items-center justify-content-center">
					<Col lg={6}>
						<h1>Bekijk meer van ons werk</h1>
					</Col>
					<Col lg={6} className="d-flex">
						<Nav.Link as={Link} href="workpump">
							<Button className="m-2 nav-blue-bg border-0 btn-lg">Pumps</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="worksolar">
							<Button className="m-2 nav-blue-bg border-0 btn-lg">Solar</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="workklima">
							<Button className="m-2 nav-blue-bg border-0 btn-lg">Klima</Button>{" "}
						</Nav.Link>
					</Col>
				</Row>
			</Row>

			<Reviews />
		</Container>
	);
}

export default Work;
