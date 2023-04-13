import { useState, useEffect, useRef } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Carousel,
	Button,
	CardGroup,
} from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import sanityClient from "@sanity/client";
import CountUp from "react-countup";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { urlFor } from "../lib/client";

import Link from "next/link";

function Pumps4() {
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
			className="vh-full text-center justify-content-center align-items-center my-2  "
			ref={sectionRef}
		>
			<Col xl={5} lg={5} className=" p-3 rounded   rounded">
				<animated.div style={animationProps}>
					{" "}
					<Card className="border-0 ">
						<Card.Img src="/assets/audit.jpg" className="" />
					</Card>{" "}
				</animated.div>
			</Col>{" "}
			<Col xl={5} lg={5} className=" p-3 mx-2 ">
				<animated.div style={imgAnimationProps}>
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Body className="text-start">
							<h4 className=" text-dark">
								Wij voeren een betrouwbare audit uit
							</h4>{" "}
							<h4 className=" text-dark">
								Elk van onze offertes wordt voorafgegaan betrouwbare controle
							</h4>{" "}
							<h5>
								{" "}
								We kiezen niet zomaar een toestel. Iedereen die bij ons komt de
								klant moet voorbereid zijn op een reeks uitputtende vragen met
								betrekking tot het gebouw en een bezoek van een
								installateur/monteur/simpelweg leuke knappe meneer 😀 om de C.O.
							</h5>
							<h5>
								Pas na deze twee belangrijke stappen kunnen we het halen
								verantwoorde keuze van het apparaat en een bindende offerte.
							</h5>
						</Card.Body>
					</Card>
				</animated.div>
			</Col>{" "}
		</Row>
	);
}

export default Pumps4;
