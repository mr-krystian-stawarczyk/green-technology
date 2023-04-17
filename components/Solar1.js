import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

function Solar1() {
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
		<Container ref={sectionRef}>
			<Row className="  text-center text-dark justify-content-center align-items-center  mt-5 pt-3">
				<Col lg={5} className="    rounded text-center ">
					{" "}
					<animated.div style={animationProps}>
						<Card className="border-0">
							<Card.Img src="/assets/solary1.jpg" className="" />
						</Card>{" "}
					</animated.div>
				</Col>
				<Col lg={6} className=" text-start m-1">
					<animated.div style={animationProps}>
						<h1 className="text-center"> AM Fotovoltaïsche </h1>
						<h5>
							Schakel over op je eigen energie en kijk hoeveel je kunt bespaar
							dankzij de technologie van de toekomst, namelijk fotovoltaïsche
							energie.
						</h5>
						<h5>
							Als u deze onmiskenbaar winstgevende investering plant – prima jij
							raakt. Wij bieden u een oplossing die perfect is afgestemd op uw
							behoeften.
						</h5>
						<h5>
							Ontdek hoe u eenvoudig kunt besparen, onafhankelijk kunt zijn en
							terwijl je de planeet beschermt.
						</h5>{" "}
					</animated.div>
				</Col>
			</Row>{" "}
		</Container>
	);
}

export default Solar1;
