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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const client = sanityClient({
	projectId: process.env.NEXT_PUBLIC_PROJECTID,
	dataset: "production",
	useCdn: true,
	apiVersion: "2022-03-09",
});
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true, // Add autoplay setting
	autoplaySpeed: 3000, // Set the speed of the autoplay
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

function Work() {
	const { t } = useTranslation();
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
		<Container className="my-5 py-3 " ref={sectionRef}>
			<Row
				className="text-center  justify-content-center align-items-center  "
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Row className=" text-start">
					<Col lg={6}>
						<h1 className="bold pt-5">{t("w1")}</h1>
					</Col>
				</Row>
			</Row>
			<Row className="justify-content-center text-center align-items-center py-5">
				<animated.div style={animationProps}>
					{" "}
					<Slider {...settings}>
						{all.map((item) => (
							<div key={item._id}>
								<img
									width={350}
									height={350}
									className="  mx-auto smadow-sm"
									src={urlFor(item.image && item.image[0])}
									alt={item.name}
								/>

								<h5 className="my-3 bold">{item.name}</h5>
								<p>{item.details}</p>
							</div>
						))}
					</Slider>
				</animated.div>
			</Row>
			<Reviews />
		</Container>
	);
}

export default Work;
