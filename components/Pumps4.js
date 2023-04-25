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
			className=" text-center justify-content-center align-items-center my-2 mt-5 "
			ref={sectionRef}
		>
			<Col lg={5} className=" p-3 rounded   rounded">
				<animated.div style={animationProps}>
					{" "}
					<Card className="border-0 ">
						<Card.Img src="/assets/audit.jpg" className="" />
					</Card>{" "}
				</animated.div>
			</Col>{" "}
			<Col lg={6} className=" p-3 mx-2 ">
				<animated.div style={animationProps}>
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Body>
							<h1 className=" text-dark text-center">
								Wij voeren een betrouwbare audit uit
							</h1>{" "}
							<h6 className=" text-dark text-start">
								Elk van onze offertes wordt voorafgegaan betrouwbare controle.
							</h6>{" "}
							<h6 className=" text-dark text-start">
								{" "}
								We kiezen niet zomaar een toestel. Iedereen die bij ons komt de
								klant moet voorbereid zijn op een reeks uitputtende vragen met
								betrekking tot het gebouw en een bezoek van een
								installateur/monteur/simpelweg leuke knappe meneer 😀 om de C.O.
							</h6>
							<h6 className=" text-dark text-start">
								Pas na deze twee belangrijke stappen kunnen we het halen
								verantwoorde keuze van het apparaat en een bindende offerte.
							</h6>
						</Card.Body>
					</Card>
				</animated.div>
			</Col>{" "}
		</Row>
	);
}

export default Pumps4;
