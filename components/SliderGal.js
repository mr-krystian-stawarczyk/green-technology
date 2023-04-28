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
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
function SliderGal() {
	const [all, setAll] = useState([]);
	const client = sanityClient({
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		dataset: "production",
		useCdn: true,
		apiVersion: "2022-03-09",
	});
	const { t } = useTranslation();
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

	return (
		<Container fluid className="overflow-hidden py-5">
			<Row className="justify-content-center align-items-center text-center  text-dark">
				<Col className="my-5">
					{" "}
					<h1 className=" text-start bold">{t("h27")}</h1>{" "}
				</Col>
			</Row>
			<Row className="justify-content-center text-center align-items-center py-5">
				<Slider {...settings}>
					{all.map((item) => (
						<div key={item._id}>
							<img
								width={300}
								height={300}
								className="  mx-auto "
								src={urlFor(item.image && item.image[0])}
								alt={item.name}
							/>

							<h5>{item.name}</h5>
							<p>{item.details}</p>
						</div>
					))}
				</Slider>
			</Row>
		</Container>
	);
}

export default SliderGal;
