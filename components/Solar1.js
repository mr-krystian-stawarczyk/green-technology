import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Solar1() {
	return (
		<Row className="header-bg vh-100">
			<Row className="text-center text-dark justify-content-center">
				<Col lg={4} className="text-dark ">
					<h1 className="blur rounded text-uppercase ">Solar Panels</h1>
				</Col>
			</Row>

			<Row className="text-center align-items-center justify-content-center text-dark blur ">
				<Col lg={10} className="    rounded text-center text-slide shadow-lg">
					<h3 className="">
						Solar panels are an excellent investment for those looking to reduce
						their carbon footprint and save money on their energy bills. By
						converting sunlight into electricity, solar panels can power your
						home or business with clean and renewable energy.
					</h3>
				</Col>
				<Col lg={10} className="  rounded text-center text-slide shadow-lg">
					<h3>
						Solar panels require little to no maintenance and can last for
						decades, making them a cost-effective solution for long-term energy
						savings. They also add value to your property and can even increase
						your homes resale value.
					</h3>
				</Col>
				<Col lg={10} className=" rounded text-center px-0 text-slide shadow-lg">
					<h3>
						When you purchase solar panels from us, our experienced sales team
						will work with you to design a customized system that meets your
						energy needs and budget. We also offer professional installation
						services and ongoing maintenance to ensure your solar panels are
						operating at peak efficiency.
					</h3>
				</Col>
			</Row>
			<Row className="text-center align-items-center"></Row>
		</Row>
	);
}

export default Solar1;
