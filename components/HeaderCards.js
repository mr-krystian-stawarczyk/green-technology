import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function HeaderCards() {
	return (
		<Container fluid className="header-bg vh-full">
			<Row className="  justify-content-center align-items-center rounded">
				<Col lg={3} className="hover2 m-2 shadow-lg p-2 blur rounded">
					<Card
						style={{
							border: "none",
						}}
						className=" "
					>
						<Card.Img
							src="/assets/nature.svg"
							className="shadow-lg  mx-auto"
							style={{
								border: "none",
								width: "18rem",
								height: "20rem",
							}}
						/>
						<Card.Body className="text-center">
							<Card.Text className=" bg-white rounded p-2">
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
						className=""
					>
						<Card.Img
							src="/assets/eco.svg"
							className="shadow-lg mx-auto "
							style={{
								border: "none",
								width: "18rem",
								height: "20rem",
							}}
						/>
						<Card.Body className="text-center">
							<Card.Text className=" bg-white rounded p-2">
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
						className=" "
					>
						<Card.Img
							src="/assets/client.svg"
							className="shadow-lg  mx-auto"
							style={{
								border: "none",
								width: "18rem",
								height: "20rem",
							}}
						/>
						<Card.Body className="text-center">
							<Card.Text className=" bg-white rounded p-2">
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
						<Card.Img
							src="/assets/environmen.svg"
							className="shadow-lg  mx-auto"
							style={{
								border: "none",
								width: "18rem",
								height: "20rem",
							}}
						/>
						<Card.Body className="text-center">
							<Card.Text className=" bg-white rounded p-2">
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
						<Card.Img
							src="/assets/break.svg"
							className="shadow-lg  mx-auto"
							style={{
								border: "none",
								width: "18rem",
								height: "20rem",
							}}
						/>
						<Card.Body className="text-center">
							<Card.Text className=" bg-white rounded p-2">
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
						<Card.Img
							src="/assets/savings.svg"
							className="shadow-lg  mx-auto"
							style={{
								border: "none",
								width: "18rem",
								height: "20rem",
							}}
						/>
						<Card.Body className="text-center">
							<Card.Text className=" bg-white rounded p-2">
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
		</Container>
	);
}

export default HeaderCards;
