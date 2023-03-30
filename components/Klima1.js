import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Klima1() {
	return (
		<Row className="header-bg vh-100">
			<Row className="text-center text-dark justify-content-center">
				<Col lg={3} className="text-dark ">
					<h1 className="blur rounded text-uppercase ">Cooling Systems</h1>
				</Col>
			</Row>

			<Row className="text-center align-items-center justify-content-center text-dark blur ">
				<Col lg={10} className="    rounded text-center text-slide shadow-lg">
					<h3 className="">
						When it comes to purchasing a home cooling system, its important to
						work with a knowledgeable and experienced sales team. Our team is
						dedicated to helping you find the right system for your home, based
						on your specific needs and budget.
					</h3>
				</Col>
				<Col lg={10} className="  rounded text-center text-slide shadow-lg">
					<h3>
						We understand that investing in a home cooling system can be a
						significant expense, which is why we offer competitive pricing and
						financing options to make it more accessible. Our sales team will
						work with you to find a system that fits your budget, while still
						providing the cooling power you need.
					</h3>
				</Col>
				<Col lg={10} className=" rounded text-center px-0 text-slide shadow-lg">
					<h3>
						Additionally, we offer a range of services beyond just selling the
						system. Our team can provide professional installation services to
						ensure your new cooling system is installed correctly and running
						efficiently. We also offer ongoing maintenance and repairs to keep
						your system running smoothly for years to come.
					</h3>
				</Col>
			</Row>
			<Row className="text-center align-items-center"></Row>
		</Row>
	);
}

export default Klima1;
