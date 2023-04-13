import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Pumps2() {
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
			className="  justify-content-center align-items-center vh-full my-2 text-dark mt-5"
			ref={sectionRef}
		>
			<Col xl={5} lg={5} className=" p-3 rounded   rounded">
				<animated.div style={imgAnimationProps}>
					<Card className="border-0  bg-transparent">
						<Card.Img src="/assets/pump-new.png " className="" />
					</Card>{" "}
				</animated.div>
			</Col>
			<Col xl={5} lg={5} className=" p-3 mx-2 ">
				<animated.div style={animationProps}>
					{" "}
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Body className="">
							<h1 className=" text-dark"> Wat is een warmtepomp?</h1>
							<h5>
								Wat doet een warmtepomp in huis? Een warmtepomp haalt warmte uit
								de lucht, de bodem of het grondwater. Hiervoor gebruikt hij
								stroom, maar veel minder dan bij elektrisch verwarmen zonder
								warmtepomp. Een warmtepomp werkt eigenlijk als een omgekeerde
								koelkast. In plaats van dat hij warmte afvoert, haalt een
								warmtepomp juist warmte van buiten naar binnen.
							</h5>
							<h5>
								Je kunt je huis verwarmen met een hybride of een volledig
								elektrische warmtepomp. Een warmtepomp werkt het best in
								combinatie met goede isolatie. Zorg dus dat je huis redelijk
								geïsoleerd is voordat je een hybride warmtepomp koopt, en goed
								geïsoleerd voor je een volledige warmtepomp neemt. Hybride
								warmtepompen halen warmte meestal uit de buitenlucht. Een
								volledige warmtepomp kan ook andere bronnen gebruiken.
								Warmtepompen kun je indelen naar bronnen van warmte:
							</h5>
						</Card.Body>
					</Card>{" "}
				</animated.div>
			</Col>
		</Row>
	);
}

export default Pumps2;
