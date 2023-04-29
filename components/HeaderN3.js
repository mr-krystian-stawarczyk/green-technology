import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import sanityClient from "@sanity/client";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { urlFor } from "../lib/client";
import { useTranslation } from "react-i18next";
function HeaderN3() {
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
				<Row className="py-3 text-start">
					<Col lg={7}>
						<h1 className="bold">{t("h18")}</h1>
					</Col>
				</Row>{" "}
				<Col lg={6} className=" p-3 rounded ">
					<animated.div style={animationProps}>
						<Card
							style={{
								border: "none",
							}}
							className=""
						>
							<Card.Body className=" text-dark text-center">
								<h5 className="bold">
									<AiOutlineCheckCircle
										className="text-green m-1 "
										style={{ height: "28px", width: "28px" }}
									/>
									{t("h19")}
								</h5>
								<h5 className="bold">
									<AiOutlineCheckCircle
										className="text-green m-1 "
										style={{ height: "28px", width: "28px" }}
									/>
									{t("h20")}
								</h5>{" "}
								<h5 className="text-center p-2 bold">
									<AiOutlineCheckCircle
										className="text-green m-1 "
										style={{ height: "28px", width: "28px" }}
									/>
									{t("h21")}
								</h5>
								<Nav.Link as={Link} href="/products">
									<Button className=" p-2  text-bold  text-dark shadow-lg hover m-5 nav-blue-bg border-0 text-white ">
										{t("h22")}
									</Button>
								</Nav.Link>{" "}
							</Card.Body>
						</Card>{" "}
					</animated.div>
				</Col>
				<Col lg={5} className="p-3 rounded   m-2">
					<animated.div style={animationPropsMiddle}>
						{promo.map((item) => (
							<Card key={item._id} className="rounded-0 border-0">
								<Card.Img
									className="d-block w-100 carousel-imgs hover  border-0 rounded-0 shadow-lg"
									src={urlFor(item.image && item.image[0])}
									alt={item.name}
								/>
							</Card>
						))}{" "}
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default HeaderN3;
