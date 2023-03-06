import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";
import { useEffect, useRef, useState } from "react";

import { useSpring, animated } from "react-spring";

import { useRouter } from "next/router";
function Products() {
	const router = useRouter();
	const { id } = router.query;

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateY(-100px)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateY(0)" : "translateY(-100px)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	return (
		<>
			<Container fluid className="mt-5 pt-5 products-bg " ref={sectionRef}>
				<ContactForm />
				<Row
					className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center vh-100"
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					id="product1"
				>
					<Col lg={5} className="">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Img src="/assets/header.jpg" className="shadow-lg" />
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "black",
									}}
									className=" header-text"
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="">
						<animated.div style={animationProps}>
							{" "}
							<Card
								style={{
									border: "none",
								}}
								className="bg-transparent "
							>
								<Card.Body className="text-center">
									<Card.Title
										style={{
											fontWeight: "bold",
											color: "black",
										}}
										className=" header-text"
									>
										Our heating pumps are designed to provide efficient and
										reliable heating solutions for homes and businesses, using
										the latest technology to help you save on energy bills.
									</Card.Title>
									<Card.Text className="mt-5 bg-transparent"></Card.Text>
								</Card.Body>
							</Card>
						</animated.div>
					</Col>
				</Row>
				<Row
					className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center secondary-bg vh-100"
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					id="product2"
				>
					<Col lg={5} className="">
						<animated.div style={animationProps}>
							<Card
								style={{
									border: "none",
								}}
								className="bg-transparent "
							>
								<Card.Body className="text-center">
									<Card.Title
										style={{
											fontWeight: "bold",
											color: "white",
										}}
										className=" header-text"
									>
										Our control units allow you to easily manage and monitor
										your heating and cooling systems, ensuring optimal
										performance and comfort.
									</Card.Title>
									<Card.Text className="mt-5 bg-transparent"></Card.Text>
								</Card.Body>
							</Card>
						</animated.div>
					</Col>
					<Col lg={5} className="">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Img src="/assets/header.jpg" className="shadow-lg" />
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "white",
									}}
									className=" header-text"
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row
					className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center header-bg vh-100"
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					id="product3"
				>
					<Col lg={5} className="">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Img src="/assets/header.jpg" className="shadow-lg" />
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "black",
									}}
									className=" header-text"
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="">
						<animated.div style={animationProps}>
							{" "}
							<Card
								style={{
									border: "none",
								}}
								className="bg-transparent "
							>
								<Card.Body className="text-center">
									<Card.Title
										style={{
											fontWeight: "bold",
											color: "black",
										}}
										className=" header-text"
									>
										Our klimatization systems provide precise temperature and
										humidity control, creating a comfortable and healthy
										environment for your home or office.
									</Card.Title>
									<Card.Text className="mt-5 bg-transparent"></Card.Text>
								</Card.Body>
							</Card>
						</animated.div>
					</Col>
				</Row>
				<Row
					className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center secondary-bg vh-100"
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					id="product4"
				>
					<Col lg={5} className="">
						<animated.div style={animationProps}>
							{" "}
							<Card
								style={{
									border: "none",
								}}
								className="bg-transparent "
							>
								<Card.Body className="text-center">
									<Card.Title
										style={{
											fontWeight: "bold",
											color: "white",
										}}
										className=" header-text"
									>
										Our solar panels are a sustainable and cost-effective
										solution for powering your home or business, helping you
										reduce your carbon footprint and save on electricity bills.
									</Card.Title>
									<Card.Text className="mt-5 bg-transparent"></Card.Text>
								</Card.Body>
							</Card>
						</animated.div>
					</Col>
					<Col lg={5} className="">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Img src="/assets/header.jpg" className="shadow-lg" />
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "white",
									}}
									className=" header-text"
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row
					className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center vh-100"
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					id="product5"
				>
					<Col lg={5} className="">
						<Card
							style={{
								border: "none",
							}}
							className="bg-transparent "
						>
							<Card.Img src="/assets/header.jpg" className="shadow-lg" />
							<Card.Body className="text-center">
								<Card.Title
									style={{
										fontWeight: "bold",
										color: "black",
									}}
									className=" header-text"
								></Card.Title>
								<Card.Text className="mt-5 bg-transparent"></Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="">
						<animated.div style={animationProps}>
							{" "}
							<Card
								style={{
									border: "none",
								}}
								className="bg-transparent "
							>
								<Card.Body className="text-center">
									<Card.Title
										style={{
											fontWeight: "bold",
											color: "black",
										}}
										className=" header-text"
									>
										In addition to our core products, we offer a range of
										accessories and services to help you get the most out of
										your heating and cooling systems, from installation to
										maintenance and repair.
									</Card.Title>
									<Card.Text className="mt-5 bg-transparent"></Card.Text>
								</Card.Body>
							</Card>
						</animated.div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Products;
