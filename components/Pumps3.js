import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function Pumps3() {
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
	return (
		<Row
			className=" justify-content-center align-items-center   my-2 pt-5"
			ref={sectionRef}
		>
			<Col lg={6} className=" p-3 mx-2  ">
				<animated.div style={animationProps}>
					{" "}
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Body className="">
							<h2 className="text-center"> {t("po4")}</h2>
							<h5 className="my-3">{t("po5")}</h5>{" "}
							<h5 className="">{t("po6")}</h5>
						</Card.Body>
					</Card>
				</animated.div>
			</Col>{" "}
			<Col lg={5} className=" p-3 rounded  rounded ">
				{" "}
				<animated.div style={animationProps}>
					{" "}
					<Card className="border-0 ">
						<Card.Img src="/assets/grafika-pomp 1.png" className="hover2" />
					</Card>{" "}
				</animated.div>
			</Col>
		</Row>
	);
}

export default Pumps3;
