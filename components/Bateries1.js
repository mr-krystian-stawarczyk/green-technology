import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function Bateries1() {
	const { t } = useTranslation();

	const router = useRouter();
	const { id } = router.query;

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

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
		<Row
			className="  justify-content-center align-items-center my-5 text-dark pt-5"
			ref={sectionRef}
		>
			<Col xl={5} lg={5} className="  rounded  rounded m-2">
				<animated.div style={animationPropsMiddle}>
					{" "}
					<Card className="border-0 ">
						<Card.Img src="/assets/home-battery.png" className="" />
					</Card>{" "}
				</animated.div>
			</Col>
			<Col xl={5} lg={5} className=" rounded p-2 m-2 mx-auto">
				<animated.div style={animationProps}>
					<Card
						style={{
							border: "none",
						}}
						className=" "
					>
						<Card.Body className="text-center">
							<h2 className=" text-dark text-center ">{t("bt1")}</h2>
							<h5 className=" text-dark  text-start my-3">{t("bt2")}</h5>
							<h5 className=" text-dark text-start">{t("bt3")}</h5>
						</Card.Body>{" "}
					</Card>
				</animated.div>{" "}
			</Col>
		</Row>
	);
}

export default Bateries1;
