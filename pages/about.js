import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
	const [fade, setFade] = React.useState(false);

	React.useEffect(() => {
		setFade(true);
	}, []);

	return (
		<Container fluid className="header-bg">
			<Row
				className={`secondary-bg vh-100 shadow-lg ${
					fade ? "fade-in" : ""
				} rounded`}
			>
				<Row className="text-center mt-5 pt-5 text-dark justify-content-center">
					<Col lg={3} className="text-white ">
						<h1 className="blur rounded text-uppercase">About Us</h1>
					</Col>
				</Row>

				<Row className="text-center align-items-center justify-content-center text-white blur ">
					<Col lg={10} className="    rounded text-center text-slide shadow-lg">
						<h3 className="">
							Welcome to our companys subpage! We specialize in providing
							heating pumps and solar panels for residential and commercial
							properties.
						</h3>
					</Col>
					<Col lg={10} className="  rounded text-center text-slide shadow-lg">
						<h3>
							Our heating pumps use advanced technology to provide efficient and
							cost-effective heating solutions, while our solar panels harness
							the power of the sun to provide renewable energy for your
							property.
						</h3>
					</Col>
					<Col
						lg={10}
						className=" rounded text-center px-0 text-slide shadow-lg"
					>
						<h3>
							With over 20 years of experience in the industry, were committed
							to providing the highest quality products and services to our
							customers.
						</h3>
					</Col>
				</Row>
				<Row className="text-center align-items-center"></Row>
			</Row>
			<Row className="mt-5 pt-5 text-center d-flex justify-content-center align-items-center rounded shadow-lg">
				<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/about1.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Text className=" bg-transparent">
								As a company specializing in the installation of solar panels,
								batteries, heating pumps, and climatization, we are committed to
								delivering quality and sustainable solutions to our clients. Our
								goal is to help our customers reduce their carbon footprint and
								achieve energy independence while lowering their energy bills.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/about2.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Text className=" bg-transparent">
								We have been in the industry for many years, and we pride
								ourselves on our extensive knowledge and experience in the
								field. Our team is made up of highly skilled and qualified
								technicians who are dedicated to providing exceptional service
								to our clients. We are constantly updating our knowledge and
								skills to ensure that we stay on top of the latest industry
								trends and technologies.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/about3.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Text className=" bg-transparent">
								At our company, we understand that every client has unique
								energy needs, which is why we offer customized solutions that
								are tailored to meet our clients specific requirements. We work
								closely with our clients to understand their energy needs and
								provide them with a range of solutions that fit their budget and
								goals.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/about5.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Text className=" bg-transparent">
								We are committed to sustainability and environmentally friendly
								practices. We believe that our work can have a positive impact
								on the environment, and we are dedicated to doing our part to
								reduce our carbon footprint. We use sustainable materials,
								recycle whenever possible, and strive to reduce waste in all of
								our operations.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/about4.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Text className=" bg-transparent">
								Our services include the installation of solar panels,
								batteries, heating pumps, and climatization systems. We use only
								the highest quality products and materials to ensure that our
								installations are durable, efficient, and reliable. We also
								provide ongoing maintenance and support to ensure that our
								clients systems continue to perform at optimal levels.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
					<Card
						style={{
							border: "none",
						}}
						className="bg-transparent "
					>
						<Card.Img src="/assets/about6.jpg" className="shadow-lg" />
						<Card.Body className="text-center">
							<Card.Text className=" bg-transparent">
								We believe in transparency and honesty in all of our dealings.
								We provide our clients with clear and detailed information about
								our services, products, and pricing, so they can make informed
								decisions. We also offer free consultations and quotes to help
								our clients understand the options available to them.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="bg-dark justify-content-center align-items-center text-center p-3 my-3 shadow-lg">
				<Col className="text-white bg-transparent">
					<Card className="bg-transparent border-0">
						<Card.Img
							src="/assets/izzifast.png"
							className="shadow-lg bg-transparent rounded hover"
						/>
					</Card>
				</Col>
				<Col className="text-white bg-transparent">
					<Card className="bg-transparent border-0">
						<Card.Img
							src="/assets/Haier.png"
							className="shadow-lg bg-transparent rounded hover"
						/>
					</Card>
				</Col>
				<Col className="text-white bg-transparent">
					<Card className="bg-transparent border-0">
						<Card.Img
							src="/assets/LG.png"
							className="shadow-lg bg-transparent rounded hover"
						/>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
