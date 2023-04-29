import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";

import sanityClient from "@sanity/client";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { urlFor } from "../lib/client";

function ProductsPromo() {
	const [promo, setPromo] = useState([]);
	const { t } = useTranslation();

	const client = sanityClient({
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		dataset: "production",
		useCdn: true,
		apiVersion: "2022-03-09",
	});

	const fetchData = async () => {
		const result = await client.fetch(`*[_type == "promo"]`);
		setPromo(result);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, options);
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [sectionRef, options]);

	const handleIntersection = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
			if (entries[0].isIntersecting) {
				setAnimate(true);
				setAnimateImg(true);
			}
		});
	};

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
		<Container
			className=" text-dark  d-flex align-items-center  p-2 mt-5 pt-5"
			ref={sectionRef}
		>
			<Row
				className="  d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{" "}
				<Row className="py-3 text-start">
					<animated.div style={animationPropsMiddle}>
						<Col lg={6} className="my-3">
							<h1 className="bold my-5">{t("p5")}</h1>
						</Col>
					</animated.div>
				</Row>{" "}
				<Col lg={5}>
					<animated.div style={animationProps}>
						{promo.map((item) => (
							<Card key={item._id} className="border-0 rounded-0">
								<Card.Img
									className="d-block w-100 carousel-imgs hover border-0 rounded-0"
									src={urlFor(item.image && item.image[0])}
									alt={item.name}
								/>
							</Card>
						))}
					</animated.div>
				</Col>
				<Col lg={5} className="">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent"
						>
							<Card.Body className=" text-dark text-center">
								<h5 className="text-center p-2 bold">
									<AiOutlineCheckCircle
										className="text-green m-1 "
										style={{ height: "28px", width: "28px" }}
									/>
									{t("p6")}
								</h5>
								<h5 className="text-center p-2 bold">
									<AiOutlineCheckCircle
										className="text-green m-1 "
										style={{ height: "28px", width: "28px" }}
									/>
									{t("p7")}
								</h5>
								<h5 className="text-center p-2 bold">
									<AiOutlineCheckCircle
										className="text-green m-1 "
										style={{ height: "28px", width: "28px" }}
									/>
									{t("p8")}
								</h5>
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default ProductsPromo;
