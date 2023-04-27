import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function Solar1() {
	const router = useRouter();
	const { id } = router.query;
	const { t } = useTranslation();
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
		<Container ref={sectionRef} className="pt-5">
			<Row className="  text-center text-dark justify-content-center align-items-center   py-5">
				<Col lg={5} className="     text-center ">
					{" "}
					<animated.div style={animationPropsMiddle}>
						<Card className="border-0 rounded-0">
							<Card.Img
								src="/assets/solary1.jpg"
								className="border-0 rounded-0 pb-3"
							/>
						</Card>{" "}
					</animated.div>
				</Col>
				<Col lg={5} className=" text-start mx-auto">
					<animated.div style={animationProps}>
						<h2 className="text-center"> {t("sl1")} </h2>
						<h5>{t("sl2")}</h5>
						<h5 className="my-3">{t("sl3")}</h5>
						<h5>{t("sl4")}</h5>{" "}
					</animated.div>
				</Col>
			</Row>{" "}
		</Container>
	);
}

export default Solar1;
