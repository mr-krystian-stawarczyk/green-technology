import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useTranslation } from "react-i18next";
function Voll3() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);
	const { t } = useTranslation();
	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [sectionRef]);

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
			className=" text-dark  d-flex align-items-center  "
			ref={sectionRef}
		>
			<Row
				className="  d-flex justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={5} className="p-3    m-2">
					{" "}
					<Card className="border-0">
						{" "}
						<animated.div style={animationProps}>
							<Card.Img src="/assets/voll2.png" className="rounded-0 mt-5" />{" "}
						</animated.div>
					</Card>{" "}
				</Col>
				<Col lg={5} className=" p-3 mx-2   m-2">
					<Card
						style={{
							border: "none",
						}}
						className=""
					>
						<animated.div style={animationPropsMiddle}>
							<Card.Body className=" text-center">
								<h2 className="text-center bold py-5">{t("vo2")}</h2>
								<h6 className="text-start">{t("vo3")}</h6>
							</Card.Body>{" "}
						</animated.div>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Voll3;
