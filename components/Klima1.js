import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Klima1() {
	return (
		<Row className="header-bg vh-full align-items-center justify-content-center  rounded pt-3 ">
			<Row className="text-center text-dark justify-content-center">
				<Col lg={7} className="text-dark ">
					<p className="display-1 ">Cooling Systems</p>
				</Col>
			</Row>

			<Row className="text-center align-items-center justify-content-center text-dark blur ">
				<Col
					lg={10}
					className="    rounded text-center text-slide shadow-lg my-2"
				>
					<p className="lead ">
						When it comes to purchasing a home cooling system, its important to
						work with a knowledgeable and experienced sales team. Our team is
						dedicated to helping you find the right system for your home, based
						on your specific needs and budget.
					</p>
				</Col>
				<Col
					lg={10}
					className="  rounded text-center text-slide shadow-lg my-2"
				>
					<p className="lead ">
						We understand that investing in a home cooling system can be a
						significant expense, which is why we offer competitive pricing and
						financing options to make it more accessible. Our sales team will
						work with you to find a system that fits your budget, while still
						providing the cooling power you need.
					</p>
				</Col>
				<Col
					lg={10}
					className=" rounded text-center px-0 text-slide shadow-lg my-2"
				>
					<p className="lead">
						Additionally, we offer a range of services beyond just selling the
						system. Our team can provide professional installation services to
						ensure your new cooling system is installed correctly and running
						efficiently. We also offer ongoing maintenance and repairs to keep
						your system running smoothly for years to come.
					</p>
				</Col>
			</Row>
			<Row className="text-center align-items-center"></Row>
		</Row>
	);
}

export default Klima1;
